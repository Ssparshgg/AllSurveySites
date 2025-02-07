import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Section {
	id: string;
	title: string;
	content: React.ReactNode;
}

const carrotIcon = "/carrot-svgrepo-com.png";

const AboutContent = () => {
	const [expandedSections, setExpandedSections] = useState<string[]>([]);

	const sections: Section[] = [
		{
			id: "mission",
			title: "Our Mission",
			content: (
				<p className="text-gray-300">
					We aim to provide a comprehensive, unbiased directory of legitimate
					survey websites. Our platform helps users find reliable opportunities
					to earn money through online surveys, without the clutter of
					advertisements or affiliate marketing.
				</p>
			),
		},
		{
			id: "offer",
			title: "What We Offer",
			content: (
				<ul className="list-disc list-inside text-gray-300 space-y-2">
					<li>Curated list of verified survey websites</li>
					<li>Transparent ratings and reviews</li>
					<li>
						Detailed information about payment methods and minimum payouts
					</li>
					<li>Regular updates to maintain accuracy</li>
					<li>No affiliate links or sponsored content</li>
				</ul>
			),
		},
		{
			id: "values",
			title: "Our Values",
			content: (
				<div className="text-gray-300">
					<p className="mb-4">
						<strong>Transparency:</strong> We provide honest, unbiased
						information about every survey platform.
					</p>
					<p className="mb-4">
						<strong>Quality:</strong> We carefully verify and review each
						website before listing it.
					</p>
					<p>
						<strong>User-First:</strong> Our recommendations are based on user
						experience and reliability.
					</p>
				</div>
			),
		},
	];

	const toggleSection = (sectionId: string) => {
		setExpandedSections((prev) =>
			prev.includes(sectionId)
				? prev.filter((id) => id !== sectionId)
				: [...prev, sectionId]
		);
	};

	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-8 text-white">About Our Website</h1>

			<div className="space-y-4">
				{sections.map((section) => (
					<div
						key={section.id}
						className="border border-gray-700 rounded-lg overflow-hidden"
					>
						<button
							onClick={() => toggleSection(section.id)}
							className="w-full px-6 py-4 bg-[rgb(103,103,103)] text-white flex justify-between items-center hover:bg-[rgb(93,93,93)] transition-colors"
						>
							<h2 className="text-xl font-semibold">{section.title}</h2>
							<img
								src={carrotIcon}
								alt={
									expandedSections.includes(section.id) ? "Collapse" : "Expand"
								}
								className={`w-5 h-5 transition-transform duration-200 ${
									expandedSections.includes(section.id) ? "rotate-180" : ""
								}`}
							/>
						</button>
						{expandedSections.includes(section.id) && (
							<div className="px-6 py-4 bg-[rgb(66,66,66)]">
								{section.content}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutContent;
