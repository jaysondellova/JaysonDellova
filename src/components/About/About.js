import React, { useEffect } from "react";
import poring3 from "../../img/poring3.png";
import poring2 from "../../img/poring2.png";
import poring1 from "../../img/poring1.png";
import Footer from "../footer/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="about">
      <div className="about-container">
        <div data-aos="fade-left" className="about-top">
          <h1>About</h1>
        </div>
        <div className="about-descrip">
          <div data-aos="fade-left" className="top-descrip">
            <p>Hi, I'm Jayson Dellova</p>
          </div>
          <div className="bot-descrip" data-aos="fade-left">
            <p>
              I'm a nineteen-year-old self-taught frontend developer based in
              Camarines Sur, Philippines. I am a 2nd-year college student with a
              degree of BS in Computer Science. I have a passion for web
              development. It gives me an opportunity to challenge myself and
              use a mix of technologies and creativity. I like being able to see
              the result quickly and the endless learning process.
            </p>
            <div className="about-img">
              <img src={poring1} alt="img" />
            </div>
            <p>
              When I was 16-17 years old, I started learning the basics of
              programming in school, but I always wondered how I could make
              those code comes to life, so I stumbled upon game development.
              Since I like playing games, I learned how to animate objects and
              create movement scripts using C#, but little did I know that it
              only gets harder from there.
            </p>
            <div className="about-img">
              <img src={poring2} alt="img" />
            </div>
            <p>
              At 17-18 years old, I was a first-year college student at Ateneo
              De Naga University. The most valuable lesson that I learned in
              that year was basic to advanced programming. Because of the
              knowledge that I got in that year, I can now easily understand
              different programming languages. I have already started teaching
              myself web development for that year, little by little.
            </p>
            <div className="about-img">
              <img src={poring3} alt="img" />
            </div>
            <p>
              At 18-19 years old, I got interested in front-end web development.
              I taught myself how to create a website, and whenever I get my
              work done, I feel like I am Mark Zuckerberg. Being self-taught is
              hard. When I started, the scariest thing was to face a problem I
              struggled with and couldn't move further because of it. But during
              this year, I always found a way to solve it. Sometimes it took me
              days and numerous attempts. I enjoyed the challenge and landing on
              the right solution.
            </p>
          </div>
        </div>
        <div className="technologies" data-aos="fade-left">
          <p className="tech">The technologies that I used are:</p>
          <h3>-Html</h3>
          <h3>-Css</h3>
          <h3>-Javascript</h3>
          <h3>-ReactJs</h3>
          <p className="tech">I also have knowledge about:</p>
          <h3>-bootstrap</h3>
          <h3>-Jquery</h3>
          <h3>-Sass</h3>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
