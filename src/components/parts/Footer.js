import React from "react";

export default function Footer() {
  return (
    <nav
      className="navbar navbar-expand navbar-dark bg-dark fixed-bottom"
      style={{ borderTop: "1px solid rgb(0, 31, 21)" }}
    >
      <a className="navbar-brand" href="#home">
        <img
          src="./images/logo.png"
          alt="eschindev logo"
          className="img-fluid rounded-circle"
          height="30"
          width="30"
          style={{
            borderRadius: "50%",
            margin: "10px",
          }}
        />
      </a>
      <div className="navbar-nav">
        <a className="nav-link" href="https://github.com/eschindev">
          GitHub
        </a>
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/schindlerevan/"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}
