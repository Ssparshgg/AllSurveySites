import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { trackEvent } from "../utils/analytics";

interface SurveyCardProps {
	name: string;
	url: string;
	minPayout: number;
	avgPay: {
		min: number;
		max: number;
	};
	frequency: string;
	paymentMethods: string[];
	requirements: string[];
	specialFeatures: string[];
	notes: string;
	trustpilotRating: string;
	guideLink?: string;
}

const SurveyCard = ({
	name,
	url,
	minPayout,
	avgPay,
	frequency,
	paymentMethods,
	requirements,
	specialFeatures,
	notes,
	trustpilotRating,
	guideLink,
}: SurveyCardProps) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleSignUp = () => {
		trackEvent("Survey", "signup_click", name);
	};

	const handleFlip = () => {
		trackEvent("Survey", "card_flip", name);
		setIsFlipped(!isFlipped);
	};

	const handleDetailsView = () => {
		trackEvent("Survey", "details_view", name);
		handleFlip();
	};

	const handleGuideClick = () => {
		trackEvent("Survey", "guide_click", name);
	};

	return (
		<div className="h-[400px] perspective">
			<div
				className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
					isFlipped ? "rotate-y-180" : ""
				}`}
			>
				{/* Front of card */}
				<div className="absolute w-full h-full backface-hidden">
					<div className="bg-[rgb(103,103,103)] rounded-lg shadow-sm p-6 border border-gray-700 h-full flex flex-col text-white">
						<div className="bg-[#505050] p-3 rounded-lg mb-6">
							<div className="flex items-center justify-between">
								<h3 className="text-lg font-bold text-white">{name}</h3>
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									onClick={handleSignUp}
									className="text-sm text-blue-300 hover:text-blue-200 flex items-center gap-1"
								>
									<img
										src={`https://www.google.com/s2/favicons?domain=${url}&sz=128`}
										alt={`${name} favicon`}
										className="w-6 h-6 object-contain" // Increased from w-4 h-4
										onError={(e) => {
											const target = e.currentTarget as HTMLImageElement;
											target.style.display = "none";
											target.parentElement?.insertAdjacentHTML(
												"beforeend",
												'<ExternalLink className="w-6 h-6" />' // Increased fallback icon size too
											);
										}}
									/>
								</a>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-3 mb-6">
							<div className="bg-[#505050] p-3 rounded-lg">
								<p className="text-xs text-gray-300 mb-1">Min Payout</p>
								<p className="font-semibold text-white">
									${minPayout.toFixed(2)}
								</p>
							</div>
							<div className="bg-[#505050] p-3 rounded-lg">
								<p className="text-xs text-gray-300 mb-1">Pay Per Survey</p>
								<p className="font-semibold text-white">
									${avgPay.min} - ${avgPay.max}
								</p>
							</div>
						</div>

						<div className="text-sm text-gray-300 flex-grow">
							<p className="font-bold text-white mb-2">Program Summary:</p>
							<p className="mb-4">{notes}</p>
						</div>

						<div className="mb-4 text-sm">
							<p className="text-gray-300">
								Trustpilot Rating:{" "}
								<span className="text-white font-semibold">
									{trustpilotRating}
								</span>
							</p>
						</div>

						<div className="flex gap-3 mt-auto">
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								onClick={handleSignUp}
								className="flex-1 px-4 py-2 bg-[#3f51b5] text-white text-center rounded-lg hover:bg-[#324090]"
							>
								Sign Up
							</a>
							{guideLink && (
								<a
									href={guideLink}
									target="_blank"
									rel="noopener noreferrer"
									onClick={handleGuideClick}
									className="flex-1 px-4 py-2 bg-green-600 text-white text-center rounded-lg hover:bg-green-700"
								>
									Guide
								</a>
							)}
							<button
								onClick={handleDetailsView}
								className="flex-1 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200"
							>
								Details
							</button>
						</div>
					</div>
				</div>

				{/* Back of card */}
				<div className="absolute w-full h-full backface-hidden rotate-y-180">
					<div className="bg-[rgb(103,103,103)] rounded-lg shadow-sm p-6 border border-gray-700 h-full text-white flex flex-col">
						<div className="space-y-4 flex-1 overflow-y-auto">
							<h3 className="text-xl font-bold text-white sticky top-0 bg-[rgb(103,103,103)] py-2">
								{name}
							</h3>

							<div className="space-y-6">
								<div>
									<h4 className="text-sm font-semibold mb-2">Requirements</h4>
									<div className="flex flex-wrap gap-2">
										{requirements.map((req) => (
											<span
												key={req}
												className="px-2 py-1 bg-[#505050] text-gray-200 text-xs rounded-full"
											>
												{req}
											</span>
										))}
									</div>
								</div>

								<div>
									<h4 className="text-sm font-semibold mb-2">
										Payment Methods
									</h4>
									<div className="flex flex-wrap gap-2">
										{paymentMethods.map((method) => (
											<span
												key={method}
												className="px-2 py-1 bg-[#505050] text-gray-200 text-xs rounded-full"
											>
												{method}
											</span>
										))}
									</div>
								</div>

								{specialFeatures.length > 0 && (
									<div>
										<h4 className="text-sm font-semibold mb-2">Features</h4>
										<div className="flex flex-wrap gap-2">
											{specialFeatures.map((feature) => (
												<span
													key={feature}
													className="px-2 py-1 bg-blue-900 text-blue-100 text-xs rounded-full"
												>
													{feature}
												</span>
											))}
										</div>
									</div>
								)}
							</div>
						</div>

						<button
							onClick={handleFlip}
							className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 mt-4"
						>
							Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SurveyCard;
