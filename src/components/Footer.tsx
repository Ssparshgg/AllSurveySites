import React from "react";
import { Mail, Twitter, Facebook, Instagram, ToggleLeft } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-[rgb(103,103,103)] border-t border-gray-700 mt-16">
			<div className="max-w-7xl mx-auto px-4 py-12 flex justify-center">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center text-center max-w-4xl">
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">Quick Filters</h3>
						<ul className="space-y-3">
							<li>
								<button className="text-gray-300 hover:text-white">
									Highest Paying
								</button>
							</li>
							<li>
								<button className="text-gray-300 hover:text-white">
									Daily Surveys
								</button>
							</li>
							<li>
								<button className="text-gray-300 hover:text-white">
									PayPal Only
								</button>
							</li>
							<li>
								<button className="text-gray-300 hover:text-white">
									With Referrals
								</button>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">Follow Us</h3>
						<div className="flex gap-4 justify-center">
							<a href="#" className="text-gray-300 hover:text-white">
								<Twitter className="w-6 h-6" />
							</a>
							<a href="#" className="text-gray-300 hover:text-white">
								<Facebook className="w-6 h-6" />
							</a>
							<a href="#" className="text-gray-300 hover:text-white">
								<Instagram className="w-6 h-6" />
							</a>
							<a href="#" className="text-gray-300 hover:text-white">
								<Mail className="w-6 h-6" />
							</a>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">Resources</h3>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-300 hover:text-white">
									Getting Started
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white">
									Survey Tips
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white">
									FAQ
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
