import React, { Component } from 'react';
import '../About.css';

class About extends Component {
  render() {
	return (
		<div id="about">
			<h2>About Me</h2>
			<div id="student">
				<p>Hi, I&#39;m Alyssa Davis. I am a student at the University of Central Florida studying <span className="emphasis">Computer Science</span> along with minors in <span className="emphasis">Engineering Leadership</span> and <span className="emphasis">Business.</span></p>
			</div>
			<div id="dev">
				<p>I use <span className="emphasis">Java</span> and <span className="emphasis">C</span> in my classes, <span className="emphasis">PHP</span> (in WordPress) at work and <span className="emphasis">JavaScript</span> at home. Currently I am exploring <span className="emphasis">ReactJS</span>. Next up, I am interested in learning <span className="emphasis">Python</span>.</p>
			</div>
			<div id="artist">
				<p>I&#39;ve been around art my entire life. I have worked in many different art forms including stained glass, lampwork beading, clay sculpting, and bronze casting. I am spending time working in photography and photo editing right now. The pictures shown on this site are all taken by me!</p>
			</div>
			<div id="traveler">
				<p>I am an avid traveler. I&#39;ve been to 4 countries, 2 continents, every state on both American coastlines and over half of all the states total. Hawaii is my white whale.</p>
			</div>
			<div id="gamer">
				<p>I have played video games for as long as I can remember, and video games are where my development path started. Most of my personal projects have come about out of a personal or community need for something related to a game I play. My first interaction with the dev world was signatures and player profiles in Neopets.</p>
			</div>
		</div>
	);
  }
}

export default About;
