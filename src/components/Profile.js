import React from "react";
import Picture from "../images/profilePic.jpg";
import pieChart from "../images/skills.png";

function Profile() {
  return (
    <div>
      <div id="profile-cnt">
        <div id="proPic-cnt">
          <div id="circle">
            <img id="profile-pic" alt="profile pic" src={Picture} />
          </div>
          <p>
            "Success is not the key to happiness. Happiness is the key to
            success. If you love what you are doing, you will be successful.
            -Albert Schweitzer"
          </p>
        </div>

        <div id="about-cnt">
          <h1 id="about">About Me</h1>
          <p id="about-me">
            In 2017 I became a Telecommunications Tower Technician for Summitt
            Cellular Inc. and after three years in the field I felt as though I
            wasn't living up to my full potential even though I had accomplished
            a lot in what most would say was a "successful" career. So I chose
            to do something about it. I enrolled in Georgia Tech's full-stack web
            development program and I can honestly say that it was the best
            decision I have ever made and I can't wait to see where this path
            takes me. Waking up every day and doing what you love in my opinion
            is very much underrated and I feel blessed to be able to impact the
            world in a positive environment.
          </p>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000" class="skillCnt">
        <img class="skills" alt="pieChart" src={pieChart} />
      </div>
    </div>
  );
}

export default Profile;
