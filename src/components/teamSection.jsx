import React from "react";
import team1 from "../assets/joseph.jpeg";
import team2 from "../assets/cholan1.jpeg";
import team3 from "../assets/md.jpeg";
import team4 from "../assets/jeeva.jpeg";
import team5 from "../assets/ramya.jpeg";

const teamMembers = [
    {
        name: "Dr.B.Mohan Kumar",
        qualification: "M.Tech.,(NIT)Ph.D.,(USM)",
        designation: "Managing Director",
        photo: team3,
    },
    {
        name: "Dr.M.Joseph",
        qualification: "BE, ME, PhD,",
        designation: "Mentor",
        photo: team1,
    },
    {
        name: "Rajendra Cholan.J",
        qualification: "M.A., M.Phil., M.Ed.,",
        designation: "Mentor",
        photo: team2,
    },
    {
        name: "Jeeva.S",
        qualification: "MBA",
        designation: "Mentor",
        photo: team4,
    },
    {
        name: "Ramya.N",
        qualification: "M.Sc, B.Ed.",
        designation: "Mentor",
        photo: team5,
    },
];

const TeamSection = () => {
    return (
        <section className="bg-gray-50 py-10">
            <div className="bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
                <h2 className="text-3xl text-gray-700 font-bold mb-4 text-center">Meet the Mentors Behind RRC</h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                    Experts. Mentors. Innovators.
                    <br />
                    Our team blends technology with real-world impact.
                </p>

                <div className="overflow-x-auto overflow-y-hidden hide-scrollbar">
                    <div
                        className="flex justify-center gap-12 px-4 pb-1"
                        onMouseEnter={(e) => (e.currentTarget.style.scrollBehavior = "auto")}
                        onMouseLeave={(e) => (e.currentTarget.style.scrollBehavior = "smooth")}
                    >
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[200px] bg-white rounded-xl shadow p-4 text-center hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
                                />
                                <h3 className="text-base text-gray-700 font-semibold">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.qualification}</p>
                                <p className="text-sm text-gray-500 mt-1">{member.designation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
