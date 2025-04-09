import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">RRCareer</h2>
                    <p className="text-gray-600 text-sm">
                        Empowering learners through a modern educational platform.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                        <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
                        <li><Link to="/courses" className="hover:text-blue-600">Events</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-600">Blogs</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/faq" className="hover:text-blue-600">FAQs</Link></li>
                        <li><Link to="/support" className="hover:text-blue-600">Support</Link></li>
                        <li><Link to="/terms" className="hover:text-blue-600">Terms</Link></li>
                        <li><Link to="/privacy" className="hover:text-blue-600">Privacy</Link></li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Stay Updated</h3>
                    <form className="flex flex-col space-y-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} RRCareer. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
