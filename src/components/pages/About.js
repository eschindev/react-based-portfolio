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
            My name is Evan Schindler, and I'm a recently-trained full-stack
            software developer. I have six years of experience working adjacent
            to software developers, serving in various capacities as an
            interface between technical and business teams. Throughout 2022,
            business was slow for my employer, and I took the opportunity to
            teach myself the fundamentals of web development, eventually
            building an internal tool for tracking anonymized Slack channel
            usage metrics, a tool that is still running without issue and
            collecting valuable anonymous data that can be utilized to inform
            decisions regarding the design and intended use of West Monroe
            Partners' Slack environment. This program runs on a Lambda function
            built with Node.js, accessed via the AWS API Gateway, and saves
            relevant data to a DynamoDB table for export and analysis. Pleased
            with my output, West Monroe formally transitioned me to a junior
            software engineering role, just one month before a round of layoffs
            put me on the job market.
            <br />
            Before any of that, I began my career in customer service, working
            as a barista and, later, shift lead for Peet's Coffee & Tea. I loved
            the process of refining my skills as a barista, and took great pride
            in the quality of customer service that I provided. One morning, a
            regular customer who ran a local marketing company by the name of
            Santa Barbara Axxess, commented that my customer service was
            excellent, and asked if I'd like to work at his office's front desk.
            I interviewed later that day, put in my two weeks at Peet's that
            evening, and took the plunge into a new adventure.
            <br />
            At first, my focus was primarily tracking and resolving customer
            service issues, but, given that Axxess had just re-launched their
            loyalty card-based program around a new app, I increasingly operated
            as a conduit for app feedback and bug reports, helping to inform our
            third-party dev team's priorities based on customer needs.
            Recognizing my proclivity towards technical problem-solving, Axxess
            quickly transitioned me into the Technology & Development
            Administrator role, where I could more actively participate in
            guiding our app's continued development. In this role, I also built
            out a new custom Salesforce environment to track every element of
            our relationship with business and fundraising partners, working
            closely with our C-suite and sales teams to build workflow
            automation and data propagation processes that streamlined nearly
            every aspect of our operations, enabling a higher volume of business
            than was previously possible.
            <br />
            In 2019, I was promoted to Technology & Development Manager, and
            continued my mission of building out Salesforce functionality and
            improving our app's user experience and feature set. I designed,
            built, and deployed a new Salesforce Lightning environment that we
            transitioned to in early 2020, and then, overnight, the world
            changed. I still get chills thinking about those early days of Covid
            reporting, the rhetoric surrounding a two-week lockdown that would
            ostensibly end the pandemic, and how naive we were to the impact
            that this virus would have on Axxess, a business whose bread and
            butter was driving in-person consumer engagement.
            <br />
            We effectively shut down, running a skeleton crew to maintain those
            accounts that could still function during the pandemic, and I only
            worked a handful of hours per week, continuing to implement
            Salesforce features and helping out with customer service demands.
            In late April, Axxess could no longer support my role, and I was let
            go. After a couple months of soul-searching and learning to cope
            with the changed world we now live in, I connected with an old
            friend, who managed to land me an interview for a Technical Project
            Manager position with a software development firm called Verys.
            Despite my relative inexperience with serious software development
            for more established businesses—Axxess functioned more like a
            startup, given their recent transition into digital marketing—they
            took a chance, and I got the job.
            <br />
            I spent my first month ramping up to operate in this new
            environment, learning about Verys's business processes, getting my
            scrum master and AWS Cloud Practitioner certifications, and
            connecting with my new coworkers. I was soon placed in a project
            manager role for a team whose goal was to build a scalable document
            generation service for a large financial institution, capable of
            hosting a library of version-controlled templates, and leveraging a
            variety of Lambda functions to deliver large volumes of completed
            documents to consuming applications. The statement of work was
            vague, the client was demanding, and the work was challenging, but
            we ended up building a killer product that massively accelerated our
            client's document turnaround speed.
            <br />
            With our work being well-received by client leadership, our account
            grew from under $1M to over $7M annually within the space of a
            year-and-a-half, and I led a number of other projects for them,
            building out their data and reporting infrastructure, unifying their
            various internal applications around an OAuth-based authentication
            and permissioning service, and improving system scalability and
            stability by adopting infrastructure-as-code practices throughout
            their migration to cloud-based solutions. During these projects, I
            worked closely with product owners to design and test features, and
            collaborated with my dev teams to help inform their implementation
            around the client's complex business needs. I thoroughly enjoyed
            this work, but always found myself fascinated by the development
            work, and my interest grew with my continued exposure.
            <br />
            Fast-forward to 2022, and Verys, along with another development firm
            by the name of Carbon Five, had been acquired by West Monroe
            Partners to form their new Product Engineering Practice. West Monroe
            Partners had previously functioned as a technical consulting firm,
            analyzing businesses' use of technology and providing guidance for
            how to optimize their software products and internal systems to
            enhance their operations, but did not have the engineering capacity
            to capitalize on those recommendations by implementing their
            proposed solutions, hence the acquisitions. Unfortunately, their
            business pipeline failed to deliver the volume of work that they had
            anticipated, and, while I did manage to utilize my time well to
            build a foundation of technical awareness, many of us in the Product
            Engineering Practice were laid off near the end of the year.
            <br />
            At this point, I had to make a decision: fall back on my project
            management experience to find a new role in that capacity, or commit
            to my newly-found passion for technical product building. I took
            some time to consider this choice, and, ultimately, decided to
            commit. I signed up for a twelve-week full-stack coding boot camp
            with UC Berkeley, and completed the program on June 12, 2023. The
            regimented curriculum of the course helped me build a structured
            technical foundation centered around the MERN stack, helping to
            solidify my understanding of many core concepts of web development,
            organize and refine my mental model of the structure of web-based
            applications, and define a process for learning new technologies and
            integrating them into my broader understanding of the software
            engineering ecosystem.
            <br />
            Following my completion of this program, I am seeking opportunities
            that will allow me to not only leverage those skills to contribute
            to the next generation of web-based applications, but also build on
            those skills by working with smart, passionate developers that share
            my mission of building the best possible products and services.
            <br />
            Please feel free to explore any of the applications in my portfolio,
            where you can access both the deployed apps as well as their
            respective GitHub repositories. You can also download my resume, and
            please feel free to share it with anybody you know that might be
            able to help me find a role where I can contribute as a junior
            software engineer.
            <br />
            Thank you so much for visiting my portfolio website, and I sincerely
            hope that we can build something great together!
          </p>
        </div>
      </div>
    </div>
  );
}
