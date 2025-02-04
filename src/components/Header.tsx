import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="w-full bg-[rgb(103,103,103)] shadow-sm sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 py-6">
				<div className="relative flex justify-center">
					<div className="flex flex-col items-center">
						<h1 className="text-3xl font-bold text-white">
							All Survey Websites
						</h1>
						<p className="text-gray-300 mt-1">
							No Ad, No Affiliates, No Fluff.
						</p>
					</div>
					<Link
						to="/about"
						className="text-white hover:text-gray-200 font-medium absolute right-0 top-1/2 -translate-y-1/2"
					>
						About Us
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
