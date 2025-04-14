import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

const CourseExplorer = () => {
    const [activeTab, setActiveTab] = useState('HSC');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const educationLevels = [
        { id: 'SSLC', label: 'SSLC' },
        { id: 'HSC', label: 'HSC' },
        { id: 'Bachelors', label: 'Bachelor\'s' },
    ];

    const courseCategories = [
        {
            id: 'arts-science',
            title: 'Arts & Science',
            description: 'Explore a range of arts and science disciplines.',
            icon: (
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-blue-500">
                    <path
                        fill="currentColor"
                        fillOpacity="0.2"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                    />
                    <circle cx="10" cy="9" r="1.5" fill="currentColor" />
                    <circle cx="14" cy="7" r="1" fill="currentColor" />
                    <circle cx="16" cy="11" r="1.25" fill="currentColor" />
                    <circle cx="13" cy="13" r="1.5" fill="currentColor" />
                    <circle cx="8" cy="12" r="1" fill="currentColor" />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        d="M6 16c2-1.5 6-2 8-0.5 2 1.5 5 1 6 0"
                    />
                </svg>
            ),
            courses: [
                { name: 'BSc Computer Science', level: 'Bachelors' },
                { name: 'BCA', level: 'Bachelors' },
                { name: 'BA English', level: 'Bachelors' },
                { name: 'Physics', level: 'HSC' },
                { name: 'Chemistry', level: 'HSC' },
                { name: 'Biology', level: 'HSC' },
                { name: 'Mathematics', level: 'SSLC' },
                { name: 'Science', level: 'SSLC' },
            ]
        },
        {
            id: 'engineering',
            title: 'Engineering',
            description: 'Discover various engineering fields.',
            icon: (
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-green-500">
                    <path
                        fill="currentColor"
                        fillOpacity="0.2"
                        d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
                    />
                </svg>
            ),
            courses: [
                { name: 'BE Computer Science', level: 'Bachelors' },
                { name: 'BE Electronics and Communication', level: 'Bachelors' },
                { name: 'BE Mechanical Engineering', level: 'Bachelors' },
                { name: 'BE Civil Engineering', level: 'Bachelors' },
                { name: 'PCM (Physics, Chemistry, Math)', level: 'HSC' },
                { name: 'Computer Science', level: 'HSC' },
                { name: 'Basic Electronics', level: 'SSLC' },
            ]
        },
        {
            id: 'medical',
            title: 'Medical',
            description: 'Browse medical courses and pathways.',
            icon: (
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-red-500">
                    <path
                        fill="currentColor"
                        fillOpacity="0.2"
                        d="M19 3h-4V1h-6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 3h-4V1h-6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12M18 12H6"
                    />
                </svg>
            ),
            courses: [
                { name: 'MBBS', level: 'Bachelors' },
                { name: 'BDS', level: 'Bachelors' },
                { name: 'B.Pharm', level: 'Bachelors' },
                { name: 'PCB (Physics, Chemistry, Biology)', level: 'HSC' },
                { name: 'Health Science', level: 'HSC' },
                { name: 'Basic Biology', level: 'SSLC' },
                { name: 'Health Education', level: 'SSLC' },
            ]
        },
        {
            id: 'management',
            title: 'Management',
            description: 'Learn about management and business.',
            icon: (
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-purple-500">
                    <path
                        fill="currentColor"
                        fillOpacity="0.2"
                        d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4z"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 12v5M9 15h6"
                    />
                </svg>
            ),
            courses: [
                { name: 'BBA', level: 'Bachelors' },
                { name: 'B.Com', level: 'Bachelors' },
                { name: 'Hotel Management', level: 'Bachelors' },
                { name: 'Business Studies', level: 'HSC' },
                { name: 'Accountancy', level: 'HSC' },
                { name: 'Economics', level: 'HSC' },
                { name: 'Commerce', level: 'SSLC' },
                { name: 'Business Basics', level: 'SSLC' },
            ]
        }
    ];

    const handleViewCourses = (category) => {
        setSelectedCategory(category);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    // Filter courses based on selected tab/education level
    const getFilteredCourses = (category) => {
        return category.courses.filter(course => course.level === activeTab);
    };

    // Get count of courses for each category based on active tab
    const getCourseCount = (category) => {
        return category.courses.filter(course => course.level === activeTab).length;
    };

    return (
        <section className="py-11 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4">Explore Our Courses</h2>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex rounded-full bg-white shadow-md p-1">
                        {educationLevels.map((level) => (
                            <button
                                key={level.id}
                                className={`px-8 py-3 rounded-full text-lg transition-all duration-200 ${activeTab === level.id
                                    ? 'bg-blue-600 text-white font-medium'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                onClick={() => setActiveTab(level.id)}
                            >
                                {level.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Categories Grid - Now with 4 columns for smaller cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {courseCategories.map((category) => (
                        <motion.div
                            key={category.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-gray-800">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mt-3 mb-1">{category.title}</h3>
                            <p className="text-gray-600 text-sm mb-3 flex-grow">{category.description}</p>
                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-sm font-medium">
                                    {getCourseCount(category)} courses
                                </span>
                                <button
                                    onClick={() => handleViewCourses(category)}
                                    className="text-blue-600 text-sm font-medium inline-flex items-center group"
                                >
                                    View
                                    <FaArrowRight className="ml-1 text-xs group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Popup for Courses */}
                {showPopup && selectedCategory && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <motion.div
                            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div className="flex justify-between items-center border-b p-5">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {selectedCategory.title} Courses - {activeTab}
                                </h3>
                                <button
                                    onClick={closePopup}
                                    className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                            <div className="p-5 overflow-y-auto max-h-[60vh]">
                                {getFilteredCourses(selectedCategory).length > 0 ? (
                                    <ul className="space-y-3">
                                        {getFilteredCourses(selectedCategory).map((course, index) => (
                                            <li key={index} className="p-3 border border-gray-100 rounded-md hover:bg-blue-50 hover:border-blue-200 transition-colors">
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium">{course.name}</span>
                                                    <button className="text-blue-600 text-sm hover:underline">Details</button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="text-center py-8 text-gray-500">
                                        <p>No courses available for this category at {activeTab} level.</p>
                                    </div>
                                )}
                            </div>
                            <div className="bg-gray-50 p-4 border-t text-center">
                                <button
                                    onClick={closePopup}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CourseExplorer;