import React from "react";

import { Link } from "react-router-dom";

export const Header = () => {
  const containerStyle = {
    background: "grey",
    padding: 20,
  };

  const ulStyle = {
    display: "flex",
    listStyle: "none",
    gap: 20,
    padding: 0,
  };

  return (
    <div style={containerStyle}>
      <ul style={ulStyle}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>
    </div>
  );
};
