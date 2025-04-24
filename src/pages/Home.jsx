import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroSlider from "../components/herosection";
import CareerSupportSection from "../components/CareerSupportSection";
import CourseExplorer from "../components/CourseExplorer";
import LogoSliderWithPopup from "../components/LogoSliderWithPopup";
import TeamSection from "../components/teamSection";
import EnquiryForm from "../components/EnquiryForm";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import mnt from "../assets/mnt.png"

import { motion } from "framer-motion";

const Home = () => {
    const location = useLocation();

    const slides = [
        {
            title: "Empowering Students with Clarity, Direction, and Support",
            subtitle:
                " We offer expert career counseling and academic guidance for students in school, college, and beyond. Whether you're looking to study in India or overseas, RRC Academic Mentors helps you choose the right path forward.",
            image: img1,
            ctaText: "Get Started",
            ctaLink: "/get-started",
        },
        {
            title: "Your Future, Your Choice — We're With You",
            subtitle:
                "Explore top academic institutions across India and internationally. Our consultants help you identify the right programs, prepare applications, and manage the entire admission process with ease.",
            image: img2,
            ctaText: "Learn More",
            ctaLink: "/about",
        },
        {
            title: "Plan Your Academic Journey With Confidence",
            subtitle:
                "Through personalized one-on-one sessions, we help students discover their strengths, explore options, and make informed decisions about their career and academic future.",
            image: img3,
            ctaText: "Explore More",
            ctaLink: "/demo",
        },
    ];

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get("scrollTo") === "enquiry") {
            const el = document.getElementById("enquiry")
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" })
                }, 200)
            }
        }
    }, [location])

    return (
        <div className="relative">
            <Navbar />
            <HeroSlider slides={slides} />

            {/* About Us Section */}
            <section className="py-8 bg-gray-100">
                <div className="text-center mb-4">
                    <h2 className="text-3xl text-gray-700 font-bold mb-6">About RRC Empowering Your Future</h2>
                </div>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Text Column */}
                    <div>
                        <motion.h2
                            className="text-4xl font-extrabold text-gray-800 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            RRC <span className="text-blue-600">Academic Mentors</span>
                        </motion.h2>

                        <motion.p
                            className="text-gray-600 mb-4 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            We guide students through crucial academic decisions — from selecting the right stream to securing admissions at reputed institutions in India and abroad.
                        </motion.p>

                        <motion.p
                            className="text-gray-600 mb-6 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            Every student deserves strategic, unbiased guidance. With a student-first approach, we simplify the journey of career planning with personal support at every stage.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <Link to="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-8 rounded-xl shadow-md transition-all">
                                Learn More About Us
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Column */}
                    <motion.div
                        className="w-full no-background"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{
                            backgroundColor: "transparent !important",
                            background: "none !important"
                        }}
                    >
                        <img
                            src={mnt}
                            alt="Mentorship session illustration"
                            className="rounded-2xl  w-full h-auto object-cover no-background"
                            style={{
                                backgroundColor: "transparent !important",
                                background: "none !important"
                            }}
                        />
                    </motion.div>
                </div>
            </section >

            {/* Why RRC Academic Mentors Section */}
            < section className="py-12 bg-white" >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Why RRC Academic Mentors?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-gray-100 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">Free & Transparent Guidance</h3>
                            <p className="text-gray-600">We don’t charge for consultations. Our priority is the student’s success.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">Domestic & International Expertise</h3>
                            <p className="text-gray-600">Whether you aim to study in India or abroad, we provide localized and global support.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">Student-Centered Approach</h3>
                            <p className="text-gray-600">We focus on individual strengths and interests to design realistic academic plans.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">End-to-End Support</h3>
                            <p className="text-gray-600">From course selection to admission paperwork, we’re there at every step.</p>
                        </div>
                    </div>
                </div>
            </section >


            {/* Other Sections */}
            < CareerSupportSection />
            <CourseExplorer />
            <TeamSection />
            <LogoSliderWithPopup title="Built with Campus Collaboration" />
            <EnquiryForm />
            <Footer />
        </div >
    );
};

export default Home;
