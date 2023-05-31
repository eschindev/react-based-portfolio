import React from "react";

export default function Resume() {
  const skills = [
    "Node",
    "React",
    "JavaScript",
    "Express",
    "MySQL",
    "Sequelize",
    "MongoDB",
    "Mongoose",
    "HTML / CSS",
    "Bootstrap",
    "MVC Architecture",
    "Progressive Web Apps",
    "Git Workflow",
  ];

  return (
    <div className="content-container">
      <h2>My Resume</h2>
      <hr />
      <a
        href="./images/Schindler, Evan - Resume.pdf"
        download="Schindler, Evan - Resume.pdf"
      >
        Download Resume PDF
      </a>
      <p></p>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
