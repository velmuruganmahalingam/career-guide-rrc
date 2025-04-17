import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import ev1 from "../assets/e1.jpg"
import ev2 from "../assets/e2.jpeg"
import ev3 from "../assets/ev3.jpeg"
import ev4 from "../assets/ev4.jpeg"
import ev5 from "../assets/ev5.jpeg"

const pastEvents = [
    {
        title: "Future Ready 2024",
        recap: "“The workshop gave me so much clarity about career paths I never knew existed!” – Anjali",
        image: ev1,
        link: "#",
    },
    {
        title: "International Study Fair",
        recap: "Over 200 students got on-the-spot profile evaluations and met 15+ university reps.",
        image: ev2,
        link: "#",
    },
    {
        title: "Tech & Career Trends 2023",
        recap: "Panel discussions with industry experts on AI, Data, and the future of work.",
        image: ev3,
        link: "#",
    },
    {
        title: "Guidance Kickstart Bootcamp",
        recap: "Helped 100+ students choose their stream with confidence.",
        image: ev4,
        link: "#",
    },
    {
        title: "Career Transition Webinar",
        recap: "How to pivot your career in the evolving job market.",
        image: ev5,
        link: "#",
    },
    {
        title: "Networking Skills Bootcamp",
        recap: "Build meaningful professional relationships.",
        image: ev1,
        link: "#",
    },
];

export default function PastEventsSection() {
    const [showAll, setShowAll] = useState(false);
    const [sectionInView, setSectionInView] = useState(false);
    const scrollRef = useRef(null);
    const sectionRef = useRef(null);

    const handleSeeMore = () => {
        setShowAll(true);
        setTimeout(() => {
            scrollRef.current?.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 100);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setSectionInView(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-10 bg-gray-100 relative">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4 text-center">
                    Past Events
                </h2>

                <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
                    From interactive workshops to insightful webinars, our past events have empowered countless students to take the next step in their academic and career journeys. Take a look at the moments that made an impact.
                </p>
                <div className="relative group">
                    <div
                        ref={scrollRef}
                        className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pr-2 transition-all duration-300 
                        ${showAll ? "max-h-[700px] overflow-y-auto scrollbar-hide" : "max-h-[550px] overflow-hidden"}
                        `}
                    >
                        {pastEvents.map((event, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 mt-2">{event.recap}</p>
                                    <a
                                        href={event.link}
                                        className="mt-3 text-blue-600 font-semibold hover:underline inline-block"
                                    >
                                        View Details →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Floating Button (inside section only when focused) */}
                    {!showAll && sectionInView && (
                        <div className="absolute bottom-4 right-4 z-10">
                            <button
                                onClick={handleSeeMore}
                                className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
                            >
                                <FiChevronDown />
                                <span>See More</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
