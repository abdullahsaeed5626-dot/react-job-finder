import { createContext, useContext, useEffect, useState } from "react";

import type { Job } from "../types/job";

type JobContextType = {
  savedJobs: Job[];
  saveJob: (job: Job) => void;
  removeJob: (id: number) => void;
  isJobSaved: (id: number) => boolean;
  toastMessage: string | null;
  clearToast: () => void;
};

const LOCAL_STORAGE_KEY = "job_finder_saved_jobs";

const JobContext = createContext<JobContextType | undefined>(undefined);

export function JobProvider({ children }: { children: React.ReactNode }) {
  const [savedJobs, setSavedJobs] = useState<Job[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to parse saved jobs from localStorage", error);
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedJobs));
    } catch (error) {
      console.error("Failed to save jobs to localStorage", error);
    }
  }, [savedJobs]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const clearToast = () => {
    setToastMessage(null);
  };

  function saveJob(job: Job) {
    setSavedJobs((currentJobs) => {
      const alreadySaved = currentJobs.some(
        (savedJob) => savedJob.id === job.id,
      );

      if (alreadySaved) {
        return currentJobs;
      }

      showToast(`Saved "${job.title}" to your list`);
      return [...currentJobs, job];
    });
  }

  function removeJob(id: number) {
    setSavedJobs((currentJobs) => {
      const targetJob = currentJobs.find((job) => job.id === id);
      if (targetJob) {
        showToast(`Removed "${targetJob.title}" from saved jobs`);
      }
      return currentJobs.filter((job) => job.id !== id);
    });
  }

  function isJobSaved(id: number) {
    return savedJobs.some((job) => job.id === id);
  }

  return (
    <JobContext.Provider
      value={{
        savedJobs,
        saveJob,
        removeJob,
        isJobSaved,
        toastMessage,
        clearToast,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export function useJobContext() {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error("useJobContext must be used inside JobProvider");
  }

  return context;
}
