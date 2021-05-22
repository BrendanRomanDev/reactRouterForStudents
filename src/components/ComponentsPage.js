import React from "react";
import { Link } from "react-router-dom";

function ComponentsPage() {
  return (
    <div className="px-2">
      <h1>About Our Components</h1>
      <Link to="/home">Home</Link>
    </div>
  );
}

export default ComponentsPage;
