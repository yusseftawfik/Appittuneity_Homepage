import React from "react";
import whiteLogo from "../../assets/logo-white.svg";
import '../../styles/main.scss';

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid ps-5 pe-5">
					<img
						src={whiteLogo}
						alt=""
						width="176"
						height="37"
						className="d-inline-block align-text-top"
					/>
					<div className='nav-elements'>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className="nav-item  pe-5">HOME</li>
								<li className="nav-item  pe-5">SERVICES</li>
								<li className="nav-item  pe-5">SKILLS</li>
								<li className="nav-item  pe-5">INDUSTRIES</li>
								<li className="nav-item  pe-5">BLOGS</li>
								<li className="nav-item">WE ARE HIRING</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
