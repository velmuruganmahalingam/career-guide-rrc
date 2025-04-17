import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroSlider from "../components/herosection";
import UpcomingEventsSection from '../components/UpcomingEventsSection'
import WhyAttendSection from '../components/WhyAttendSection'
import GuestSpeakersSection from '../components/GuestSpeakersSection'
import PastEventsSection from '../components/PastEventsSection'
import EnquiryForm from "../components/EnquiryForm";

import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";

function Events() {
    const slides = [
        {
            title: "Upcoming Career Events",
            subtitle:
                "Join our interactive sessions, workshops, and mentorship talks designed to help you gain clarity and confidence in your career journey.",
            image: img1, // replace with a more event-vibe image if you have
            ctaText: "View Events",
            ctaLink: "#upcoming-events",
        },
        {
            title: "Learn from Experts",
            subtitle:
                "Connect with seasoned mentors, guest speakers, and career advisors. Real insights from real achievers to guide your path.",
            image: img2, // another event-appropriate image
            ctaText: "Meet the Speakers",
            ctaLink: "#guest-speakers",
        }
    ];
    return (
        <div className="relative">
            <Navbar />
            <HeroSlider slides={slides} variant="about" />
            <UpcomingEventsSection />
            <WhyAttendSection />
            <GuestSpeakersSection />
            <PastEventsSection />
            <EnquiryForm />
            <Footer />
        </div>
    )
}

export default Events;