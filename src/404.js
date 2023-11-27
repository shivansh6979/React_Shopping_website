import React from 'react';
import './styles/404.css';

const UnthorizedError = () => {
	return (
		<div className="parent_404">
			<div className="error_404">
				<img
					className="error"
					src="/images/404-page.png"
					alt=" Page Not Found"
				/>
			</div>
			<div>
				<h1> 404</h1>
				<h3>The Resource requested could not found on this server! </h3>
				<button className="backtohome"> Back To HomePage</button>
			</div>
		</div>
	);
};

export default UnthorizedError;
