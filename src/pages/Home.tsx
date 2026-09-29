import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import type { Job } from "../types/job";
import { getJobs } from "../services/jobApi";
import SearchBar from "../components/Searchbar";
import JobCardSkeleton from "../components/JobCardSkeleton";

const JOBS_PER_PAGE = 4;

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Advanced Filter & Sort States
  const [locationFilter, setLocationFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"title-asc" | "title-desc">("title-asc");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadJobs() {
      try {
        setLoading(true);
        setError("");
        const data = await getJobs();
        setJobs(data);
      } catch {
        setError("Failed to load jobs.");
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  // Reset to Page 1 whenever search, filter, or sort options change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, locationFilter, sortBy]);

  // Filter & Sort Logic
  const filteredJobs = jobs
    .filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation =
        locationFilter === "all" ||
        (locationFilter === "remote" &&
          job.location.toLowerCase().includes("remote")) ||
        (locationFilter === "onsite" &&
          !job.location.toLowerCase().includes("remote"));

      return matchesSearch && matchesLocation;
    })
    .sort((a, b) => {
      if (sortBy === "title-asc") return a.title.localeCompare(b.title);
      if (sortBy === "title-desc") return b.title.localeCompare(a.title);
      return 0;
    });

  // Calculate Pagination Slices
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + JOBS_PER_PAGE,
  );

  const handleResetFilters = () => {
    setSearchTerm("");
    setLocationFilter("all");
    setSortBy("title-asc");
    setCurrentPage(1);
  };

  return (
    <main className="main-content">
      <section className="hero">
        <h2>Find your next job</h2>
        <p>Search for jobs and find opportunities that match your skills.</p>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </section>

      {/* Mobile Sidebar Toggle Button */}
      <div className="mobile-filter-toggle-container">
        <button
          type="button"
          className="filter-toggle-btn"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          aria-expanded={isSidebarOpen}
        >
          {isSidebarOpen ? "✕ Hide Filters" : "⚙ Filter Options"}
        </button>
      </div>

      <div className="content-layout">
        {/* Sidebar Filters */}
        <aside className={`sidebar-filters ${isSidebarOpen ? "open" : ""}`}>
          <div className="filter-header">
            <h3>Filters & Sorting</h3>
            <button
              type="button"
              className="reset-btn"
              onClick={handleResetFilters}
            >
              Reset
            </button>
          </div>

          <div className="filter-group">
            <label htmlFor="location-filter">
              <strong>Location Type</strong>
            </label>
            <select
              id="location-filter"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="all">All Locations</option>
              <option value="remote">Remote Only</option>
              <option value="onsite">On-site / Hybrid</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-by">
              <strong>Sort By</strong>
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "title-asc" | "title-desc")
              }
            >
              <option value="title-asc">Title (A - Z)</option>
              <option value="title-desc">Title (Z - A)</option>
            </select>
          </div>
        </aside>

        {/* Main Job List */}
        <section className="jobs-section flex-1">
          <h2>Latest Jobs ({filteredJobs.length})</h2>

          {loading && (
            <div className="skeleton-container" aria-label="Loading jobs">
              {Array.from({ length: 4 }).map((_, idx) => (
                <JobCardSkeleton key={idx} />
              ))}
            </div>
          )}
          {error && <p>{error}</p>}

          {!loading &&
            !error &&
            paginatedJobs.map((job) => <JobCard key={job.id} job={job} />)}

          {!loading && !error && filteredJobs.length === 0 && (
            <div className="empty-state">
              <p>No jobs found matching your criteria.</p>
              <button
                type="button"
                className="details-button"
                onClick={handleResetFilters}
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {!loading && !error && totalPages > 1 && (
            <nav className="pagination" aria-label="Pagination Navigation">
              <button
                type="button"
                className="pagination-btn"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                ← Prev
              </button>

              <span className="pagination-info">
                Page {currentPage} of {totalPages}
              </span>

              <button
                type="button"
                className="pagination-btn"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </nav>
          )}
        </section>
      </div>
    </main>
  );
}

export default Home;
