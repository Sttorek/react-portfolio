import React from "react";
import resume from "../assets/resume.pdf";

function Footer() {
  return (
    <div class="footCnt">
      <div id="foot-title">Check Me Out</div>
      <footer id="footer">
        <i class="dropdown fas fa-phone-volume fa-3x">
          <p class="dropdown-content">706.308.8557</p>
        </i>
        <a href="mailto:seth.torek@gmail.com">
          <i class="dropdown icon fas fa-envelope fa-3x">
            <p class="dropdown-content">seth.torek@gmail.com</p>
          </i>
        </a>
        <a target="blank" href={resume}>
          <i class="icon fas fa-file fa-3x"></i>
        </a>

        <a target="blank" href="https://github.com/Sttorek">
          <i class="icon fab fa-github-square fa-3x"></i>
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/seth-torek-5211b1201/"
        >
          <i class="icon fab fa-linkedin fa-3x"></i>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
