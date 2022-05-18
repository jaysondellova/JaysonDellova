import React, { useState, createContext } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import "./header.css";

const Header = () => {
  const [trigger, setTrigger] = useState(1);
  const [darkTheme, setDarkTheme] = useState("sun");

  return (
    <>
      <div className="header">
        <div className="inner-header">
          <div
            className="header-title"
            onClick={() => {
              setTrigger(1);
              console.log("1");
            }}
          >
            <h2 className="my-name">Jayson Dellova </h2>
            <h2 className="my-title">Front End Developer</h2>
          </div>
          <div className="header-section">
            <ul>
              <a
                href="#"
                onClick={() => {
                  setTrigger(2);
                }}
              >
                <li>About</li>
              </a>
              <a
                href="#"
                onClick={() => {
                  setTrigger(3);
                }}
              >
                <li>Projects</li>
              </a>
              <a
                href="#"
                onClick={() => {
                  setTrigger(4);
                }}
              >
                <li>Contact</li>
              </a>
            </ul>
          </div>
          <div className="header-icons">
            <div className="social-item filter">
              <a href="#">
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
              </a>
            </div>
            <div className="social-item filter">
              <a
                href="https://www.linkedin.com/in/jayson-dellova-a16a77234/"
                target="_blank"
              >
                <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" />
              </a>
            </div>
            <div className="social-item filter">
              <a href="https://twitter.com/jay_songoku" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" />
              </a>
            </div>
            <div className="social-item filter">
              <a href="https://github.com/JaysonGoku" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {trigger == 1 && <Home />}
      {trigger == 2 && <About />}
      {trigger == 3 && <Projects />}
      {trigger == 4 && <Contact />}
    </>
  );
};

export default Header;
