import React from "react";
import { timelineData } from "../constants/StoryTimeline";
import { FaCalendarAlt, FaUsers, FaChartLine, FaRocket, FaEye } from "react-icons/fa";

// Import your specific images
import img1 from "../assets/story1.jpg"; // Early years
import img2 from "../assets/story2.jpg"; // Growth 
import img3 from "../assets/story3.jpg"; // Current status

const OurStorySection = () => {
    // Map icons to use based on index
    const getIcon = (index) => {
        const icons = [FaCalendarAlt, FaUsers, FaChartLine, FaRocket, FaEye];
        const IconComponent = icons[index % icons.length];
        return <IconComponent className="text-blue-600 text-2xl" />;
    };

    // Get appropriate image based on index
    const getImage = (index) => {
        const images = [img1, img2, img3];
        return images[index % images.length];
    };

    return (
        <section className="relative pt-5 pb-1 overflow-hidden bg-white-50">
            {/* Background images */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0"></div>

                {/* Background image pattern using your imported images */}
                <div className="absolute inset-0 opacity-10">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className="absolute opacity-30 transition-opacity duration-500"
                            style={{
                                top: `${20 + (index * 30)}%`,
                                left: index % 2 === 0 ? '10%' : '70%',
                                width: '400px',
                                height: '300px',
                                backgroundImage: `url(${getImage(index)})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transform: `rotate(${index % 2 === 0 ? -5 : 5}deg) scale(${0.8 + index * 0.1})`,
                                filter: 'blur(2px)',
                                zIndex: 1
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl text-gray-700 font-bold mb-4">
                        Our Story & Evolution
                    </h2>
                    <p className="text-sm text-gray-600">
                        From humble beginnings to becoming a leader in career guidance, here's how we've evolved and made an impact.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100"></div>

                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`mb-16 md:mb-24 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
                        >
                            <div
                                className="relative flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-[7.5rem] md:ml-0 z-10">
                                    <div className="bg-white p-3 rounded-full shadow-md">
                                        {getIcon(index)}
                                    </div>
                                </div>

                                {/* Year badge - Added z-index: 20 to ensure it stays on top */}
                                <div className="absolute -top-5 left-8 bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md z-20">
                                    {item.year}
                                </div>

                                {/* Image Section - Order changes based on index */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                                    <div className="h-64 md:h-full relative overflow-hidden rounded-t-xl md:rounded-tr-none md:rounded-l-xl">
                                        <div className="absolute inset-0 bg-blue-900 bg-opacity-20 z-10"></div>
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
                                            style={{
                                                backgroundImage: `url(${getImage(index)})`,
                                            }}
                                        ></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                                            <div className="inline-flex items-center bg-blue-600 bg-opacity-90 px-4 py-2 rounded-full mb-2">
                                                {getIcon(index)}
                                                <span className="ml-2 font-medium">{item.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className={`w-full md:w-1/2 p-8 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                                    <h3 className="text-2xl font-bold text-gray-700 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

                                    {/* Key achievements */}
                                    {item.achievements && (
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Achievements:</h4>
                                            <ul className="space-y-2">
                                                {item.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-blue-600 mr-2">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <button className="group relative inline-flex items-center overflow-hidden rounded-full bg-blue-600 px-8 py-3 text-white transition-all duration-300 hover:bg-blue-700 focus:outline-none">
                                        <span className="absolute right-0 -translate-x-full translate-y-0 rotate-45 transform opacity-30 transition-all duration-300 group-hover:translate-x-14 group-hover:translate-y-0"></span>
                                        <span className="absolute left-0 -translate-x-14 opacity-30 transition-all duration-300 group-hover:translate-x-full"></span>
                                        <span className="relative">Learn More</span>
                                        <svg className="ml-2 h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurStorySection;