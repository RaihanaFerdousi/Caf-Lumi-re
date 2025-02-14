import React from 'react';
import logo from '../../../assets/Logo.png';
// abc
const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
                    {/* Column 1 - Logo and description */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <img src={logo} className="w-[100px] h-[100px] mb-4" alt="Café Lumière Logo" />
                        <h3 className="text-3xl font-semibold mb-2">Café Lumière</h3>
                        <p className="text-sm italic">The perfect blend of taste and ambiance</p>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h4 className="font-semibold text-xl mb-4">Quick Links</h4> 
                        <div className="space-y-3 flex flex-col">
                            <a href="#" className=" text-white transition-colors duration-300">Home</a>
                            <a href="#menu" className=" text-white transition-colors duration-300">Menu</a>
                            <a href="#reserve" className=" text-white transition-colors duration-300">Reserve</a>
                            <a href="#contact" className=" text-white transition-colors duration-300">Contact Us</a>
                        </div>
                    </div>

                    {/* Column 3 - Contact */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h4 className="font-semibold text-xl mb-4">Contact</h4>
                        <p className="text-sm mb-2">123 Café Street, City Name</p>
                        <p className="text-sm mb-2">Phone: (123) 456-7890</p>
                        <p className="text-sm">Email: info@cafélumiere.com</p>
                    </div>

                    {/* Column 4 - Social Media Links */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h4 className="font-semibold text-xl mb-4">Follow Us</h4>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm opacity-70">&copy; 2025 Café Lumière. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
