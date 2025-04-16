import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HeroSlider.css";

const HeroSlider = ({ slides, variant }) => {
    const sectionRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector("header");
        if (header) {
            setNavHeight(header.offsetHeight);
        }
    }, []);

    const settings = {
        centerMode: true,
        centerPadding: "15%",
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        cssEase: "ease-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "12%",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: "8%",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: "5%",
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <section
                ref={sectionRef}
                className="hero-slider-modern relative z-30 bg-white"
                style={{
                    paddingTop: `${navHeight - 50}px`
                }}
            >
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="px-1 md:px-2">
                            <div className="slide-wrapper bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="img-container">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover rounded-t-xl"
                                    />
                                </div>
                                <div className="content-container text-center">
                                    <h2 className="text-xl font-bold">{slide.title}</h2>
                                    <p className="text-sm text-gray-600 mt-2">{slide.subtitle}</p>
                                    {slide.ctaText && (
                                        <Link
                                            to={slide.ctaLink}
                                            className="cta-button"
                                        >
                                            {slide.ctaText}
                                        </Link>
                                    )}
                                    {/* 🟡 Variant-based extra content */}
                                    {variant === "about" && (
                                        <div className="mt-4 text-center text-sm text-blue-600">
                                            {/* Extra info or style only shown on About page */}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export default HeroSlider;