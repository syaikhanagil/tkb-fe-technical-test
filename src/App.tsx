import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import feather from 'feather-icons';
import Home from './pages/Home';
import Report from './pages/Report';

const App = () => {

	useEffect(() => {
		feather.replace();
	}, [])

	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/report" element={<Report />} />
		</Routes>
	)
}

export default App;
