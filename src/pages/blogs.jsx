import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FeaturedBlogPost from "../components/FeaturedBlogPost";
import LatestArticles from "../components/LatestArticles";
// import PopularPostsSection from "../components/PopularPostsSection";
import { FaBriefcase, FaGraduationCap, FaFileAlt, FaChartLine, FaStar, FaHammer, FaEye, FaRegClock, FaSearch, FaArrowLeft } from 'react-icons/fa';
import { } from "react-icons/fa";
import { Link } from "react-router-dom";
import ev1 from "../assets/e1.jpg";
import ev2 from "../assets/e2.jpeg";
import ev3 from "../assets/ev3.jpeg";
import ev4 from "../assets/ev4.jpeg";
const allPosts = [
    {
        title: "Effective Study Strategies",
        description: "Learn how to optimize your study time and improve retention.",
        image: ev1,
        link: "/blog/effective-study-strategies",
        category: "Career Advice",
        readTime: "5 min read",
        views: "1.2k",
        date: "April 12, 2025"
    },
    {
        title: "Choosing the Right Course",
        description: "How to decide which course suits your skills and interests.",
        image: ev2,
        link: "/blog/choosing-right-course",
        category: "Higher Education",
        readTime: "4 min read",
        views: "950",
        date: "April 10, 2025"
    },
    {
        title: "Top Study Tools for Students",
        description: "Explore the best study tools and apps to help you stay organized.",
        image: ev3,
        link: "/blog/top-study-tools",
        category: "Skill Building",
        readTime: "7 min read",
        views: "1.5k",
        date: "April 8, 2025"
    },
    {
        title: "Mastering Time Management for Study",
        description: "Tips and techniques for managing your study schedule effectively.",
        image: ev4,
        link: "/blog/time-management-study",
        category: "Success Stories",
        readTime: "6 min read",
        views: "1.8k",
        date: "April 5, 2025"
    },
    // Add more blog posts here
];
const categories = [
    {
        title: "Career Advice",
        desc: "Tips and strategies to help you find and grow your career.",
        icon: <FaBriefcase className="w-6 h-6 text-blue-600" />,
    },
    {
        title: "Higher Education",
        desc: "Explore colleges, courses, and paths to academic success.",
        icon: <FaGraduationCap className="w-6 h-6 text-green-600" />,
    },
    {
        title: "Internships",
        desc: "Learn how to land meaningful internships and gain experience.",
        icon: <FaFileAlt className="w-6 h-6 text-yellow-600" />,
    },
    {
        title: "Industry Trends",
        desc: "Stay updated on how industries are evolving around the world.",
        icon: <FaChartLine className="w-6 h-6 text-purple-600" />,
    },
    {
        title: "Success Stories",
        desc: "Real stories of students who made bold and smart choices.",
        icon: <FaStar className="w-6 h-6 text-pink-600" />,
    },
    {
        title: "Skill Building",
        desc: "Practical guides on developing your soft and hard skills.",
        icon: <FaHammer className="w-6 h-6 text-indigo-600" />,
    },
];
export default function Blog() {
    const ecategories = [
        {
            title: "Career Advice",
            desc: "Tips and strategies to help you find and grow your career.",
            icon: <FaBriefcase className="w-6 h-6 text-blue-600" />,
        },
        {
            title: "Higher Education",
            desc: "Explore colleges, courses, and paths to academic success.",
            icon: <FaGraduationCap className="w-6 h-6 text-green-600" />,
        },
        {
            title: "Internships",
            desc: "Learn how to land meaningful internships and gain experience.",
            icon: <FaFileAlt className="w-6 h-6 text-yellow-600" />,
        },
        {
            title: "Industry Trends",
            desc: "Stay updated on how industries are evolving around the world.",
            icon: <FaChartLine className="w-6 h-6 text-purple-600" />,
        },
        {
            title: "Success Stories",
            desc: "Real stories of students who made bold and smart choices.",
            icon: <FaStar className="w-6 h-6 text-pink-600" />,
        },
        {
            title: "Skill Building",
            desc: "Practical guides on developing your soft and hard skills.",
            icon: <FaHammer className="w-6 h-6 text-indigo-600" />,
        },
    ];
    const [posts, setPosts] = useState(allPosts);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    // Extract categories from your existing categories array or from posts
    const categories = ["All", "Career Advice", "Higher Education", "Internships", "Industry Trends", "Success Stories", "Skill Building"];

    // Filter posts based on search term and category
    useEffect(() => {
        let filtered = allPosts;

        // Filter by category
        if (activeCategory !== "All") {
            filtered = filtered.filter(post => post.category === activeCategory);
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setPosts(filtered);
    }, [searchTerm, activeCategory]);

    return (
        <div className="relative">
            <Navbar />
            <FeaturedBlogPost />
            <LatestArticles />
            <section className="py-10 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4 text-center">
                        Explore by Category
                    </h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                        Dive into tailored insights across different areas — whether you're exploring your career path, preparing for higher studies, or looking for inspiration.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {ecategories.map((cat, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    {cat.icon}
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {cat.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="bg-white-50 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* <div className="flex items-center mb-6">
                        <Link to="/blog" className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                            <FaArrowLeft className="mr-2" /> Back to Blog
                        </Link>
                    </div> */}

                    <h2 className="text-4xl text-center font-bold text-gray-800 mb-2">All Articles</h2>
                    <p className="text-gray-600 text-center mb-4">Browse our complete collection of articles and resources</p>

                    {/* Search & Filter Bar */}
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row md:items-center gap-4">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${activeCategory === category
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                        }`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-3">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                            {post.category}
                                        </span>
                                        <span className="ml-auto text-sm text-gray-500">
                                            {post.date}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        <a href={post.link} className="hover:text-blue-600">
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <FaRegClock className="mr-1" />
                                            <span>{post.readTime}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaEye className="mr-1" />
                                            <span>{post.views}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show "No posts found" message if filtered list is empty */}
                    {posts.length === 0 && (
                        <div className="text-center py-12">
                            <h3 className="text-lg font-medium text-gray-900">No posts found</h3>
                            <p className="text-gray-600 mt-2">Try changing your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}