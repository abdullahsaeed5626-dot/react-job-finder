import { Link } from "react-router-dom";
import { useJobContext } from "../context/JobContext";
import type { Job } from "../types/job";

type JobCardProps = {
  job: Job;
};

function JobCard({ job }: JobCardProps) {
  const { isJobSaved, saveJob, removeJob } = useJobContext();

  const saved = isJobSaved(job.id);

  const handleToggleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent navigating if JobCard is wrapped inside a click handler or container link
    event.stopPropagation();

    if (saved) {
      removeJob(job.id);
    } else {
      saveJob(job);
    }
  };

  return (
    <article className="job-card">
      <div className="job-card-info">
        <h3>{job.title}</h3>
        <p className="company">{job.company}</p>
        <p className="location">{job.location}</p>
      </div>

      <div className="job-card-actions">
        <button
          type="button"
          onClick={handleToggleSave}
          className={`save-button ${saved ? "saved" : ""}`}
          aria-label={
            saved ? `Remove ${job.title} from saved jobs` : `Save ${job.title}`
          }
        >
          {saved ? "★ Saved" : "☆ Save Job"}
        </button>

        <Link to={`/jobs/${job.id}`} className="details-button">
          View Details
        </Link>
      </div>
    </article>
  );
}

export default JobCard;
