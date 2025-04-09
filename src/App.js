import './App.css';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import HeroSlider from './components/herosection';
import CareerSupportSection from "./components/CareerSupportSection";
import LogoSliderWithPopup from "./components/LogoSliderWithPopup";
import TeamSection from './components/teamSection';
import EnquiryForm from './components/EnquiryForm';
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";
import img4 from "./assets/pr.jpg";
import img5 from "./assets/oce1.png";
import img6 from "./assets/jj.jpg";
import md from "./assets/md.jpeg";
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

  const colleges = [
    {
      name: "Ponnaiya Ramajayam institure of Arts and Science",
      location: 'Thanjavur',
      logo: { main: img4 },
      description: "Top-notch tech training partner.",
      courses: ["AI Bootcamp", "React Dev", "Cloud Basics"],
    },
    {
      name: "Oxford college of Engineering",
      location: 'Trichy',
      logo: { main: img5 },
      description: "Top-notch tech training partner.",
      courses: ["AI Bootcamp", "React Dev", "Cloud Basics"],
    },
    {
      name: "J.J Engineering College",
      location: 'Trichy',
      logo: { main: img6 },
      description: "Top-notch tech training partner.",
      courses: ["AI Bootcamp", "React Dev", "Cloud Basics"],
    },
    {
      name: "Ponnaiya Ramajayam institure of Arts and Science",
      location: 'Thanjavur',
      logo: { main: img4 },
      description: "Top-notch tech training partner.",
      courses: ["AI Bootcamp", "React Dev", "Cloud Basics"],
    },
    {
      name: "Oxford college of Engineering",
      location: 'Trichy',
      logo: { main: img5 },
      description: "Top-notch tech training partner.",
      courses: ["AI Bootcamp", "React Dev", "Cloud Basics"],
    },
    {
      name: "J.J Engineering College",
      location: 'Trichy',
      logo: { main: img6 },
      description: "Top-notch tech training partner.",
      courses: ["AI Bootcamp", "React Dev", "Cloud Basics"],
    },
    // More colleges...
  ];
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
      <CareerSupportSection />
      <section className="py-2 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-4">
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


      <LogoSliderWithPopup items={colleges} title="Built with Campus Collaboration" />


      <TeamSection />
      <EnquiryForm />
      <Footer />
    </div>
  );
}

export default App;
