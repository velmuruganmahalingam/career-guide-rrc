import React from "react";
import ev4 from "../assets/ev4.jpeg"

const featuredPost = {
    title: "How to Choose the Right Career Path",
    description:
        "Feeling lost about what to do next? This guide will help you align your interests, strengths, and opportunities to make smarter career decisions.",
    image: ev4,
    link: "/blog/how-to-choose-career",
};

export default function FeaturedBlogPost() {
    return (
        <section className="bg-white py-16 mt-16">
            <div className="max-w-7xl mx-auto px-4 md:flex md:items-center md:space-x-10">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="rounded-xl shadow-lg w-full h-72 object-cover"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-700 mb-4">
                        {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        {featuredPost.description}
                    </p>
                    <a
                        href={featuredPost.link}
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                    >
                        Read More →
                    </a>
                </div>
            </div>
        </section>
    );
}
