import React from "react";
import Navbar from "./Navbar";
import ServicesMap from "./ServicesMap";
import colorfulLogo from "../../assets/logo-colorful.svg";
import "../../styles/main.scss";

const MainPage = () => {
	return (
		<div className="main-page">
			<Navbar />
			<main>
				<div className="titles">
					<h1>We know what you are looking for</h1>
					<h6>We have +10 years experience working in Europe</h6>
				</div>
				<div>
					<ServicesMap />
				</div>
			</main>
			<footer>
				<p>
					We have a talented team of professional web designers, developers, and
					project managers worked in a harmonious manner To achieve the best
					results on your bussiness at a resonable cost.
				</p>
				<p>
					Our team works in an agile/Scrum methodolgy, so every detail of your
					requirements is recorded in the user story, and implementation
					priorities are determined according to the priorities of your work,
					and this is discussed at each product cycle, which means we will
					achieve everything you looking forward to it with the highest quality
					standards.
				</p>
			</footer>
			<div className="logo">
				<img src={colorfulLogo} alt="colorful-logo" width="271" height="68" />
			</div>
		</div>
	);
};

export default MainPage;
