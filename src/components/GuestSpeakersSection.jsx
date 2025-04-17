import team1 from "../assets/joseph.jpeg";
import team2 from "../assets/cholan1.jpeg";
import team3 from "../assets/md.jpeg";
import team4 from "../assets/jeeva.jpeg";
import team5 from "../assets/ramya.jpeg";
const speakers = [
    {
        name: "Dr. Joseph",
        role: "Principle, Imayam Engg College, Guest Mentor of RRC",
        topic: "Decoding Career Confusion",
        avatar: team1,
        bio: "15+ years helping students find clarity in career choices using psychometric and behavioral models.",
    },
    {
        name: "Rajendra Cholan",
        role: "Principle, Guest Mentor of RRC",
        topic: "Cracking International Admissions",
        avatar: team2,
        bio: "Placed over 1,200 students in top universities across US, UK, and Europe.",
    },
    {
        name: "Ramya",
        role: "Mentor @ RRC Career",
        topic: "From Doubt to Direction",
        avatar: team5,
        bio: "Mentored 500+ students and helped them align their strengths with market needs.",
    },
    {
        name: "Jeeva",
        role: "Mentor @ RRC Career",
        topic: "My Journey to Silicon Valley",
        avatar: team4,
        bio: "Alumnus of RRC Career Guidance, now leading a team at Google’s Bangalore office.",
    },
];

export default function GuestSpeakersSection() {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl text-gray-700 font-bold mb-4 text-center">
                    Guest Speakers & Mentors
                </h2>
                <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
                    Learn from the journeys of experienced professionals and inspiring mentors. Our guest speakers bring real-world insights, career guidance, and personal stories to help you navigate your path with confidence.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map((speaker, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition group relative overflow-hidden"
                        >
                            <img
                                src={speaker.avatar}
                                alt={speaker.name}
                                className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-md"
                            />
                            <h3 className="text-lg font-semibold text-center mt-4 text-gray-700">{speaker.name}</h3>
                            <p className="text-center text-sm text-gray-600 font-medium">{speaker.role}</p>
                            <p className="text-center text-sm mt-1 text-gray-600 italic">"{speaker.topic}"</p>

                            {/* Hover Bio Overlay */}
                            <div className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-sm text-gray-700 text-center">
                                <p>{speaker.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
