import React, { useEffect } from "react";
import Header from "./components/Header";
import SurveyGrid from "./components/SurveyGrid";
import Footer from "./components/Footer";
import { pageView } from "./utils/analytics.tsx";

function App() {
	useEffect(() => {
		// Track page view when component mounts
		pageView("Survey List Page");
	}, []);

	return (
		<div className="min-h-screen bg-[#424242]">
			<Header />
			<main className="bg-[#424242]">
				<SurveyGrid />
			</main>
			<Footer />
		</div>
	);
}

export default App;
