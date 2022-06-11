import React from "react";
import sideArrow from "../../assets/sideArrow.svg";
import "../../styles/experince.scss";

const Experince = () => {
	return (
		<div className="experince">
			<span>Industry Experience:</span>
			<main>
				<hr />
				<div className="first-section">
					<div>
						<span>E-Commerce Website and Application</span>
						<p>
							If you want to achieve great success in selling your products, you
							must have an effective e-commerce website & mobile app, and we at
							Appittuneity are one of the best companies that you can rely on
							for our long experience in designing and implementing e-commerce
							solutions for small businesses or even giant commercial
							establishments, and we have many One of the inspiring success
							stories in the field of e-commerce.
						</p>
					</div>
					<div>
						<span>Supporting services for ecommerce websites.</span>
						<p>
							We can help you at Appittuneity by providing additional supporting
							services that make your e-commerce website more effective and more
							accessible, such as e-commerce search engine optimization SEO
							services and relying on various marketing strategy tools, Here are
							some of these supportive services:
						</p>
					</div>
				</div>
				<div>
					<span>E-Learning</span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
						accumsan lacus vel facilisis..
					</p>
				</div>
				<div className="footer">
					<span>
						Read more
					</span>
					<img src={sideArrow} alt="side-arrow" width="160" height="230" />
				</div>
			</main>
		</div>
	);
};

export default Experince;
