import React, { useState } from "react";
import { Plus } from "lucide-react";

interface Section {
	id: string;
	title: string;
	content: React.ReactNode;
}

const AboutContent = () => {
	const [expandedSections, setExpandedSections] = useState<string[]>([]);

	const sections: Section[] = [
		{
			id: "mission",
			title: "Our Mission",
			content: (
				<p className="text-gray-300">
					At EverySurve.Website, our mission is to help users find trustworthy
					and rewarding survey opportunities online. We aim to provide a
					comprehensive and transparent platform where individuals can explore
					top-rated survey websites based on real user feedback. By delivering
					valuable information, we empower our visitors to make informed
					decisions and maximize their survey-taking experience.
				</p>
			),
		},
		{
			id: "ranking",
			title: "Ranking Method",
			content: (
				<p className="text-gray-300">
					Our ranking system uses a sophisticated algorithm that evaluates
					survey websites based on a variety of public feedback sources,
					including TrustPilot reviews, App Store ratings, and Play Store
					reviews. We ensure that the rankings reflect not only the overall user
					experience but also the reliability and credibility of each platform.
					This method allows us to present an up-to-date and unbiased view of
					the best survey sites available to help you choose with confidence.
				</p>
			),
		},
		{
			id: "trust",
			title: "Why Trust Us",
			content: (
				<p className="text-gray-300">
					At EverySurve.Website, we pride ourselves on providing clear, unbiased
					information without any distractions. Our site is free from ads,
					affiliate links, and unnecessary fluff, ensuring that you get straight
					to the facts. We focus solely on presenting reliable survey website
					rankings based on real user reviews, so you can trust that the
					recommendations are genuine and impartial. Your experience is our top
					priority, and we are committed to delivering only the most relevant,
					accurate insights.
				</p>
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
							<Plus
								className={`w-6 h-6 transition-all duration-300 ${
									expandedSections.includes(section.id)
										? "rotate-45 text-blue-400"
										: "rotate-0"
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
