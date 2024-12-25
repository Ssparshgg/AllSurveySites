import React, { useState } from "react";
import SurveyCard from "./SurveyCard";

// Sample data - in a real app, this would come from an API
const SAMPLE_DATA = [
	{
		id: 1,
		name: "SurveyPro",
		logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop",
		url: "https://example.com",
		minPayout: 10.0,
		avgPay: 2.5,
		frequency: "Daily",
		paymentMethods: ["PayPal", "Bank Transfer"],
		requirements: ["Email verification", "18+"],
		hasReferral: true,
		rating: 4.5,
		specialFeatures: ["Mobile App"],
		notes: "Best for daily survey takers with quick payment processing",
	},
	{
		id: 2,
		name: "OpinionHub",
		logo: "https://images.unsplash.com/photo-1611162616305-c69b3037f77d?w=128&h=128&fit=crop",
		url: "https://example.com",
		minPayout: 5.0,
		avgPay: 1.75,
		frequency: "Weekly",
		paymentMethods: ["PayPal", "Gift Cards"],
		requirements: ["Phone verification"],
		hasReferral: false,
		rating: 4.2,
		notes: "Wide variety of survey topics available",
	},
	// Add more sample data as needed
];

const SurveyGrid = () => {
	const [surveys] = useState(
		SAMPLE_DATA.filter((survey) => survey.name !== "OpinionHub")
	);

	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{surveys.map((survey) => (
					<SurveyCard key={survey.id} {...survey} />
				))}
			</div>
		</div>
	);
};

export default SurveyGrid;
