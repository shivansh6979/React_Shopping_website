import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
	return (
		<div className="wrapper">
			<div className="container">
				<div className="header-in">
					<div className="header-left">
						<div className="logo">
							<img
								src="/images/logo.png"
								alt="logo"
							/>
						</div>
						<div className="nav-search">
							<input
								className="nav-input"
								type="text"
								placeholder="Search..."
							/>
						</div>
					</div>

					<div className="header-right">
						<div className="navbar">
							<ul>
								<li>
									<div class="dropdown">
										<a
											href="#"
											className="btn  dropdown-toggle"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Dropdown button
										</a>
										<ul class="dropdown-menu">
											<li>
												<a
													class="dropdown-item"
													href="#"
												>
													Action
												</a>
											</li>
											<li>
												<a
													class="dropdown-item"
													href="#"
												>
													Another action
												</a>
											</li>
											<li>
												<a
													class="dropdown-item"
													href="#"
												>
													Something else here
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<Link to="/about">Become a Seller</Link>
								</li>
								<li>
									<div class="dropdown">
										<a
											href="#"
											className="btn  dropdown-toggle"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											More
										</a>
										<ul class="dropdown-menu">
											<li>
												<a
													class="dropdown-item"
													href="#"
												>
													Action
												</a>
											</li>
											<li>
												<a
													class="dropdown-item"
													href="#"
												>
													Another action
												</a>
											</li>
											<li>
												<a
													class="dropdown-item"
													href="#"
												>
													Something else here
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<span>
										<ShoppingCartIcon className="cart-icon" />
									</span>
									<Link to="/contact">Cart</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
