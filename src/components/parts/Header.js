import React from "react";
import "./Header.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <nav
      className="navbar navbar-expand navbar-dark bg-dark sticky-top"
      style={{ borderBottom: "1px solid rgb(0, 31, 21)" }}
    >
      <a
        className="navbar-brand"
        href="#about"
        onClick={() => handlePageChange("About")}
      >
        <img
          src="./images/logo.png"
          alt="eschindev logo"
          className="img-fluid rounded-circle"
          height="36"
          width="36"
          style={{
            borderRadius: "50%",
            margin: "10px",
          }}
        />
        <h1>Evan Schindler</h1>
      </a>
      <div className="navbar-nav">
        <a
          className={`nav-link${currentPage === "About" ? " active" : ""}`}
          href="#about"
          onClick={() => handlePageChange("About")}
        >
          About
        </a>
        <a
          className={`nav-link${currentPage === "Portfolio" ? " active" : ""}`}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </a>
        <a
          className={`nav-link${currentPage === "Contact" ? " active" : ""}`}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </a>
        <a
          className={`nav-link${currentPage === "Resume" ? " active" : ""}`}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
