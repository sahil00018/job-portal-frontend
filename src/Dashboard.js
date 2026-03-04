import React, { useEffect } from "react";

function Dashboard() {

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <h2>Welcome to Dashboard 🚀</h2>
    </div>
  );
}

export default Dashboard;
