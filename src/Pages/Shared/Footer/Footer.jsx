import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#170e03] text-white py-6">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <h3 className="text-2xl font-bold">Café Lumière</h3>
                    <p className="text-sm mt-2">The perfect blend of taste and ambiance</p>
                </div>
                <div className="flex justify-center space-x-6 mb-4 sm:mb-0">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
                    <a href="#menu" className="text-gray-400 hover:text-white transition-colors">Menu</a>
                    <a href="#reserve" className="text-gray-400 hover:text-white transition-colors">Reserve</a>
                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
                </div>
                <div className="text-center">
                    <p className="text-sm">&copy; 2025 Café Lumière. All rights reserved.</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;