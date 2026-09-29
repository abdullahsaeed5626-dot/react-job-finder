import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getJobById } from "../services/jobApi";
import type { Job } from "../types/job";
import { useJobContext } from "../context/JobContext";

function ApplyJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function loadJob() {
      try {
        setLoading(true);
        setError("");
        const data = await getJobById(Number(id));
        setJob(data);
      } catch {
        setError("Failed to load job details.");
      } finally {
        setLoading(false);
      }
    }

    loadJob();
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !resume) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    // Simulate API call delay for submitting application
    setTimeout(() => {
      setSubmitting(false);
      alert(
        `Application submitted successfully for ${job?.title} at ${job?.company}!`,
      );
      navigate("/");
    }, 1200);
  };

  if (loading) {
    return (
      <main className="main-content">
        <p>Loading application form...</p>
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

  return (
    <main className="main-content">
      <div className="application-container">
        <Link to={`/jobs/${job.id}`}>← Back to Job Details</Link>

        <header className="application-header">
          <h2>Apply for {job.title}</h2>
          <p className="company">
            {job.company} — {job.location}
          </p>
        </header>

        <form onSubmit={handleSubmit} className="application-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              required
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              required
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="resume">Upload Resume (PDF/DOC) *</label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setResume(e.target.files[0]);
                }
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter / Note</label>
            <textarea
              id="coverLetter"
              rows={5}
              placeholder="Tell us why you're a great fit for this role..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="details-button submit-btn"
            disabled={submitting}
          >
            {submitting ? "Submitting Application..." : "Submit Application"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default ApplyJob;
