import React from "react";
import "./content.css";
import "../../css/style.css";

export default function About() {
  return (
    <div className="content-container">
      <h2>About Me</h2>
      <hr />
      <div>
        <div>
          <img
            src="./images/headshot.png"
            alt="Evan's face"
            style={{
              border: "2px solid darkgrey",
              borderRadius: "5px",
              maxWidth: "100%",
              height: "auto",
              float: "left",
              marginRight: "20px",
            }}
          ></img>
        </div>
        <div>
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
            <br />
            With a solid foundation in the MERN stack gained through my recent
            completion of a coding bootcamp at UC Berkeley, combined with my
            professional experience as a project and product manager, I believe
            I possess the skills and enthusiasm to make a valuable contribution
            to any dev team.
            <br />
            Throughout my coding bootcamp, I acquired proficiency in developing
            web applications using the MERN stack. React has become my preferred
            framework, as it empowers me to create precise and flexible user
            interfaces based on dynamic data while minimizing redundancy through
            reusable components. This frontend expertise, along with my passion
            for delivering exceptional user experiences, has fueled my drive to
            pursue a career in software development.
            <br />
            While I thoroughly enjoy frontend development, my true passion lies
            in backend web development. I have hands-on experience working with
            SQL and NoSQL databases, and I particularly enjoy leveraging
            technologies such as GraphQL, Mongoose, and MongoDB to build APIs
            and manage databases efficiently. I find immense satisfaction in
            designing and implementing robust backend systems that support
            seamless user experiences and optimize overall application
            performance.
            <br />
            As a project and product manager, I have gained a deep familiarity
            with the product development lifecycle and have worked extensively
            in agile environments. This experience has honed my ability to
            effectively collaborate with cross-functional teams, prioritize
            tasks, and deliver projects on time while ensuring the highest level
            of quality. My combined technical and managerial background enables
            me to bridge the gap between development and business objectives,
            making me an asset in aligning software projects with organizational
            goals.
            <br />
            One of my greatest strengths is my ability to learn quickly and
            adapt to new technologies and frameworks. I am an avid learner who
            constantly seeks to explore and master new systems of information.
            This curiosity drives me to stay updated with the latest
            advancements in software development, ensuring that I can bring
            fresh ideas and innovative solutions to the table.
            <br />I am genuinely passionate about software development and am
            excited about the opportunity to contribute my skills and enthusiasm
            to any team. I would be thrilled to be a part of a team that fosters
            growth, encourages collaboration, and values excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
