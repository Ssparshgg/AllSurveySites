import React from "react";
import { ExternalLink, DollarSign, Clock, Users, Star } from "lucide-react";

interface SurveyCardProps {
	name: string;
	logo: string;
	url: string;
	minPayout: number;
	avgPay: number;
	frequency: string;
	paymentMethods: string[];
	requirements: string[];
	rating: number;
	specialFeatures?: string[];
	notes?: string;
}

const SurveyCard = ({
	name,
	logo,
	url,
	minPayout,
	avgPay,
	frequency,
	paymentMethods,
	requirements,
	rating,
	specialFeatures,
	notes,
}: SurveyCardProps) => {
	return (
		<div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
			<div className="flex items-center gap-4 mb-4">
				<img src={logo} alt={name} className="w-10 h-10 object-contain" />
				<div>
					<h3 className="text-xl font-bold text-gray-900">{name}</h3>
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
					>
						Visit Site <ExternalLink className="w-4 h-4" />
					</a>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4 mb-4">
				<div className="flex items-center gap-2">
					<DollarSign className="w-5 h-5 text-gray-400" />
					<div>
						<p className="text-sm text-gray-600">Min. Payout</p>
						<p className="font-semibold">
							${minPayout.toFixed(2)}{" "}
							<span className="text-gray-500 text-sm">
								/ ${avgPay.toFixed(2)} avg
							</span>
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Clock className="w-5 h-5 text-gray-400" />
					<div>
						<p className="text-sm text-gray-600">Frequency</p>
						<p className="font-semibold">{frequency}</p>
					</div>
				</div>
			</div>

			<div className="space-y-4">
				<div>
					<h4 className="text-sm font-semibold text-gray-700 mb-2">
						Payment Methods
					</h4>
					<div className="flex flex-wrap gap-2">
						{paymentMethods.map((method) => (
							<span
								key={method}
								className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
							>
								{method}
							</span>
						))}
					</div>
				</div>

				{specialFeatures && specialFeatures.length > 0 && (
					<div className="flex gap-2">
						{specialFeatures.map((feature) => (
							<span
								key={feature}
								className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
							>
								{feature}
							</span>
						))}
					</div>
				)}

				{notes && <p className="text-sm text-gray-600 line-clamp-2">{notes}</p>}
			</div>

			<div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
				<div className="flex items-center gap-1">
					<Star className="w-5 h-5 text-yellow-400 fill-current" />
					<span className="font-semibold">{rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	);
};

export default SurveyCard;
