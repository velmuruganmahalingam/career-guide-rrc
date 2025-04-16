import React from "react";
import Navbar from "../components/navbar";
import HeroSlider from "../components/herosection";
import OurStorySection from "../components/OurStory";
import DetailedTeamSection from '..//components/DetailTeamSection'
import CoreValuesGrid from '../components/CoreValuesGrid'
import MethodologyProcess from '../components/MethodologyProcess'
import SuccessStoriesCarousel from '../components/SuccessStoriesCarousel'
import AcademicPartner from '../components/AcademicPartner'
import AccordionFAQ from '../components/AccordionFAQ'
import Footer from "../components/footer";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
function AboutUs() {
    const slides = [
        {
            title: "Who We Are",
            subtitle:
                "RRC Career is built by a passionate team of educators, mentors, and tech professionals united by a common goal — to make quality academic and career guidance accessible to every student. We believe in nurturing potential and lighting the path forward with knowledge and support.",
            image: img1,
            ctaText: "Meet the Team",
            ctaLink: "/team",
        },
        {
            title: "Our Mission",
            subtitle:
                "Our mission is to empower students through personalized guidance, innovative learning resources, and strategic career planning. We strive to create an ecosystem where learners feel confident, supported, and equipped to reach every academic milestone with clarity and purpose.",
            image: img2,
            ctaText: "Our Vision",
            ctaLink: "/vision",
        }
    ];
    return (
        <div className="relative">
            <Navbar />
            <HeroSlider slides={slides} variant="about" />
            <OurStorySection />
            <DetailedTeamSection />
            <CoreValuesGrid />
            <MethodologyProcess />
            <SuccessStoriesCarousel />
            <AcademicPartner />
            <AccordionFAQ />
            <Footer />
        </div>
    )
}

export default AboutUs