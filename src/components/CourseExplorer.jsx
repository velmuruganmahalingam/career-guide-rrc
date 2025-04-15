import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { fetchCourseCategories } from '../api/courseExplorerApi';
import { fetchCategories } from '../api/categoryExplorerApi';
import { fetchEducationCategories } from '../api/educationExplorerApi';
import subjectIcons from '../constants/courseIcons';

const CourseExplorer = () => {

    const [activeTab, setActiveTab] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [categories, setCategories] = useState([]);
    const [educationCategories, setEducationCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const hasFetchedRef = useRef(false);

    const [educationLevels, setEducationLevels] = useState([]);


    useEffect(() => {
        if (hasFetchedRef.current) return;
        const fetchData = async () => {
            try {
                const levelsResponse = await fetchEducationCategories();
                const levels = Array.isArray(levelsResponse?.data?.data)
                    ? levelsResponse.data.data
                    : [];
                setEducationLevels(levels);

                if (levels.length > 0) {
                    setActiveTab(levels[0].id);
                }

                const courseResponse = await fetchCourseCategories();
                const courses = Array.isArray(courseResponse?.data?.data)
                    ? courseResponse.data.data
                    : [];

                const categoryResponse = await fetchCategories();
                const categories = Array.isArray(categoryResponse?.data?.data)
                    ? categoryResponse.data.data
                    : [];

                const categoriesWithCourses = categories
                    .filter(category => category && category.title)
                    .map(category => ({
                        ...category,
                        courses: courses.filter(course => course.category._id === category._id)
                    }));


                setCategories(categoriesWithCourses);

                const educationResponse = await fetchEducationCategories();
                const eduCategories = Array.isArray(educationResponse?.data?.data)
                    ? educationResponse.data.data.filter(category => category && category.title)
                    : [];
                setEducationCategories(eduCategories);
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
        hasFetchedRef.current = true;
    }, []);

    const handleViewCourses = (category) => {
        setSelectedCategory(category);
        setShowPopup(true);
    };

    const closePopup = () => setShowPopup(false);

    const getFilteredCourses = (category) => {
        if (!category || !Array.isArray(category.courses)) {
            return [];
        }
        return category.courses.filter(course => {
            return course.level && course.level.id &&
                course.level.id.toLowerCase() === activeTab.toLowerCase();
        });
    };

    const getCourseCount = (category) => {
        if (!category || !Array.isArray(category.courses)) {
            return 0;
        }
        const count = category.courses.filter(course => {
            return course.level && course.level.id &&
                course.level.id.toLowerCase() === activeTab.toLowerCase();
        }).length;

        return count;
    };

    const renderIcon = (IconComponent, iconColor = 'blue') => {
        return IconComponent ? (
            <IconComponent className={`text-3xl text-${iconColor}-500`} />
        ) : (
            <subjectIcons.default.icon className={`text-3xl text-${iconColor}-500`} />
        );
    };

    const getCategoryIcon = (category) => {
        if (!category || !category.title) {
            return renderIcon(subjectIcons.default.icon, subjectIcons.default.color);
        }

        const iconConfig = subjectIcons[category.title] || subjectIcons.default;
        return renderIcon(iconConfig.icon, iconConfig.color);
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

                <div className="flex justify-center mb-12">
                    <div className="inline-flex rounded-full bg-white shadow-md p-1">
                        {console.log('1', educationLevels)}
                        {educationLevels.map((level) => (
                            <button
                                key={level._id}
                                className={`px-8 py-3 rounded-full text-lg transition-all duration-200 ${activeTab === level.id  // Changed from level._id to level.id
                                    ? 'bg-blue-600 text-white font-medium'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                onClick={() => setActiveTab(level.id)}  // Changed from level._id to level.id
                            >
                                {level.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {isLoading ? (
                        <div className="col-span-full text-center py-8 text-gray-500">Loading categories...</div>
                    ) : categories.length > 0 ? (
                        categories
                            .filter(category => getCourseCount(category) > 0)
                            .map((category) => (
                                <motion.div
                                    key={category._id || category.id}
                                    className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow flex flex-col"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-gray-800">
                                        {getCategoryIcon(category)}
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
                            ))
                    ) : (
                        <div className="col-span-full text-center py-8 text-gray-500">No categories available.</div>
                    )}
                </div>

                {educationCategories.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                        {isLoading ? (
                            <div className="col-span-full text-center py-8 text-gray-500">Loading education categories...</div>
                        ) : (
                            educationCategories
                                .filter(category => getCourseCount(category) > 0)
                                .map((category) => (
                                    <motion.div
                                        key={category.id}
                                        className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow flex flex-col"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="text-gray-800">
                                            {getCategoryIcon(category)}
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
                                ))
                        )}
                    </div>
                )}
            </div>

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
                                {selectedCategory.title} Courses - {activeTab.toUpperCase()}
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
                                        <li key={course._id || index} className="p-3 border border-gray-100 rounded-md hover:bg-blue-50 hover:border-blue-200 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">{course.name}</span>
                                                <button className="text-blue-600 text-sm hover:underline">Details</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>No courses available for this category at {activeTab.toUpperCase()} level.</p>
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
        </section>
    );
};

export default CourseExplorer;