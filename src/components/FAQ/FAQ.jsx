import React from "react";
import "../../styles/faq.scss";

const FAQ = () => {
	return (
		<div className="faq">
			<h1>Frequently Asked Questiond</h1>
			<main>
				<div class="accordion accordion-flush" id="accordionFlushExample">
					<div class="accordion-item">
						<h2 class="accordion-header" id="flush-headingOne">
							<button
								class="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseOne"
								aria-expanded="false"
								aria-controls="flush-collapseOne"
							>
								Can I hire testers from Appituneity and integrate them with my
								team?
							</button>
						</h2>
						<div
							id="flush-collapseOne"
							class="accordion-collapse collapse"
							aria-labelledby="flush-headingOne"
							data-bs-parent="#accordionFlushExample"
						>
							<div class="accordion-body">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida. Risus commodo viverra
								maecenas accumsan lacus vel facilisis.{" "}
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header" id="flush-headingTwo">
							<button
								class="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseTwo"
								aria-expanded="false"
								aria-controls="flush-collapseTwo"
							>
								What is Software Quality Assurance(QA)?
							</button>
						</h2>
						<div
							id="flush-collapseTwo"
							class="accordion-collapse collapse"
							aria-labelledby="flush-headingTwo"
							data-bs-parent="#accordionFlushExample"
						>
							<div class="accordion-body">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida. Risus commodo viverra
								maecenas accumsan lacus vel facilisis.{" "}
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header" id="flush-headingThree">
							<button
								class="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseThree"
								aria-expanded="false"
								aria-controls="flush-collapseThree"
							>
								What is Regression Testing?
							</button>
						</h2>
						<div
							id="flush-collapseThree"
							class="accordion-collapse collapse"
							aria-labelledby="flush-headingThree"
							data-bs-parent="#accordionFlushExample"
						>
							<div class="accordion-body">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida. Risus commodo viverra
								maecenas accumsan lacus vel facilisis.{" "}
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header" id="flush-headingFour">
							<button
								class="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseFour"
								aria-expanded="false"
								aria-controls="flush-collapseFour"
							>
								What is Usibility Testing?and How Can Help Me?
							</button>
						</h2>
						<div
							id="flush-collapseFour"
							class="accordion-collapse collapse"
							aria-labelledby="flush-headingFour"
							data-bs-parent="#accordionFlushExample"
						>
							<div class="accordion-body">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida. Risus commodo viverra
								maecenas accumsan lacus vel facilisis.{" "}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default FAQ;
