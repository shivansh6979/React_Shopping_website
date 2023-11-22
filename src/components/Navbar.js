import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
	return (
		<div className="wrapper">
			<div className="container-fuild">
				<div className="header-in">
					<header>
						<div className="logo">
							<img
								src="/images/logo.png"
								alt="logo"
							/>
						</div>
						<div className="navbar">
							<ul>
								<li>
									<Link to="/Home">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</header>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
