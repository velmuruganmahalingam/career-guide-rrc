import './App.css';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import HeroSlider from './components/herosection';
import CareerSupportSection from "./components/CareerSupportSection";
import CourseExplorer from "./components/CourseExplorer"; // Import the new component
import LogoSliderWithPopup from "./components/LogoSliderWithPopup";
import TeamSection from './components/teamSection';
import EnquiryForm from './components/EnquiryForm';
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";
import md from "./assets/md.jpeg";
import { motion } from 'framer-motion';
import { FaEye, FaBullseye } from "react-icons/fa";

function App() {
  const slides = [
    {
      title: "Welcome to RRC Career",
      subtitle:
        "Welcome to RRC Career — your trusted partner in career development. We provide personalized guidance, valuable resources, and expert insights to help you make confident decisions and take meaningful steps toward a bright future.",
      image: img1,
      ctaText: "Get Started",
      ctaLink: "/get-started",
    },
    {
      title: "Empowering Your Academic Journey",
      subtitle:
        "At RRC Career, we offer personalized academic guidance, study resources, and expert mentoring — all at zero cost. Whether you're preparing for exams, exploring new subjects, or planning your higher education path, our services are designed to support and elevate your learning experience without any fees.",
      image: img2,
      ctaText: "Learn More",
      ctaLink: "/about",
    },
    {
      title: "Let's Explore",
      subtitle:
        "Dive deep into a world of opportunities and uncover your true potential with our tailored support. From skills development to career exploration, we’re here to guide you every step of the way with curated resources and dedicated mentorship that aligns with your personal goals.",
      image: img3,
      ctaText: "Explore More",
      ctaLink: "/demo",
    },
  ];

  // const colleges = [
  //   {
  //     name: "Ponnaiya Ramajayam Institute of Arts and Science",
  //     location: "Thanjavur",
  //     logo: { main: img4 },
  //     description: "A well-established college offering various undergraduate and postgraduate courses.",
  //     courses: [
  //       { name: "BSc Computer Science", category: "Arts & Science" },
  //       { name: "BCA", category: "Arts & Science" },
  //       { name: "BA English", category: "Arts & Science" },
  //       { name: "MSc Physics", category: "Arts & Science" },
  //       { name: "MCom", category: "Commerce" }
  //     ]
  //   },
  //   {
  //     name: "Oxford College of Engineering",
  //     location: "Trichy",
  //     logo: { main: img5 },
  //     description: "Engineering excellence with a focus on innovation and technology.",
  //     courses: [
  //       { name: "BE Computer Science", category: "Engineering" },
  //       { name: "BE Electronics and Communication", category: "Engineering" },
  //       { name: "ME Structural Engineering", category: "Engineering" }
  //     ]
  //   },
  //   {
  //     name: "J.J Engineering College",
  //     location: "Trichy",
  //     logo: { main: img6 },
  //     description: "Dedicated to nurturing future engineers and technologists.",
  //     courses: [
  //       { name: "BE Mechanical Engineering", category: "Engineering" },
  //       { name: "BE Civil Engineering", category: "Engineering" },
  //       { name: "MBA", category: "Management" }
  //     ]
  //   }
  // ];

  console.log("Received slides:", slides);

  return (
    <div className="relative">
      <Navbar />
      {/* <HeroSection
          slides={slides}
          title="Learn Without Limits"
          subtitle="Top quality online courses from expert mentors."
          image="/images/home-hero.jpg"
          ctaText="Browse Courses"
          ctaLink="/courses"
        /> */}
      <HeroSlider slides={slides} />
      <section className="py-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the heart and soul of RRC Career — where dreams meet direction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              className="bg-white border-l-8 border-blue-500 shadow-xl rounded-2xl p-8 hover:shadow-blue-100 transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <FaEye className="text-blue-500 text-3xl" />
                <h3 className="text-2xl font-semibold text-blue-700">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To be a globally recognized educational guidance platform that empowers individuals to achieve academic and professional excellence through informed choices, innovation, and integrity. We envision a world where every student, regardless of background, has access to personalized, high-quality mentorship and career support.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-white border-l-8 border-green-500 shadow-xl rounded-2xl p-8 hover:shadow-green-100 transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <FaBullseye className="text-green-500 text-3xl" />
                <h3 className="text-2xl font-semibold text-green-700">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our mission is to provide accessible, zero-cost career and academic guidance tailored to each learner’s unique aspirations and abilities. Through expert mentoring, partnerships, and cutting-edge tools, we aim to bridge the gap between education and opportunity, enabling students to thrive in India and across the globe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <CourseExplorer />
      <CareerSupportSection />
      <section className="py-4 pb-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-4 mt-7">
          Meet Our Mentor & Visionary Leader
        </h2>
        <div className="max-w-7xl mx-auto px-2">
          <div className="bg-white rounded-3xl shadow-inner p-10 md:p-10 transition-all duration-300 shadow-[inset_0_-6px_12px_rgba(0,0,0,0.08)]">

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/3">
                <img
                  src={md}
                  alt="Dr. B. Mohan Kumar"
                  className="rounded-2xl shadow-md w-full object-cover h-[400px] border border-gray-200"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Dr. B. Mohan Kumar</h3>
                <p className="text-gray-500 mb-2 italic">M.Tech (NIT), Ph.D. (USM)</p>
                <p className="text-gray-500 mb-2 italic">Managing Director, RRC Group of Institutions</p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Dr. B. Mohan Kumar is a highly accomplished academician and visionary leader with over 20 years of experience in education, research, and student mentoring.
                  A proud alumnus of the National Institute of Technology (NIT) and a doctorate holder from Universiti Sains Malaysia (USM), his academic journey reflects a blend of excellence and global exposure.
                  <br /><br />
                  As the Managing Director of RRC Group of Institutions, Dr. Mohan Kumar has been instrumental in shaping the academic paths of thousands of students, fostering innovation, discipline, and clarity in their career journeys.
                  <br /><br />
                  His expertise spans technical education, institutional leadership, and career strategy, making him a sought-after mentor for students aspiring to achieve academic and professional success both in India and abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <LogoSliderWithPopup title="Built with Campus Collaboration" />


      <TeamSection />
      <EnquiryForm />
      <Footer />
    </div>
  );
}

export default App;
