import React from "react";
import ProjectBox from "./ProjectBox";

export default function ProjectContainer() {
  const projects = [
    {
      name: "Actio",
      github: "https://github.com/eschindev/activity-planner",
      deployed: "https://actio-app.herokuapp.com/",
      image: "./images/actio.png",
    },
    {
      name: "Don't Forget!",
      github: "https://github.com/eschindev/dont-forget",
      deployed: "https://dont-forget-app.herokuapp.com/",
      image: "./images/dont-forget.png",
    },
    {
      name: "Pop Pursuit",
      github: "https://github.com/eschindev/population-guesser",
      deployed: "https://eschindev.github.io/population-guesser/",
      image: "./images/pop-pursuit.png",
    },
    {
      name: "Engimetrics",
      github: "https://github.com/eschindev/engimetrics",
      image: "./images/engimetrics.png",
    },
    {
      name: "PWA Text Editor",
      github: "https://github.com/eschindev/pwa-text-editor",
      deployed: "https://eschindev-pwa-text-editor.herokuapp.com/",
      image: "./images/pwa-text-editor.png",
    },
    {
      name: "Note Taker",
      github: "https://github.com/eschindev/note-taker",
      deployed: "https://www.google.com",
      image: "./images/note-taker.png",
    },
    {
      name: "Simple Forum",
      github: "https://github.com/eschindev/simple-forum",
      deployed: "https://eschindev-simple-forum.herokuapp.com/",
      image: "./images/simple-forum.png",
    },
    {
      name: "Weather Planner",
      github: "https://github.com/eschindev/weather-planner",
      deployed: "https://eschindev.github.io/weather-planner/",
      image: "./images/weather-planner.png",
    },
  ];

  return (
    <div className="project-container card-deck row justify-content-center">
      {projects.map((project) => (
        <ProjectBox key={project.name} {...project} />
      ))}
    </div>
  );
}
