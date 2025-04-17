import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const successStories = [
    {
        name: "John Doe",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",  // Male placeholder avatar
        quote: "This career guidance completely changed my life. I found my ideal course and university!",
        description: "John was struggling to pick between courses. After a few consultations, he found his perfect match and got into the university of his choice.",
        outcome: "University of XYZ, Computer Science",
    },
    {
        name: "Jane Smith",
        photo: "https://randomuser.me/api/portraits/women/32.jpg",  // Female placeholder avatar
        quote: "I went from confusion to clarity. Now, I'm pursuing my dream career thanks to the guidance I received.",
        description: "Jane wasn’t sure which career path to pursue. After expert consultations, she decided to go for engineering and got into her top choice university.",
        outcome: "University of ABC, Mechanical Engineering",
    },
    // Add more stories...
];

const SuccessStoriesCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <section className="py-10 bg-white-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-700 mb-6">Success Stories</h2>
                <p className="text-sm text-gray-600">
                    Real experiences from students who found career clarity and achieved their dreams.
                </p>

                <Slider {...settings}>
                    {successStories.map((story, index) => (
                        <div key={index} className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="relative mb-6">
                                <img
                                    src={story.photo}
                                    alt={story.name}
                                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-600"
                                />
                                <div className="absolute inset-0 bg-[rgb(191_219_254_/_var(--tw-bg-opacity,_1))] opacity-20 z-0"></div>
                            </div>

                            <div className="relative z-10 text-center">
                                <div className="mb-4">
                                    <FaQuoteLeft className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-indigo-300" />
                                    <p className="text-lg italic text-gray-700">{story.quote}</p>
                                    <FaQuoteRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-indigo-300" />
                                </div>

                                <p className="text-sm text-gray-600 mb-4">{story.description}</p>
                                <h4 className="text-xl font-semibold text-gray-700">{story.outcome}</h4>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default SuccessStoriesCarousel;
