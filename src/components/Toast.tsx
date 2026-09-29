import { useEffect } from "react";
import { useJobContext } from "../context/JobContext";

function Toast() {
  const { toastMessage, clearToast } = useJobContext();

  useEffect(() => {
    if (!toastMessage) return;

    const timer = setTimeout(() => {
      clearToast();
    }, 3000);

    return () => clearTimeout(timer);
  }, [toastMessage, clearToast]);

  if (!toastMessage) return null;

  return (
    <div className="toast-notification" role="status" aria-live="polite">
      <span>{toastMessage}</span>
      <button type="button" onClick={clearToast} className="toast-close-btn">
        ✕
      </button>
    </div>
  );
}

export default Toast;
