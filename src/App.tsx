import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';

const App = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/report" element={<Report />} />
		</Routes>
	)
}

export default App;
