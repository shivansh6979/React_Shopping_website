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
	const [error, setError] = useState('');
	const handleSignUp = (e) => {
		setSignUpOpen(!signupOpen);
	};
	const handlerLogin = () => {
		if (
			!userCredential.email ||
			!userCredential.password ||
			!userCredential.type
		) {
			setError('Please fill Required field');
		} else {
			axios
				.post(`${process.env.REACT_APP_BASE_URL}/login`, userCredential)
				.then((res) => {
					if (res?.data?.token && res?.data?.type === 'ADMIN') {
						navigate('/Home');
					} else {
						dispatch(login(res.data));
					}
				})
				.catch((err) => {
					console.error('error', err);
				});
		}
		console.log('tttttttttt', error);
	};
	const handlerChange = (e) => {
		const { name, value } = e.target;

		setUserCredential({
			...userCredential,
			[name]: value,
		});
		setError('');
	};

	const options = [
		{
			label: 'Select an option',
			value: '',
		},
		{
			label: 'Admin',
			value: 'ADMIN',
		},
		{
			label: 'Customer',
			value: 'CUSTOMER',
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
										<div className="input-sec">
											<input
												className="input-txt-field"
												type="text"
												placeholder="Email..."
												onChange={handlerChange}
												value={userCredential.email}
												name="email"
											/>
											<input
												className="input-txt-field"
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
										</div>
										<p className="error-txt">{error}</p>

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
