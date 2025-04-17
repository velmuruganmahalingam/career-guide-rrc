const upcomingEvents = [
    {
        title: "Career Clarity Bootcamp",
        description: "A hands-on session to help you understand the right path for your future.",
        date: "April 28, 2025",
        time: "10:00 AM - 1:00 PM",
        location: "RRC Campus Hall",
        link: "#",
    },
    {
        title: "Study Abroad 101",
        description: "Explore scholarship routes, top universities, and application hacks.",
        date: "May 5, 2025",
        time: "2:00 PM - 4:00 PM",
        location: "Online (Zoom)",
        link: "#",
    },
    {
        title: "Meet the Mentors",
        description: "Interact with top professionals from various industries.",
        date: "May 12, 2025",
        time: "11:00 AM - 1:00 PM",
        location: "Auditorium A",
        link: "#",
    },
    {
        title: "University Fair 2025",
        description: "Connect with reps from top universities across the country.",
        date: "May 20, 2025",
        time: "9:00 AM - 3:00 PM",
        location: "Campus Grounds",
        link: "#",
    },
];

export default function UpcomingEventsSection() {
    const half = Math.ceil(upcomingEvents.length / 2);
    const leftEvents = upcomingEvents.slice(0, half);
    const rightEvents = upcomingEvents.slice(half);

    return (
        <section className="py-7 bg-white-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl text-gray-700 font-bold mb-7 text-center">
                    Upcoming Events
                </h2>
                <p className="text-center max-w-xl mx-auto text-gray-600 mb-10">
                    Stay tuned for exciting sessions designed to guide and inspire your next big move.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* LEFT COLUMN */}
                    <div className="space-y-10 border-l-2 border-blue-400 pl-6 relative">
                        {leftEvents.map((event, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute -left-[2.01em] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                                <div className="text-sm text-gray-500">
                                    {event.date} · {event.time}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700 mt-1 group-hover:text-blue-600 transition">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                                <div className="text-sm text-gray-700 mt-2">
                                    <span className="font-medium">{event.location}</span>
                                </div>
                                <a
                                    href={event.link}
                                    className="inline-block mt-3 text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    Register Now →
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-10 border-l-2 border-blue-400 pl-6 relative">
                        {rightEvents.map((event, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute -left-[2.01em] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                                <div className="text-sm text-gray-500">
                                    {event.date} · {event.time}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700 mt-1 group-hover:text-blue-600 transition">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                                <div className="text-sm text-gray-700 mt-2">
                                    <span className="font-medium">{event.location}</span>
                                </div>
                                <a
                                    href={event.link}
                                    className="inline-block mt-3 text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    Register Now →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
