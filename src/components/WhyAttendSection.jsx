import { FiTarget, FiUsers, FiGlobe, FiBookOpen, FiHelpCircle, FiTrendingUp } from "react-icons/fi";

const reasons = [
    {
        icon: <FiTarget size={24} />,
        title: "Clarity & Focus",
        description: "Discover your ideal academic and career path with expert guidance.",
    },
    {
        icon: <FiUsers size={24} />,
        title: "Mentor Access",
        description: "Engage with experienced mentors and guest speakers across domains.",
    },
    {
        icon: <FiGlobe size={24} />,
        title: "Global Outlook",
        description: "Explore international opportunities and scholarships.",
    },
    {
        icon: <FiBookOpen size={24} />,
        title: "Resource Access",
        description: "Get exclusive content, tools, and planning guides for your journey.",
    },
    {
        icon: <FiHelpCircle size={24} />,
        title: "Live Q&A",
        description: "Ask real questions, get real answers — in a no-judgement space.",
    },
    {
        icon: <FiTrendingUp size={24} />,
        title: "Proven Impact",
        description: "92% of past attendees felt more confident about their future.",
    },
];

export default function WhyAttendSection() {
    return (
        <section className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl text-gray-700 font-bold mb-4 text-center">Why Attend?</h2>
                    <p className="text-gray-600  mt-2">
                        Not just another session — it's your next big step!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-start gap-4"
                        >
                            <div className="bg-gradient-to-br from-blue-200 to-blue-400 text-blue-900 p-3 rounded-full">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-semibold text-gray-700">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
