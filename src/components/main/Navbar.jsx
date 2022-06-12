import React from "react";
import whiteLogo from "../../assets/logo-white.svg";
import '../../styles/main.scss';

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-xl bg-dark fixed-top">
				<div className="container-fluid ps-5 pe-5">
					<img
						src={whiteLogo}
						alt=""
						width="200vw"
						height="auto"
						className="d-inline-block align-text-top"
					/>
					<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
						<div className="offcanvas-header">
							<img
								src={whiteLogo}
								alt=""
								width="176"
								height="37"
								className="d-inline-block align-text-top"
							/>
							<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav flex-grow-1 pe-3">
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
