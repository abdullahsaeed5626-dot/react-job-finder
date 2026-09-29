import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import type { Job } from "../types/job";
import { getJobById } from "../services/jobApi";
import { useJobContext } from "../context/JobContext";

function JobDetails() {
  const { id } = useParams();
  const { isJobSaved, saveJob, removeJob } = useJobContext();

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadJob() {
      try {
        setLoading(true);
        setError("");

        const data = await getJobById(Number(id));
        setJob(data);
      } catch {
        setError("Failed to load this job.");
      } finally {
        setLoading(false);
      }
    }

    loadJob();
  }, [id]);

  if (loading) {
    return (
      <main className="main-content">
        <p>Loading job...</p>
      </main>
    );
  }

  if (error || !job) {
    return (
      <main className="main-content">
        <h2>Job not found</h2>
        <p>{error}</p>
        <Link to="/">← Back to Jobs</Link>
      </main>
    );
  }

  const saved = isJobSaved(job.id);

  const handleToggleSave = () => {
    if (saved) {
      removeJob(job.id);
    } else {
      saveJob(job);
    }
  };

  return (
    <main className="main-content">
      <article className="job-details">
        <div className="job-details-header">
          <Link to="/">← Back to Jobs</Link>
          <button
            type="button"
            onClick={handleToggleSave}
            className={`save-button ${saved ? "saved" : ""}`}
            aria-label={
              saved
                ? `Remove ${job.title} from saved jobs`
                : `Save ${job.title}`
            }
          >
            {saved ? "★ Saved" : "☆ Save Job"}
          </button>
        </div>

        <h2>{job.title}</h2>

        <p>
          <strong>Company:</strong> {job.company}
        </p>

        <p>
          <strong>Location:</strong> {job.location}
        </p>

        <div>
          <h3>Description</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: job.description,
            }}
          />
        </div>

        {/* Both Internal Form and External Application Links */}
        <div className="details-actions">
          <Link to={`/apply/${job.id}`} className="details-button">
            Apply via App Form
          </Link>

          {job.url && (
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link-btn"
            >
              Apply on Remotive ↗
            </a>
          )}
        </div>
      </article>
    </main>
  );
}

export default JobDetails;
