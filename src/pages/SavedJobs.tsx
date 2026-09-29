import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import { useJobContext } from "../context/JobContext";

function SavedJobs() {
  const { savedJobs } = useJobContext();

  return (
    <main className="main-content">
      <section className="jobs-section">
        <h2>Your Saved Jobs ({savedJobs.length})</h2>

        {savedJobs.length === 0 ? (
          <div className="empty-state">
            <p>You haven't saved any jobs yet.</p>
            <Link to="/" className="details-button">
              Browse Jobs
            </Link>
          </div>
        ) : (
          savedJobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </section>
    </main>
  );
}

export default SavedJobs;
