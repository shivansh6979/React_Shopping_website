import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<LoginPage />}
				></Route>
				<Route
					path="/Home"
					element={<Home />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
