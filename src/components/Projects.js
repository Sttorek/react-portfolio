import React from "react";
import snoopie from "../images/snoopie.png";
import planner from "../images/dailyplanner.png";
import refactor from "../images/horiseon.png";
import property from "../images/property.png";
import gitCommit from "../images/gitCommit.png";

function Projects() {
  return (
    <section id="project-section">
      <div
        data-aos="flip-down"
        data-aos-duration="1000"
        id="first-project"
      >
        <a target="blank" href="https://thawing-shelf-99876.herokuapp.com/">
          <img id="project1" alt="project1" src={gitCommit} />
        </a>
      </div>
      <div id="sub-projects">
        <div data-aos="fade-right" data-aos-duration="3000">
          <a
            target="_blank"
            href="https://hidden-scrubland-47296.herokuapp.com/"
          >
            <img id="project2" alt="project2" src={property} />
          </a>
        </div>
        <div data-aos="fade-left" data-aos-duration="3000">
          <a target="blank" href="https://sttorek.github.io/snoopie/">
            <img id="project3" alt="project3" src={snoopie} />
          </a>
        </div>
        <div data-aos="fade-right" data-aos-duration="3000">
          <a
            target="_blank"
            href="https://sttorek.github.io/ST-Horiseon_code_refactor"
          >
            <img id="project4" alt="project4" src={refactor} />
          </a>
        </div>
        <div data-aos="fade-left" data-aos-duration="3000">
          <a
            target="blank"
            href="https://sttorek.github.io/Workday-Scheduler-ST/"
          >
            <img id="project5" alt="project5" src={planner} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
