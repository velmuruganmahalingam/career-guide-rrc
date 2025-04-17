import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { FaEye, FaRegClock, FaTag } from "react-icons/fa";
import ev1 from "../assets/e1.jpg";
import ev2 from "../assets/e2.jpeg";
import ev3 from "../assets/ev3.jpeg";
import ev4 from "../assets/ev4.jpeg";

const popularPosts = [
    {
        title: "Effective Study Strategies",
        description: "Learn how to optimize your study time and improve retention.",
        image: ev1,
        link: "/blog/effective-study-strategies",
        category: "Study Tips",
        readTime: "5 min read",
        views: "1.2k"
    },
    {
        title: "Choosing the Right Course",
        description: "How to decide which course suits your skills and interests.",
        image: ev2,
        link: "/blog/choosing-right-course",
        category: "Career Planning",
        readTime: "4 min read",
        views: "950"
    },
    {
        title: "Top Study Tools for Students",
        description: "Explore the best study tools and apps to help you stay organized.",
        image: ev3,
        link: "/blog/top-study-tools",
        category: "Resources",
        readTime: "7 min read",
        views: "1.5k"
    },
    {
        title: "Mastering Time Management for Study",
        description: "Tips and techniques for managing your study schedule effectively.",
        image: ev4,
        link: "/blog/time-management-study",
        category: "Productivity",
        readTime: "6 min read",
        views: "1.8k"
    },
];

export default function PopularPostsSection() {
    // Featured post is the first one
    const featuredPost = popularPosts[0];
    const otherPosts = popularPosts.slice(1);

    return (
        <section className="py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-700 text-center">
                        Popular Posts
                    </h2>
                    <Link to="/all-posts" className="text-blue-600 hover:text-blue-700 font-medium">
                        View all
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Featured Post */}
                    <div className="lg:col-span-6 bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="md:w-1/2 h-64 md:h-auto">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-6 flex flex-col justify-center">
                                <div className="flex items-center mb-3">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                        {featuredPost.category}
                                    </span>
                                    <span className="ml-auto flex items-center text-sm text-gray-500">
                                        <FaEye className="mr-1" /> {featuredPost.views}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-700 mb-2">
                                    <Link to={featuredPost.link} className="hover:text-blue-600">
                                        {featuredPost.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    {featuredPost.description}
                                </p>
                                <div className="flex items-center text-sm text-gray-500 mt-auto">
                                    <FaRegClock className="mr-1" />
                                    <span>{featuredPost.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trending Posts List */}
                    <div className="lg:col-span-6">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center">
                                <span className="w-2 h-6 bg-blue-600 rounded-full mr-2"></span>
                                Trending Now
                            </h3>
                            <div className="divide-y divide-gray-100">
                                {otherPosts.map((post, index) => (
                                    <div key={index} className="py-4 first:pt-0 last:pb-0">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="flex items-center text-xs text-gray-500 mb-1">
                                                    <FaTag className="mr-1" />
                                                    <span>{post.category}</span>
                                                    <span className="mx-2">•</span>
                                                    <span>{post.readTime}</span>
                                                </div>
                                                <h4 className="text-base font-medium text-gray-700 hover:text-blue-600">
                                                    <Link to={post.link}>{post.title}</Link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}