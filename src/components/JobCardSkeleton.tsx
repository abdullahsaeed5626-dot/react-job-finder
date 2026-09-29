function JobCardSkeleton() {
  return (
    <div className="job-card skeleton-card" aria-hidden="true">
      <div className="skeleton-header">
        <div className="skeleton-line skeleton-title" />
        <div className="skeleton-line skeleton-badge" />
      </div>
      <div className="skeleton-line skeleton-subtitle" />
      <div className="skeleton-line skeleton-location" />
      <div className="skeleton-footer">
        <div className="skeleton-button" />
      </div>
    </div>
  );
}

export default JobCardSkeleton;
