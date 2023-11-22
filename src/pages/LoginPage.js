import React, { useState } from 'react';
import '../styles/LoginPage.css';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import SignUp from './SignUp';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/LoginSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [userCredential, setUserCredential] = useState({
		email: '',
		password: '',
		type: '',
	});
	const [signupOpen, setSignUpOpen] = useState(false);
	const handleSignUp = (e) => {
		setSignUpOpen(!signupOpen);
	};
	const handlerLogin = () => {
		axios
			.post(`${process.env.REACT_APP_BASE_URL}/login`, userCredential)
			.then((res) => {
				if (res?.data?.token) {
					navigate('/Home');
				} else {
					dispatch(login(res.data));
				}
			})
			.catch((err) => {
				console.error('error', err);
			});
	};
	const handlerChange = (e) => {
		const { name, value } = e.target;

		setUserCredential({
			...userCredential,
			[name]: value,
		});
	};

	const options = [
		{
			label: 'Select an option',
			value: '',
		},
		{
			label: 'Admin',
			value: 'admin',
		},
		{
			label: 'Customer',
			value: 'customer',
		},
	];

	return (
		<>
			{signupOpen ? (
				<SignUp />
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
									<h3 className="heading"> Login </h3>
									<div className="input-field">
										<input
											type="text"
											placeholder="Email..."
											onChange={handlerChange}
											value={userCredential.email}
											name="email"
										/>
										<input
											type="password"
											placeholder="Password..."
											onChange={handlerChange}
											value={userCredential.password}
											name="password"
										/>
										<select
											name="type"
											value={userCredential.type}
											onChange={handlerChange}
										>
											{options.map((option) => {
												console.log('pppppppppppp', options);
												console.log('rrrrrrrrrrrr', option);
												return (
													<option
														key={option.value}
														value={option.value}
													>
														{option.label}
													</option>
												);
											})}
										</select>
										{!userCredential && (
											<p style={{ color: 'red' }}>Please Enter Both Field</p>
										)}

										<div className="parent-toggle">
											<div className="toggle-txt">
												<span>
													<ToggleOffOutlinedIcon />
													Remember me
												</span>
											</div>
										</div>
										<div className="btn-log">
											<button
												className="login"
												onClick={handlerLogin}
											>
												Login
											</button>
											<div className="text-line"> or</div>

											<button
												className="sign-up"
												onClick={(e) => handleSignUp(e)}
											>
												Sign Up
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

export default LoginPage;
