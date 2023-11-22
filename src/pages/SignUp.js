import React, { useState } from 'react';
import '../styles/LoginPage.css';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import LoginPage from './LoginPage';

const SignUp = () => {
	const [login, setLogin] = useState(false);
	const handleLogin = () => {
		setLogin(!login);
	};

	return (
		<>
			{login ? (
				<LoginPage />
			) : (
				<div className="wrapper">
					<div className="container-fuild">
						<div className="bg-pad">
							<div className="image-container">
								<img
									src="/images/leadspace_background.png"
									alt="background_images"
								/>
							</div>
							<div className="login-card">
								<div className="card-txt">
									<h3 className="heading"> Sign Up </h3>
									<div className="input-field">
										<input
											type="text"
											placeholder="Email..."
										/>
										<input
											type="password"
											placeholder="Password..."
										/>
										<div className="parent-toggle">
											<div className="toggle-txt">
												<span>
													<ToggleOffOutlinedIcon />
													Remember me
												</span>
											</div>
										</div>

										<div className="btn-log">
											<button className="sign-up">Sign Up</button>
											<div className="text-line"> or</div>
											<button
												className="login"
												onClick={handleLogin}
											>
												Login
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SignUp;
