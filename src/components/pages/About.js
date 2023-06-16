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
              width: "250px",
              height: "250px",
              float: "left",
              marginRight: "20px",
            }}
          ></img>
        </div>
        <div>
          <p>
            I am an analytical and solution-oriented software developer and
            project manager with a diverse skill set in client communication,
            workflow automation, programming, data visualization, software
            design, web applications, and technical documentation. With a solid
            foundation in the MERN stack and a passion for delivering
            exceptional user experiences, I am dedicated to driving efficient
            and impactful solutions.
            <br />
            Throughout my coding bootcamp at UC Berkeley, I honed my proficiency
            in developing web applications using the MERN stack. React has
            become my preferred framework, empowering me to create precise and
            flexible user interfaces based on dynamic data while minimizing
            redundancy through reusable components. My expertise in frontend
            development, combined with my drive for exceptional user
            experiences, fuels my passion for pursuing a career in software
            development.
            <br />
            While I thoroughly enjoy frontend development, my true passion lies
            in backend web development. I possess hands-on experience working
            with SQL and NoSQL databases, and I thrive on leveraging
            technologies such as GraphQL, Mongoose, and MongoDB to build
            efficient APIs and manage databases effectively. Designing and
            implementing robust backend systems that support seamless user
            experiences and optimize overall application performance bring
            immense satisfaction to my work.
            <br />
            In addition to my strong MERN stack skills, I have a valuable
            background in building features within custom Salesforce
            environments. While working with Santa Barbara Axxess, I
            collaborated directly with our CEO and COO to design and develop
            data propagation and workflow automation tools. Through iterations
            based on feedback from our sales and delivery teams, I ensured these
            features seamlessly integrated into our business processes.
            <br />
            Furthermore, I played a crucial role in expanding our Salesforce
            reporting infrastructure. Building numerous reports and dashboards
            tailored to the specific needs of various roles and processes, I
            empowered our teams with actionable insights and streamlined
            decision-making processes using Salesforce's robust reporting
            capabilities.
            <br />
            With my versatile skill set, passion for continuous learning, and
            ability to adapt to new technologies, I am confident in my ability
            to make a valuable contribution to any development team. I am
            genuinely excited about leveraging my expertise to drive growth,
            collaboration, and excellence in a dynamic and forward-thinking
            company environment.
          </p>
        </div>
      </div>
    </div>
  );
}
