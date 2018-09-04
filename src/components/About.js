import React, { Component } from 'react';
import '../About.css';

class About extends Component {
  render() {
	return (
		<section id="about">
			<h2>About Me</h2>
            <section id="contact">
            <p>Find me:&nbsp;&nbsp;
            <a href="https://github.com/allygator"><i className="fab fa-github"></i> Allygator</a>&nbsp;&nbsp;
            <a href="mailto:amdavis2013@gmail.com"><i className="fas fa-envelope"></i> Email</a>&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/alyssa-m-davis/"><i className="fab fa-linkedin"></i> Linkedin</a>
            </p>
            </section>
			<section id="student">
				<p>Hi, I&#39;m Alyssa Davis. I am a student at the University of Central Florida studying <span className="emphasis">Computer Science</span> along with minors in <span className="emphasis">Engineering Leadership</span> and <span className="emphasis">Business.</span></p>
                <i className="fas fa-book-open fa-4x"></i>
			</section>
			<section id="dev">
				<p>I use <span className="emphasis">Java</span> and <span className="emphasis">C</span> in my classes, <span className="emphasis">PHP</span> (in WordPress) at work and <span className="emphasis">JavaScript</span> at home. Currently I am exploring <span className="emphasis">ReactJS</span>. Next up, I am interested in learning <span className="emphasis">Python</span>.</p>
                <i className="fas fa-desktop fa-4x"></i>
			</section>
			<section id="artist">
				<p>I&#39;ve been around art my entire life. I have worked in many different art forms including <span className="emphasis">stained glass</span>, <span className="emphasis">lampwork beading</span>, <span className="emphasis">clay sculpting</span>, and <span className="emphasis">bronze casting</span>. I am spending time working in <span className="emphasis">photography</span> and photo editing right now. The pictures shown on this site are all taken by me!</p>
                <i className="fas fa-camera fa-4x"></i>
			</section>
			<section id="traveler">
				<p>I am an avid traveler. I&#39;ve been to 4 countries, 2 continents, every state on both American coastlines and over half of all the states total. <span className="emphasis">Hawaii is my white whale.</span></p>
                <i className="fas fa-globe-americas fa-4x"></i>
			</section>
			<section id="gamer">
				<p>I have played video games for as long as I can remember, and video games are where my development path started. Most of my personal projects have come out of a personal or community need for something related to a game I play. My first interaction with the dev world was signatures and player profiles in Neopets.</p>
                <i className="fas fa-headset fa-4x"></i>
			</section>
		</section>
	);
  }
}

export default About;
