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
		rating: 4.5,
		specialFeatures: ["Mobile App"],
		notes: "Best for daily survey takers with quick payment processing",
	},
	{
		id: 3,
		name: "SurveyMaster",
		logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=128&h=128&fit=crop",
		url: "https://example.com",
		minPayout: 15.0,
		avgPay: 3.0,
		frequency: "Daily",
		paymentMethods: ["PayPal", "Crypto", "Bank Transfer"],
		requirements: ["ID verification"],
		rating: 4.7,
		specialFeatures: ["High Paying", "Mobile App"],
		notes: "Premium survey platform with higher payouts",
	},
	{
		id: 4,
		name: "GlobalSurveys",
		logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=128&h=128&fit=crop",
		url: "https://example.com",
		minPayout: 8.0,
		avgPay: 2.0,
		frequency: "Daily",
		paymentMethods: ["PayPal"],
		requirements: ["Email verification"],
		rating: 4.1,
		notes: "International surveys available",
	},
	{
		id: 5,
		name: "QuickSurvey",
		logo: "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?w=128&h=128&fit=crop",
		url: "https://example.com",
		minPayout: 3.0,
		avgPay: 1.0,
		frequency: "Instant",
		paymentMethods: ["PayPal", "Gift Cards"],
		requirements: ["None"],
		rating: 3.9,
		specialFeatures: ["Quick Pays"],
		notes: "Perfect for quick, short surveys",
	},
];

const SurveyGrid = () => {
	const [surveys] = useState(SAMPLE_DATA);

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
