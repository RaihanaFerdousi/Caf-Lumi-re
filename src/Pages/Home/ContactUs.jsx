import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <section id="contact" className="bg-[#090407] text-white py-16 px-6 rounded-2xl mx-4 my-12 shadow-xl">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-4xl font-bold mb-6 text-[#c19a6b]">Get in Touch</h2>
                <p className="text-lg mb-8 text-[#a77a4d]">
                    We’d love to hear from you! Whether it’s a question, feedback, or a reservation inquiry, reach out to us.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#140a05] p-8 rounded-xl shadow-lg">
                    {/* Contact Info */}
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center space-x-4">
                            <FaPhoneAlt className="text-2xl text-[#c19a6b]" />
                            <p className="text-lg text-[#a77a4d]">+1 (234) 567-890</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-2xl text-[#c19a6b]" />
                            <p className="text-lg text-[#a77a4d]">contact@cafelumiere.com</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-2xl text-[#c19a6b]" />
                            <p className="text-lg text-[#a77a4d]">123 Coffee St, Paris, France</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#1e0f08] p-6 rounded-lg shadow-md">
                        <form className="space-y-4">
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-md bg-[#140a05] text-white placeholder-[#c19a6b] focus:outline-none focus:ring-2 focus:ring-[#c19a6b]"
                                placeholder="Your Name"
                                required
                            />
                            <input
                                type="email"
                                className="w-full px-4 py-2 rounded-md bg-[#140a05] text-white placeholder-[#c19a6b] focus:outline-none focus:ring-2 focus:ring-[#c19a6b]"
                                placeholder="Your Email"
                                required
                            />
                            <textarea
                                className="w-full px-4 py-2 rounded-md bg-[#140a05] text-white placeholder-[#c19a6b] focus:outline-none focus:ring-2 focus:ring-[#c19a6b]"
                                placeholder="Your Message"
                                rows="4"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-[#9c6a3f] text-white py-2 rounded-md font-semibold hover:bg-[#bb8755] transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
