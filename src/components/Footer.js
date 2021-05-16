import React from "react";

function Footer() {
  return (
    <div>
      <div id="foot-title">Check Me Out</div>
      <footer id="footer">
        <h1 class="temporary">706-308-8557</h1>
        <h1 class="temporary">seth.torek@gmail.com</h1>

        <a href="mailto:seth.torek@gmail.com">
          <i class="icon fas fa-envelope fa-3x"></i>
        </a>

        <a
          target="blank"
          href="https://www.linkedin.com/in/seth-torek-5211b1201/"
        >
          <i class="icon fab fa-linkedin fa-3x"></i>
        </a>

        <a target="blank" href="https://github.com/Sttorek">
          <i class="icon fab fa-github-square fa-3x"></i>
        </a>

        <a target="blank" href="assets/resume.pdf">
          {" "}
          <i class="icon fas fa-file fa-3x"></i>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
