import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="main-content">
      <h2>404 - Page Not Found</h2>

      <p>The page you're looking for doesn't exist.</p>

      <Link to="/">← Back to Jobs</Link>
    </main>
  );
}

export default NotFound;
