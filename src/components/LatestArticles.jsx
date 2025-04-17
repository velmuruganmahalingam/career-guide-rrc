import React from "react";
import ev1 from "../assets/e1.jpg"
import ev2 from "../assets/e2.jpeg"
import ev3 from "../assets/ev3.jpeg"
import ev4 from "../assets/ev4.jpeg"
import ev5 from "../assets/ev5.jpeg"
const articles = [
    {
        title: "5 Steps to Ace Any University Interview",
        summary: "From body language to answering tough questions — here’s how to leave a lasting impression.",
        date: "April 12, 2025",
        image: ev1,
        link: "/blog/ace-university-interview",
    },
    {
        title: "Scholarship Hunting: Tips That Actually Work",
        summary: "Cut through the noise. Discover legit scholarships and how to actually get them.",
        date: "April 5, 2025",
        image: ev2,
        link: "/blog/scholarship-hunting-tips",
    },
    {
        title: "From Confusion to Clarity: A Student’s Journey",
        summary: "Real story of how a student navigated chaos and landed on a fulfilling career track.",
        date: "March 27, 2025",
        image: ev3,
        link: "/blog/student-clarity-journey",
    },
];

export default function LatestArticles() {
    return (
        <section className="py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-700 text-center mb-4">
                    Latest Articles
                </h2>
                <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
                    Articles that speak your language — no jargon, just clarity and direction.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <a
                            key={idx}
                            href={article.link}
                            className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <p className="text-sm text-gray-500">{article.date}</p>
                                <h3 className="text-lg font-semibold text-gray-700 mt-1 mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{article.summary}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
