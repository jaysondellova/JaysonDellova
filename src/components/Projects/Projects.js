import React from "react";
import "./project.css";
import thesis from "../../img/thesis.png";
import coin from "../../img/coin-tracker.png";
import Footer from "../footer/Footer";
const Projects = () => {
  return (
    <div className="project-section">
      <div className="all-project">
        <div className="project-one" data-aos="fade-left">
          <div className="pic">
            <img src={coin} alt="img" />
          </div>
          <div className="descrip">
            <h3>Coin Tracker</h3>
            <p>
              Using the api of coingecko, I created a website to track 100
              crypto coins.
            </p>
          </div>
        </div>
        <div className="project-one" data-aos="fade-left">
          <div className="pic">
            {" "}
            <img src={thesis} alt="img" />
          </div>
          <div className="descrip">
            <h3>Random Thesis Generator</h3>
            <p>
              This tool randomly generates research title ideas for your
              reference or inspiration. Currently, the generated titles are for
              computer-related majors.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
