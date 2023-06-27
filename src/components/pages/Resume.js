import React from "react";

export default function Resume() {
  const skills = [
    "JavaScript",
    "Node",
    "React",
    "Python",
    "AWS API Gateway",
    "AWS Lambda",
    "AWS DynamoDB",
    "Express",
    "MySQL",
    "Sequelize",
    "MongoDB",
    "Mongoose",
    "GraphQL",
    "HTML / CSS",
    "Bootstrap",
    "jQuery",
    "AJAX",
    "RESTful APIs",
    "Docker",
    "Postman / Insomnia",
    "Handlebars",
    "JSON",
    "IndexedDB",
    "Service Workers",
    "MVC Architecture",
    "Progressive Web Apps",
    "Git Workflow",
    "Jest",
    "Heroku",
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
