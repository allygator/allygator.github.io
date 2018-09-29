import React, { Component } from 'react';
import '../Projects.css';

class Projects extends Component {
  render() {
	return (
		<section id="projects">
			<h2>Projects</h2>
            <div className="projectContainer" id="wProject">
				<div className="imageContainer">
					<a href="https://repcalc.net" target="_blank">
						<img src="/bannerImages/wow-logo.jpg" alt="World of Warcraft logo" />
					</a>
				</div>
                <div className="descContainer">
                    <h3>World of Warcraft Reputation Calculator</h3>
                    <p>World of Warcraft is a long running MMORPG published by Blizzard Entertainment. The website allows users to lookup their reputation with all the factions in the game. Users can see how long it will take to complete specific factions, determined by the methods in which reptation can be gained. The site leverages the Blizzard API for character data and was created using ReactJS.</p>
                    <a className="button" href="https://repcalc.net" target="_blank">View Project <i className="fas fa-chevron-right"></i></a>
                </div>
            </div>

            <div className="projectContainer" id="hProject">
				<div className="imageContainer">
					<a href="https://allygator.github.io/HeroRotation/" target="_blank">
						<img src="/bannerImages/heroes-logo.png" alt="Heroes of the Storm Website Banner" />
					</a>
				</div>
                <div className="descContainer">
                    <h3>Heroes of the Storm Free Hero Rotation</h3>
                    <p>Heroes of the Storm is a Blizzard Entertainment team brawl game. Every week there is a set of characters free to play by all players, this site gives users this list of characters, and additional info about each one.</p>
                    <p>A Java file was written to parse through text and image data on the Blizzard website. This is saved locally and pushed to the GitHub repository through a shell script. The Java file includes options to parse through the weekly post of free characters, or download hero ability information, or download images for hero portraits and ability icons.</p>
                    <a className="button" href="https://allygator.github.io/HeroRotation/" target="_blank">View Project <i className="fas fa-chevron-right"></i></a>
                </div>
            </div>

            <div className="projectContainer" id="sProject">
                <div className="imageContainer">
                    <a href="https://allygator.github.io/StardewValley/" target="_blank">
                        <img src="/bannerImages/stardewbanner.png" alt="Stardew Valley Website Banner" />
                    </a>
                </div>
                <div className="descContainer">
                    <h3>Stardew Valley Item Lookup Tool</h3>
                    <p>Stardew Valley is an open-ended country-life RPG created by ConcernedApe. This site allows players to look up items they find while playing the game to determine what uses an item may have, as some items are quite rare and might be needed much later in the game. The site was created as a solution to the difficulty in looking up item uses on other sites.</p>
                    <a className="button" href="https://allygator.github.io/StardewValley/" target="_blank">View Project <i className="fas fa-chevron-right"></i></a>
                </div>
            </div>
		</section>
	);
  }
}

export default Projects;
