import ServiceBlock from "./ServiceBlock";
import img1 from "../assets/ic.jpg";
import img2 from "../assets/inc.jpg";
import { FaMapSigns, FaBrain, FaUserCheck, FaChartLine, FaTools, FaLightbulb, FaPlaneDeparture, FaCompass } from "react-icons/fa";

const CareerSupportSection = () => {
    return (
        <section className="py-8 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl text-gray-700 font-bold mb-4">Our Services & Career Support Pathway</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our Career guidance helps individuals make informed choices about their education and career path — tailored to your strengths and aspirations.
                    </p>
                </div>

                {/* Second ServiceBlock - Image on right, text on left (reverse) */}
                <ServiceBlock
                    image={img1}
                    title="Domestic Education Guidance"
                    description="Get expert guidance to choose the right colleges, prepare effectively for entrance exams, and manage your time and resources wisely. Our support ensures you're well-equipped to navigate India’s academic landscape with clarity and confidence. We help you overcome academic stress, stay focused, and set realistic goals that lead to long-term success."
                    buttonLabel="Know More"
                    buttonStyle="bg-yellow-500 text-white hover:bg-yellow-600"
                    reverse={false}  // Image on right, text on left (reversed)
                    quotes={[
                        { icon: <FaTools className="text-indigo-500" />, text: "College & course selection guidance." },
                        { icon: <FaLightbulb className="text-yellow-500" />, text: "Entrance prep & interview coaching." },
                        { icon: <FaChartLine className="text-orange-500" />, text: "Scholarship & admission planning." },
                        { icon: <FaUserCheck className="text-green-500" />, text: "Ongoing mentoring & motivation." },
                    ]}
                />

                {/* Third ServiceBlock - Image on left, text on right */}
                <ServiceBlock
                    image={img2}
                    title="International Study Consultation"
                    description="Get expert guidance to choose the right colleges, prepare effectively for entrance exams, and manage your time and resources wisely. Our support ensures you're well-equipped to navigate India’s academic landscape with clarity and confidence. We help you overcome academic stress, stay focused, and set realistic goals that lead to long-term success."
                    buttonLabel="Know More"
                    buttonStyle="bg-green-500 text-white hover:bg-green-600"
                    quotes={[
                        { icon: <FaPlaneDeparture className="text-red-500" />, text: "Country & university selection support." },
                        { icon: <FaCompass className="text-blue-500" />, text: "Visa & documentation assistance." },
                        { icon: <FaLightbulb className="text-yellow-500" />, text: "Scholarships & financial guidance." },
                        { icon: <FaUserCheck className="text-green-500" />, text: "Post-arrival help & integration." },
                    ]}
                    reverse={true}  // Image on left, text on right
                />

                <ServiceBlock
                    image="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
                    title="Explore Your Career Options"
                    description="We are dedicated to helping students and professionals discover the best-fit career options through personalized guidance, expert mentorship, and industry-aligned assessments. Our goal is to unlock your full potential and build a career path tailored to your strengths. From awareness to action, we empower you to make confident and informed decisions."
                    buttonLabel="Learn More"
                    buttonStyle="bg-blue-500 text-white hover:bg-blue-600"
                    quotes={[
                        { icon: <FaMapSigns className="text-blue-500" />, text: "Personalized career roadmap." },
                        { icon: <FaBrain className="text-purple-500" />, text: "Psychometric-based insights." },
                        { icon: <FaUserCheck className="text-green-500" />, text: "Passion-aligned career choices." },
                        { icon: <FaChartLine className="text-orange-500" />, text: "Goal-oriented success planning." },
                    ]}
                    reverse={false}  // Image on left, text on right
                />
            </div>
        </section>
    );
};

export default CareerSupportSection;
