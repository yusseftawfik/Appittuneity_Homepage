import React from "react";
import flexible from "../../assets/hiring/flexible.svg";
import best from "../../assets/hiring/best.svg";
import productivity from "../../assets/hiring/productivity.svg";
import customers from "../../assets/hiring/customers.svg";
import management from "../../assets/hiring/management.svg";
import pricing from "../../assets/hiring/pricing.svg";

import "../../styles/hiring.scss";
const Hiring = () => {
	const data = [
		{
			name: "Highly Flexible And Scalable",
			icon: flexible,
		},
		{
			name: "Get The Best Developers",
			icon: best,
		},
		{
			name: "Increased Productivity",
			icon: productivity,
		},
		{
			name: "Customers Are At The Center Of Focus",
			icon: customers,
		},
		{
			name: "Transparent Management",
			icon: management,
		},
		{
			name: "Fair Pricing",
			icon: pricing,
		},
	];
	return (
		<div className="hiring">
			<h1>Why hiring Dedicated Teams</h1>
			<main>
				{data.map((data) => (
					<div className="data-holder" data-aos="fade-left">
						<img src={data.icon} alt="hiring-icon" width="45" height="45" />
						<span>{data.name}</span>
					</div>
				))}
			</main>
			<p>
				Regardless of the size of your project, you are the one who initially
				decides how many specialists developers you need to hire on the project.
				You can always add new developers to your team or reduce the team as
				necessary.It is all done quickly and without any side cost.
			</p>
		</div>
	);
};

export default Hiring;
