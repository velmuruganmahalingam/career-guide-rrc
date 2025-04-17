import React from "react";
import { FaBrain, FaSearch, FaChartBar, FaCompass, FaBook, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion for animations

const steps = [
    {
        title: "Discover Who You Are",
        icon: <FaBrain />,
        desc: "We begin with real conversations, not forms. We listen to your story, your strengths, and what lights you up inside.",
    },
    {
        title: "Explore the Possibilities",
        icon: <FaSearch />,
        desc: "From majors to niche careers, we open doors. No pressure, just possibilities tailored to your personality and purpose.",
    },
    {
        title: "Understand Your Options",
        icon: <FaChartBar />,
        desc: "You'll learn what fits and why. Schools, courses, opportunities — broken down in plain language. No jargon. No guesswork.",
    },
    {
        title: "Chart Your Course",
        icon: <FaCompass />,
        desc: "With your goals defined, we create a roadmap — customized, realistic, and aligned with everything that makes you, you.",
    },
    {
        title: "Prepare With Purpose",
        icon: <FaBook />,
        desc: "From exams to applications, we guide your every move. You'll be prepped, polished, and ready to go.",
    },
    {
        title: "Walk Together",
        icon: <FaHandshake />,
        desc: "Your journey doesn't end when you hit submit. We stick with you — mentorship, check-ins, support. Always.",
    },
];

const MethodologyTimeline = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl text-gray-700 font-bold mb-4">
                        Our Approach to Career Guidance
                    </h2>
                    <p className="text-sm text-gray-600">
                        A step-by-step process designed for clarity and direction.
                    </p>
                </div>

                <div className="relative">
                    {/* Center timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

                    <div className="space-y-10">
                        {steps.map((step, idx) => {
                            const isLeft = idx % 2 === 0;
                            return (
                                <div
                                    key={idx}
                                    className={`relative flex items-center w-full ${isLeft ? "justify-start" : "justify-end"
                                        }`}
                                >
                                    {/* Card with motion animation */}
                                    <motion.div
                                        className={`w-full sm:w-[48%] px-4 py-4 rounded-xl bg-white shadow-sm border border-gray-200 ${isLeft ? "mr-auto text-left" : "ml-auto text-left"
                                            }`}
                                        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <div className="flex items-center mb-2">
                                            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg mr-3">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-md font-semibold text-gray-700">{step.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600">{step.desc}</p>
                                    </motion.div>

                                    {/* Dot on center line */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white z-10"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MethodologyTimeline;
