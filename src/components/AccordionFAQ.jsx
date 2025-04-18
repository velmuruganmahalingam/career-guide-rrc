import React, { useState } from 'react';

const faqData = {
    guidanceProcess: [
        {
            question: "How does the guidance process work?",
            answer: "Our guidance process starts with understanding your goals and aspirations. We work with you to identify your strengths and explore different career paths."
        },
        {
            question: "Is there really no cost for the services?",
            answer: "Yes, our guidance services are completely free of charge, ensuring that every student has access to the resources they need for career planning."
        },
        {
            question: "What age groups/educational levels do you support?",
            answer: "We support students of all educational levels, from high school to university, and provide guidance to help them make informed decisions about their future."
        },
    ],
    domesticStudy: [
        {
            question: "How personalized is the guidance?",
            answer: "Our guidance is highly personalized. We tailor our advice to your academic background, career interests, and personal aspirations."
        },
        {
            question: "What resources are provided during the guidance process?",
            answer: "We provide various resources, including workshops, one-on-one counseling, career assessments, and access to our network of educational institutions."
        }
    ],
    internationalStudy: [
        {
            question: "What makes RRC Career Guidance different from other services?",
            answer: "Our unique approach combines personalized one-on-one guidance with a wealth of resources, including exclusive partnerships with global educational institutions."
        },
        {
            question: "How long does the process typically take?",
            answer: "The process typically takes 2-3 months, depending on the level of guidance required and your individual goals."
        }
    ]
};

const AccordionFAQ = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    const renderCategory = (title, key) => {
        const isOpen = openCategory === key;
        return (
            <div key={key} className="border rounded-lg p-4 shadow-sm bg-white">
                <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => toggleCategory(key)}
                >
                    <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
                    <span className="text-2xl text-blue-500">
                        {isOpen ? '−' : '+'}
                    </span>
                </button>

                {isOpen && (
                    <div className="mt-4 space-y-4">
                        {faqData[key].map((faq, index) => (
                            <div key={index}>
                                <h4 className="font-medium text-gray-700">{faq.question}</h4>
                                <p className="text-gray-600 mt-1">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <section className="py-10 bg-white-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {renderCategory("Guidance Process", "guidanceProcess")}
                    {renderCategory("Domestic Study", "domesticStudy")}
                    {renderCategory("International Study", "internationalStudy")}
                </div>
            </div>
        </section>
    );
};

export default AccordionFAQ;
