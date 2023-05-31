import React from "react";
import "./content.css";

export default function About() {
  return (
    <div className="content-container">
      <h2>About Me</h2>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <img
            src="./images/headshot.png"
            alt="Evan's face"
            style={{
              border: "2px solid darkgrey",
              borderRadius: "5px",
              maxWidth: "100%",
              height: "auto",
            }}
          ></img>
        </div>
        <div className="col-md-9">
          <p>
            An analytical and solution-oriented software developer and project
            manager with experience in professional client communication,
            workflow automation, computer programming, data retrieval and
            visualization, software design, web applications, and technical
            documentation. Skilled at implementing automated workflow management
            tools and using reporting tools to compile and leverage data,
            driving efficient decision making. Capable of quickly grasping new
            concepts and making use of software tools to achieve business goals.
            Passionate about all things related to computer hardware, software,
            and related technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
