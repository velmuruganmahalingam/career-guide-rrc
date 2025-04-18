import React, { useState } from 'react';
import Slider from 'react-slick';
import col1 from '../assets/im.png'
import col2 from '../assets/ftr-logo.png'


const academicPartners = [
    {
        name: "Imayam College of Engineering and Technologies",
        logo: col1,
        duration: "Since 2015",
        nature: "Collaborative Research",
        opportunities: "Exclusive research internships and access to Harvard’s career network.",
        successStories: "Numerous students placed in top research positions worldwide.",
        contact: "contact@harvard.edu"
    },
    {
        name: "College of Engineering and Technologies",
        logo: col2,
        duration: "Since 2018",
        nature: "Academic Exchange",
        opportunities: "Student exchange programs, cross-university research projects.",
        successStories: "Top-tier job placements at tech companies, successful academic collaborations.",
        contact: "admissions@stanford.edu"
    },
    {
        name: "College of Engineering and Technologies",
        logo: col1,
        duration: "Since 2018",
        nature: "Academic Exchange",
        opportunities: "Student exchange programs, cross-university research projects.",
        successStories: "Top-tier job placements at tech companies, successful academic collaborations.",
        contact: "admissions@stanford.edu"
    },
    {
        name: "College of Engineering and Technologies",
        logo: col2,
        duration: "Since 2018",
        nature: "Academic Exchange",
        opportunities: "Student exchange programs, cross-university research projects.",
        successStories: "Top-tier job placements at tech companies, successful academic collaborations.",
        contact: "admissions@stanford.edu"
    },
    {
        name: "College of Engineering and Technologies",
        logo: col1,
        duration: "Since 2018",
        nature: "Academic Exchange",
        opportunities: "Student exchange programs, cross-university research projects.",
        successStories: "Top-tier job placements at tech companies, successful academic collaborations.",
        contact: "admissions@stanford.edu"
    },
    // Add more partners here...
];

const AcademicPartner = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);

    const handleOpenModal = (partner) => {
        setSelectedPartner(partner);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPartner(null);
    };

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-700 text-center mb-10">
                    Our Academic Partnerships
                </h2>

                <Slider {...sliderSettings}>
                    {academicPartners.map((partner, index) => (
                        <div key={index} className="p-4 flex justify-center">
                            <div
                                className="cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => handleOpenModal(partner)}
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-32 h-32 object-contain mx-auto"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-96">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl text-gray-700 font-semibold">{selectedPartner.name}</h2>
                            <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="my-4 text-center">
                            <img
                                src={selectedPartner.logo}
                                alt={selectedPartner.name}
                                className="w-24 h-24 object-contain mx-auto mb-4"
                            />
                            <p><strong>Partnership Duration:</strong> {selectedPartner.duration}</p>
                            <p><strong>Nature of Partnership:</strong> {selectedPartner.nature}</p>
                            <p><strong>Special Opportunities:</strong> {selectedPartner.opportunities}</p>
                            <p><strong>Success Stories:</strong> {selectedPartner.successStories}</p>
                            <p><strong>Contact Information:</strong> <a href={`mailto:${selectedPartner.contact}`} className="text-blue-500">{selectedPartner.contact}</a></p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AcademicPartner;
