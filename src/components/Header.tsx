import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";
import AboutContent from "./AboutContent";

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const location = useLocation();
	const isMainPage = location.pathname === "/";

	return (
		<header className="w-full bg-[rgb(103,103,103)] shadow-sm sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 py-6">
				<div className="relative flex justify-center">
					<div className="flex flex-col items-center">
						<h1 className="text-3xl font-bold text-white">
							Every Survey Website
						</h1>
						<p className="text-gray-300 mt-1">
							No Ad, No Affiliates, No Fluff.
						</p>
					</div>
					{isMainPage ? (
						<button
							onClick={() => setIsModalOpen(true)}
							className="text-white hover:text-gray-200 font-medium absolute right-0 top-1/2 -translate-y-1/2"
						>
							About Us
						</button>
					) : (
						<Link
							to="/about"
							className="text-white hover:text-gray-200 font-medium absolute right-0 top-1/2 -translate-y-1/2"
						>
							About Us
						</Link>
					)}
				</div>
			</div>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<AboutContent />
			</Modal>
		</header>
	);
};

export default Header;
