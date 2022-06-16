import React from "react";
import "../../styles/steps.scss";
import Step from "./Step";
import downArrow from '../../assets/double-arrow.svg'

const Steps = () => {
	const data = [
		{
			number: "1",
			description:
				"We at Appittuneity provide you with highly trained developers and testers, and enable you to interview and test them to choose",
			title: "Choose Testers and Developers.",
		},
		{
			number: "2",
			description:
				"Since our professional testers have a long experience working with all testing techniques and procedures in various projects and more",
			title: "Integrate The Testers Team With Your Team.",
		},
		{
			number: "3",
			description:
				"At Appittuneity, we provide you with the most flexible hiring model, where you can increase or decrease the number of testers and more",
			title: "Increase or Decrease The Number Of Testers.",
		},
	];

	return (
		<div className="steps">
			<div className="step-container">
				{
					data.map(data =>
						<Step data={data} />
					)
				}
			</div>
			<div className="middle-line">
			</div>
			<div className='footer'>
				<img src={downArrow} alt='double-down-arrow' width='68' height='28' />
				<p>
					Only when you approve the quality. We are sure we will
				</p>
			</div>
		</div>
	);
};

export default Steps;
