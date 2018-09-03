import React, { Component } from 'react';
import '../About.css';

class About extends Component {
  render() {
    return (
        <div id="about">
            <h2>About Me</h2>
            <div id="student">
            <p>Hi, I&#39;m Alyssa Davis. I am a <span className="emphasis">Computer Science</span> student at the University of Central Florida. I am getting minors in <span className="emphasis">Engineering Leadership</span> and <span className="emphasis">Business.</span></p>
            </div>
            <div id="traveler">
            <p>I am an avid traveler. I&#39;ve been to 4 countries, 2 continents, every state on both American coastlines and over half of all the states total.</p>
            </div>
        </div>
    );
  }
}

export default About;
