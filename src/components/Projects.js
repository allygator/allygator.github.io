import React, { Component } from 'react';
import '../Projects.css';

class Projects extends Component {
  render() {
	return (
		<div id="projects">
			<h2>Projects</h2>
            <div className="projectContainer">
				<div>
					<a href="/HeroRotation/">
						<img src="/bannerImages/logo.png" alt="Heroes of the Storm Website Banner" />
					</a>
				</div>
                <div>
                    <h3>Heroes of the Storm Site</h3>
                    <h4>Free Hero Rotation</h4>
                    <p>Heroes of the Storm is a Blizzard Entertainment created team brawl game. Every week there is a set of characters free to play by all players, this site gives users this list of characters, and additional info about each one.</p>
                    <p>The website updates from a shell script that runs a Java file and pushes to Github. The Java file includes options to run through the html of a forum post and pulls out the date and the free Hero rotation, it also downloads all hero ability information for the Javascript file, and finally it downloads all available images for all heroes and saves them into the proper file path to be used on the website. It updates the Javascript file with any updated information.</p>
                    <a href="allygator.github.io/HeroRotation/">View Project</a>
                </div>
            </div>

            <div className="projectContainer">
                    <div>
                        <a href="/StardewValley/">
                            <img src="/bannerImages/stardewbanner.png" alt="Stardew Valley Website Banner" />
                        </a>
                    </div>
                <div>
                    <h3>Stardew Valley Site</h3>
                    <h4>Item Lookup</h4>
                    <p>Stardew Valley is a recently released open-ended country-life RPG created by ConcernedApe. This site allows players to look up items they find while playing to determine if the item has any uses. It was created due to the difficulty in finding items on other sites.</p>
                    <a href="allygator.github.io/StardewValley/">View Project</a>
                </div>
            </div>
		</div>
	);
  }
}

export default Projects;
