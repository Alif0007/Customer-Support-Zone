import React from 'react';

const Footer = () => {
    const socialLinks = [
        { icon: '📘', label: 'Facebook' },
        { icon: '🐦', label: 'Twitter' },
        { icon: '📷', label: 'Instagram' },
        { icon: '💼', label: 'LinkedIn' }
    ];

    return (
        <footer className="bg-black  text-white">
            <div className="  px-4 sm:px-6 lg:px-15 py-12 border-b border-gray-700 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    
                    {/* Company Description */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">CS — Ticket System</h3>
                        <p className="text-gray-300 leading-relaxed">
                            CS ticketing systems streamline customer support by organizing, prioritizing, and tracking service requests to ensure efficient issue resolution and enhance customer satisfaction.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Mission</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Saied</a></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Products & Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Customer Stories</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Information Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Information</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Join Us</a></li>
                        </ul>
                    </div>
                    {/* Social Links & Contact */}
                <div >
                    <div className=" lg:flex-row justify-between items-center">
                        {/* Social Links with Icons */}
                        <div className="  mb-4 lg:mb-0">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.label}
                                    href="#" 
                                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                                    title={social.label}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                    <span className=" sm:inline">{social.label}</span>
                                </a>
                            ))}
                        </div>
                        
                        {/* Contact Email */}
                        <div className="text-gray-300">
                            <a href="mailto:support@cst.com" className="hover:text-white transition-colors flex items-center">
                                <span className="mr-2">✉️</span>
                                support@cst.com
                            </a>
                        </div>
                    </div>
                </div>
                </div>

                
            </div>

            {/* Copyright Bottom Bar */}
            <div className="bg-black py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-300 text-sm">
                        © 2025 CS — Ticket System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;