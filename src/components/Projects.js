import React from "react";
import snoopie from "../images/snoopie.png";
import planner from "../images/dailyplanner.png";
import refactor from "../images/horiseon.png";
import property from "../images/property.png";

function Projects() {
  return (
    <section id="project-section">
      <div id="first-project">
        <a target="blank" href="https://sttorek.github.io/snoopie/">
          <img id="project1" alt="project1" src={snoopie} />
        </a>
      </div>
      <div id="sub-projects">
        <a
          target="_blank"
          href="https://hidden-scrubland-47296.herokuapp.com/"
        >
          <img id="project2" alt="project2" src={property} />
        </a>

        <a
          target="_blank"
          href="https://sttorek.github.io/ST-Horiseon_code_refactor"
        >
          <img id="project3" alt="project3" src={refactor} />
        </a>
        <a
          target="blank"
          href="https://sttorek.github.io/Workday-Scheduler-ST/"
        >
          <img id="project4" alt="project4" src={planner} />
        </a>
      </div>
    </section>
  );
}

export default Projects;
