import React from "react";

const AboutContent = () => {
	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-8 text-white">About Our Website</h1>

			<div className="space-y-6">
				<section>
					<h2 className="text-2xl font-semibold mb-4 text-white">
						Our Mission
					</h2>
					<p className="text-gray-300">
						We aim to provide a comprehensive, unbiased directory of legitimate
						survey websites. Our platform helps users find reliable
						opportunities to earn money through online surveys, without the
						clutter of advertisements or affiliate marketing.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4 text-white">
						What We Offer
					</h2>
					<ul className="list-disc list-inside text-gray-300 space-y-2">
						<li>Curated list of verified survey websites</li>
						<li>Transparent ratings and reviews</li>
						<li>
							Detailed information about payment methods and minimum payouts
						</li>
						<li>Regular updates to maintain accuracy</li>
						<li>No affiliate links or sponsored content</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4 text-white">Our Values</h2>
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
				</section>
			</div>
		</div>
	);
};

export default AboutContent;
