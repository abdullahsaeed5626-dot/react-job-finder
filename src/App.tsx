import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";

import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
import ApplyJob from "./pages/ApplyJob";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Toast />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/apply/:id" element={<ApplyJob />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
