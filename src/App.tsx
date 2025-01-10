import React from "react";
import Header from "./components/Header";
import SurveyGrid from "./components/SurveyGrid";
import Footer from "./components/Footer";

function App() {
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
