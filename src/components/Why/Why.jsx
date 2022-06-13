import React from "react";
import Cards from "./Cards";
import planning from "../../assets/why-choose/planning.svg";
import software from "../../assets/why-choose/software.svg";
import cumulative from "../../assets/why-choose/culmative.svg";
import experience from "../../assets/why-choose/experince.svg";

import "../../styles/why.scss";

const Why = () => {
	const data = [
		{
			name: "Planning and clarity of strategies",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
			icon: planning,
		},
		{
			name: "Our software has strong operational capability",
			description:
				"We have more than 10 years of experience in building mobile and web applications so that they integrate with the most common software systems such as ERP, CRM, and our software easily deals with cloud computing.",
			icon: software,
		},
		{
			name: "Cumulative experience enables fast implementation and lower cost",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
			icon: cumulative,
		},
		{
			name: "Long experience in industries",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
			icon: experience,
		},
	];
	return (
		<div className="why">
			<h1 className="header">Why Choose appituneity?</h1>
			<main>
				{data.map((data, index) => (
					<Cards data={data} />
				))}
			</main>
		</div>
	);
};

export default Why;
