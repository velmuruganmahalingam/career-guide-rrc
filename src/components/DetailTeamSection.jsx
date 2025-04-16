import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaAward, FaChalkboardTeacher, FaLinkedin } from "react-icons/fa";
import team1 from "../assets/joseph.jpeg";
import team2 from "../assets/cholan1.jpeg";
import team3 from "../assets/md.jpeg";
import team4 from "../assets/jeeva.jpeg";
import team5 from "../assets/ramya.jpeg";
// Import team member data - this would be in your constants folder
// import { teamMembers } from "../constants/TeamMembers";

// Sample team data structure - replace with your actual data
const teamMembers = [
    {
        id: 1,
        name: "Dr. B.M.Kumar",
        credentials: "M.Tech,.(NIT) Ph.D.,(USM)",
        image: team3,
        category: "Leadership",
        specializations: ["Healthcare Careers", "Scientific Research Paths", "Graduate School Preparation"],
        biography: "Dr. B.M.Kumar transitioned from leading research teams at Johnson & Johnson to education, where she helps students navigate the complex landscape of careers in health sciences and research.",
        achievements: ["Lead researcher on 3 FDA-approved medications", "Academic advisor for 40+ medical school applicants with 95% acceptance rate", "Guest lecturer at 15 universities"],
        philosophy: "Scientific careers require persistence and passion. I guide students to find research areas that align with their values and strengths, creating sustainable career paths.",
        linkedin: "https://linkedin.com/in/emilyrodriguez"
    },
    {
        id: 2,
        name: "Dr. Josheph",
        credentials: "BE., ME, Ph.D",
        image: team1,
        category: "Subject Specialists",
        specializations: ["Career Counseling", "Educational Psychology", "Curriculum Development"],
        biography: "Dr. Josheph has over 15 years of experience in educational psychology with a focus on career development strategies for young adults. She completed her doctorate at Stanford University and has published numerous papers on effective mentoring techniques.",
        achievements: ["Published 20+ research papers", "Recipient of the National Mentoring Award 2022", "Developed the Comprehensive Career Framework used by 50+ institutions"],
        philosophy: "I believe every student has unique potential that can be unlocked through personalized guidance and mentorship that respects their individual journey.",
        linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    {
        id: 3,
        name: "Rajendra Cholan.J",
        credentials: "M.A M.phil.,M.Ed.,",
        image: team2,
        category: "Mentors",
        specializations: ["Technology Career Paths", "Startup Mentorship", "STEM Education"],
        biography: "With dual expertise in technology and business, Prof. Chen guides students navigating careers in the tech industry. After working as a senior developer at Google, he now dedicates his time to mentoring the next generation of tech leaders.",
        achievements: ["Former Lead Developer at Google", "Founded two successful tech startups", "Mentored 100+ students who now work at top tech companies"],
        philosophy: "Technology careers require both technical excellence and business acumen. I help students develop both skillsets to thrive in the digital economy.",
        linkedin: "https://linkedin.com/in/michaelchen"
    },
    {
        id: 4,
        name: "S.Jeeva",
        credentials: "MBA",
        image: team4,
        category: "Mentors",
        specializations: ["Program Development", "Student Success Strategies", "Diversity in Education"],
        biography: "S.Jeeva has transformed educational programs at multiple institutions, focusing on creating inclusive learning environments that prepare students for modern careers. His background in both administration and teaching gives him a unique perspective.",
        achievements: ["Increased graduate placement rates by 35%", "Developed award-winning mentorship program", "Board member of the National Career Guidance Association"],
        philosophy: "Educational institutions must evolve with the changing job market. I work to build bridges between traditional academics and emerging industry needs.",
        linkedin: "https://linkedin.com/in/williamjackson"
    },
    {
        id: 5,
        name: "Ramya.N",
        credentials: "M.Sc, B.Ed",
        image: team5,
        category: "Mentors",
        specializations: ["Arts & Humanities Careers", "Portfolio Development", "Creative Industries"],
        biography: "Ramya.N brings her experience as both a published author and creative director to help students pursue careers in creative fields. She specializes in helping students translate creative talents into sustainable career paths.",
        achievements: ["Published author of three books", "Former Creative Director at a major advertising agency", "Developed innovative portfolio assessment techniques"],
        philosophy: "Creative careers require both artistic excellence and practical business knowledge. I help students honor their creative vision while building sustainable careers.",
        linkedin: "https://linkedin.com/in/alexandrakim"
    },
    // {
    //     id: 6,
    //     name: "James Wilson",
    //     credentials: "MBA, Certified Career Coach",
    //     image: {team1},
    //     category: "Mentors",
    //     specializations: ["Business Careers", "Interview Preparation", "Professional Networking"],
    //     biography: "After 15 years in corporate recruiting for Fortune 500 companies, James now helps students prepare for competitive business roles. His insider knowledge of hiring processes gives students a competitive edge.",
    //     achievements: ["Placed 200+ students in Fortune 500 companies", "Developed the 'Strategic Interview' method", "Guest speaker at 25+ business schools"],
    //     philosophy: "Success in business requires both technical qualifications and exceptional soft skills. I prepare students to showcase both aspects to potential employers.",
    //     linkedin: "https://linkedin.com/in/jameswilson"
    // }
];

// Get unique categories from team data
const getCategories = (members) => {
    const categories = members.map(member => member.category);
    return ["All", ...new Set(categories)];
};

const DetailedTeamSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Categories for filter tabs
    const categories = getCategories(teamMembers);

    // Filter members based on active category
    useEffect(() => {
        if (activeCategory === "All") {
            setFilteredMembers(teamMembers);
        } else {
            setFilteredMembers(teamMembers.filter(member => member.category === activeCategory));
        }
    }, [activeCategory]);

    // Handle member selection for modal
    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setShowModal(true);
    };

    // Close modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section className="py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Meet the dedicated professionals who guide our students toward successful futures. Each brings specialized expertise and a passion for mentoring.
                    </p>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                            onClick={() => handleMemberClick(member)}
                        >
                            <div className="relative h-80">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6">
                                    <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 text-sm rounded-full mb-2">
                                        {member.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    <p className="text-blue-100">{member.credentials}</p>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Specializations</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {member.specializations.map((spec, index) => (
                                            <span key={index} className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-600 line-clamp-3 mb-4">{member.biography}</p>

                                <button className="text-blue-600 font-medium flex items-center group">
                                    View Full Profile
                                    <svg className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Detailed Profile Modal */}
            {showModal && selectedMember && (
                <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        {/* Background overlay */}
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeModal}></div>

                        {/* Modal panel */}
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                            <div className="absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    type="button"
                                    className="bg-white rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                                    onClick={closeModal}
                                >
                                    <span className="sr-only">Close</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row">
                                {/* Left column: Image and basic info */}
                                <div className="md:w-1/3 bg-blue-50">
                                    <div className="p-6">
                                        <div className="aspect-w-1 aspect-h-1 mb-6">
                                            <img
                                                src={selectedMember.image}
                                                alt={selectedMember.name}
                                                className="w-full h-64 md:h-auto object-cover rounded-lg shadow-md"
                                            />
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h3>
                                        <p className="text-blue-600 font-medium mb-4">{selectedMember.credentials}</p>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Category</h4>
                                            <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full">
                                                {selectedMember.category}
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Specializations</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedMember.specializations.map((spec, index) => (
                                                    <span key={index} className="bg-white text-blue-700 border border-blue-200 rounded-full px-3 py-1 text-xs">
                                                        {spec}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={selectedMember.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-700 hover:text-blue-800"
                                        >
                                            <FaLinkedin className="mr-2" />
                                            LinkedIn Profile
                                        </a>
                                    </div>
                                </div>

                                {/* Right column: Detailed info */}
                                <div className="md:w-2/3 p-6">
                                    <div className="mb-8">
                                        <h4 className="flex items-center text-xl font-semibold text-gray-800 mb-3">
                                            <FaGraduationCap className="mr-2 text-blue-600" />
                                            Educational Background
                                        </h4>
                                        <p className="text-gray-600">{selectedMember.biography}</p>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="flex items-center text-xl font-semibold text-gray-800 mb-3">
                                            <FaAward className="mr-2 text-blue-600" />
                                            Academic Achievements
                                        </h4>
                                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                                            {selectedMember.achievements.map((achievement, index) => (
                                                <li key={index}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="flex items-center text-xl font-semibold text-gray-800 mb-3">
                                            <FaChalkboardTeacher className="mr-2 text-blue-600" />
                                            Mentoring Philosophy
                                        </h4>
                                        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                                            "{selectedMember.philosophy}"
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default DetailedTeamSection;