import React from "react";
import "../../styles/ourServices.scss";
import webApplicationDevelopment from "../../assets/services-icons/Web-Application-Development.svg";
import customSoftwareDevelopment from "../../assets/services-icons/Custom-Software-Development.svg";
import mobileAppDevelopment from "../../assets/services-icons/Mobile-App-Development.svg";
import dedicatedDevelopmentTeams from "../../assets/services-icons/Dedicated-Development-Teams.svg";
import devOpsEngineers from "../../assets/services-icons/DevOps-Engineers.svg";
import creativeDesign from "../../assets/services-icons/Creative-Design.svg";
import testingQA from "../../assets/services-icons/Testing-&-QA.svg";
import aLMLModules from "../../assets/services-icons/AL-ML-Modules.svg";

const OurServices = () => {
	const data = [
		{
			name: "Web Application Development",
			description:
				"Our specialized team At Appittuneity builds various web applications such as administrative, financial and educational applications,and more. regardless of the size of you business and the number..",
			icon: webApplicationDevelopment,
		},
		{
			name: "Custom Software Development",
			description:
				"To build your next software project and get an optimal solution in terms of performance, security, project cost and scalability for your dedicated software, we at Appittuneity have the multifunc..",
			icon: customSoftwareDevelopment,
		},
		{
			name: "Mobile App Development",
			description:
				"We provide you with comprehensive features and services in your mobile applications to increase the levels of communication and engagement with your customers, and thus increas..",
			icon: mobileAppDevelopment,
		},
		{
			name: "Dedicated Development Teams",
			description:
				"At Appittuneity, we have dedicated DvOps engineers who are ready to help you build, organize and manage your software projects, no matter how huge.We believe that automat..",
			icon: dedicatedDevelopmentTeams,
		},
		{
			name: "DevOps Engineers",
			description:
				"We believe that automating software development and delivery is the key to success in large and a constantly developing project, so our DvOps engineers help you organize your project codes in..",
			icon: devOpsEngineers,
		},
		{
			name: "Creative Design",
			description:
				"At Appittuneity, we give great importance to creative design, because we believe that a good design for your website or mobile application is able to direct the attention of your customers and website visitors to..",
			icon: creativeDesign,
		},
		{
			name: "Testing & QA",
			description:
				"For more than ten years, Appittuneity has built a testing team experienced in various industries, So whatever the size of your software project, our test experts can get to the depths of your code in a few days, validating..",
			icon: testingQA,
		},
		{
			name: "AL ML Modules",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..",
			icon: aLMLModules,
		},
	];

	return (
		<div className="our-services">
			<h1 className="m-0">OUR SERVICES</h1>
			<main>
				{data.map((data) => (
					<div className="data-holder" data-aos="zoom-out-up">
						<span data-aos="flip-down">{data.name}</span>
						<span data-aos="flip-down">{data.description}</span>
						<img data-aos="flip-down" src={data.icon} alt="services-icon" width="45" height="45" />
					</div>
				))}
			</main>
		</div>
	);
};

export default OurServices;
