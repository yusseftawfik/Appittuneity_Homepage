import React from "react";
import angular from '../../assets/technologies/angular.svg';
import woo from '../../assets/technologies/woo.svg';
import drupal from '../../assets/technologies/drupal.svg';
import wordpress from '../../assets/technologies/wordpress.svg';
import elexir from '../../assets/technologies/elexir.svg';
import magneto from '../../assets/technologies/magneto.svg';
import microsoft from '../../assets/technologies/microsoft.svg';
import nodejs from '../../assets/technologies/nodejs.svg';
import php from '../../assets/technologies/php.svg';
import python from '../../assets/technologies/python.svg';
import ralis from '../../assets/technologies/ralis.svg';
import react from '../../assets/technologies/react.svg';
import '../../styles/fut.scss';

const FUT = () => {
	return (
		<div className="fut">
			<h1>Some Of our Frequently used technologies</h1>
			<main>
				<div className="icons" data-aos="zoom-in-up">
					<img src={angular} alt="hiring-icon" width="45" height="45" />
					<img src={woo} alt="hiring-icon" width="45" height="45" />
					<img src={drupal} alt="hiring-icon" width="45" height="45" />
					<img src={wordpress} alt="hiring-icon" width="45" height="45" />
					<img src={elexir} alt="hiring-icon" width="45" height="45" />
					<img src={magneto} alt="hiring-icon" width="45" height="45" />
					<img src={microsoft} alt="hiring-icon" width="45" height="45" />
					<img src={nodejs} alt="hiring-icon" width="45" height="45" />
					<img src={php} alt="hiring-icon" width="45" height="45" />
					<img src={python} alt="hiring-icon" width="45" height="45" />
					<img src={ralis} alt="hiring-icon" width="45" height="45" />
					<img src={react} alt="hiring-icon" width="45" height="45" />
				</div>
				<div className="hire">
					<span>Hire php developer</span>, dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna aliqua...
				</div>
			</main>
		</div>
	);
};

export default FUT;
