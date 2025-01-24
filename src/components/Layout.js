import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright &copy; 2025 Web Warrior</p>
      </footer>
    </div>
  );
}

export default Layout;
