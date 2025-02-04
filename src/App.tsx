import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SurveyGrid from "./components/SurveyGrid";
import About from "./components/About";
import Footer from "./components/Footer";
import { pageView } from "./utils/analytics.tsx";

function App() {
	useEffect(() => {
		pageView("Survey List Page");
	}, []);

	return (
		<BrowserRouter>
			<div className="min-h-screen bg-[#424242]">
				<Header />
				<main className="bg-[#424242]">
					<Routes>
						<Route path="/" element={<SurveyGrid />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
