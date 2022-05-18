import React, { useContext, useEffect } from "react";
import "./home.css";
import img2 from "../../img/img2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";
import thesis from "../../img/thesis.png";
import coin from "../../img/coin-tracker.png";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="home-container">
      <div data-aos="fade-left" className="home">
        <h3>Hey, I'm Jayson Dellova</h3>
        <h1>I like creating user interface for the web.</h1>
        <h2>A self-taught front end developer.</h2>
      </div>
      <div data-aos="fade-left" className="project">
        <div className="projects container">
          <div className="project-header">
            <h1 className="section-title">Projects</h1>
          </div>
          <div className="all-projects">
            <div className="project-item">
              <div className="project-info">
                <h2>Coin Tracker</h2>
              </div>
              <a className="point" href="#" target="_blank">
                {" "}
                <div className="project-img">
                  <img src={coin} />
                </div>
              </a>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h2>Thesis title generator</h2>
              </div>
              <a className="point" href="#" target="_blank">
                {" "}
                <div className="project-img">
                  <img src={thesis} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
