import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    const navItems = [
        { label: "Discover RRC", path: "/" },
        { label: "How We Guide", path: "/about" },
        { label: "Live Sessions	", path: "/events" },
        { label: "Mindspace", path: "/blog" },
    ];

    useEffect(() => {
        const menu = mobileMenuRef.current;
        if (menu) {
            if (isMobileMenuOpen) {
                menu.style.height = `${menu.scrollHeight}px`;
            } else {
                menu.style.height = "0px";
            }
        }
    }, [isMobileMenuOpen]);

    return (
        <header className="fixed top-0 w-full bg-white shadow z-50 py-2">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    RRC-Academic-Mentor
                </Link>

                <div className="hidden lg:flex items-center space-x-7">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`relative px-3 py-1 rounded transition-all duration-200 ${currentPath === item.path
                                ? "text-blue-600 bg-blue-100 font-semibold"
                                : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        to="/?scrollTo=enquiry"
                        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Get Started
                    </Link>
                </div>

                <button
                    className="lg:hidden text-gray-700"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div
                ref={mobileMenuRef}
                style={{
                    overflow: "hidden",
                    transition: "height 0.5s ease"
                }}
                className="lg:hidden bg-white px-4"
            >
                <div className="flex flex-col space-y-4 py-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-gray-800 font-semibold ${currentPath === item.path ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        to="/get-started"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;