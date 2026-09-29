import type { Job } from "../types/job";

type ApiJob = {
  id: number;
  title: string;
  company_name: string;
  candidate_required_location: string;
  description: string;
  url: string;
};

export async function getJobs(): Promise<Job[]> {
  const response = await fetch(
    "https://remotive.com/api/remote-jobs?limit=20"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await response.json();

  return data.jobs.map((job: ApiJob) => ({
    id: job.id,
    title: job.title,
    company: job.company_name,
    location: job.candidate_required_location,
    description: job.description,
    url: job.url,
  }));
}

export async function getJobById(
  id: number
): Promise<Job> {
  const jobs = await getJobs();

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    throw new Error("Job not found");
  }

  return job;
}