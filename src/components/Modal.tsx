import React from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
			<div className="relative bg-[#424242] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
				<button
					onClick={onClose}
					className="absolute right-4 top-4 text-gray-300 hover:text-white text-2xl"
				>
					×
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
