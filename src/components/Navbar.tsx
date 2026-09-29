import { Link } from "react-router-dom";
import { useJobContext } from "../context/JobContext";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { savedJobs } = useJobContext();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <Link to="/" className="logo-link">
        <h1>Job Finder</h1>
      </Link>

      <nav>
        <Link to="/" className="nav-item">
          Jobs
        </Link>
        <Link to="/saved-jobs" className="nav-item">
          Saved Jobs {savedJobs.length > 0 && `(${savedJobs.length})`}
        </Link>
        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
