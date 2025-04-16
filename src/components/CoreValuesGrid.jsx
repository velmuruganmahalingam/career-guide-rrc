import React from "react";
import { FaGraduationCap, FaUserCheck, FaGlobe, FaHandsHelping, FaLightbulb, FaBalanceScale, FaRocket } from "react-icons/fa";

const values = [
    {
        title: "Academic Excellence",
        icon: <FaGraduationCap className="text-blue-600 text-5xl" />,
        description: "Commitment to the highest educational standards.",
        image: "path_to_your_image1.jpg" // Add your image paths here
    },
    {
        title: "Personalized Guidance",
        icon: <FaUserCheck className="text-blue-600 text-5xl" />,
        description: "Tailored approach to each student's needs.",
        image: "path_to_your_image2.jpg"
    },
    {
        title: "Accessibility",
        icon: <FaHandsHelping className="text-blue-600 text-5xl" />,
        description: "Free services for all students regardless of background."
    },
    {
        title: "Integrity",
        icon: <FaBalanceScale className="text-blue-600 text-5xl" />,
        description: "Honest, transparent guidance with the student’s best interests in mind."
    },
    {
        title: "Innovation",
        icon: <FaLightbulb className="text-blue-600 text-5xl" />,
        description: "Modern approaches to educational planning."
    },
    {
        title: "Global Perspective",
        icon: <FaGlobe className="text-blue-600 text-5xl" />,
        description: "Understanding of both domestic and international opportunities."
    },
    {
        title: "Community Engagement",
        icon: <FaHandsHelping className="text-blue-600 text-5xl" />,
        description: "Building connections with local organizations to enhance student support."
    },
    {
        title: "Lifelong Learning",
        icon: <FaGraduationCap className="text-blue-600 text-5xl" />,
        description: "Encouraging a mindset of continuous growth and development."
    },
    {
        title: "Empowerment",
        icon: <FaRocket className="text-blue-600 text-5xl" />, // You can choose a different icon if preferred
        description: "Fostering self-confidence and decision-making skills in students."
    }
    // Add remaining values similarly...
];

const CoreValuesGridWithImages = () => {
    return (
        <section className="py-16 bg-white-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    These principles guide our approach to mentorship and educational planning.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-lg ${index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-300'} transition-transform duration-300 transform hover:scale-105`}
                        >
                            <div className="flex items-center justify-center mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValuesGridWithImages;
