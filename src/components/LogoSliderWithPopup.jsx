import React, { useState, useEffect, useRef } from "react";

const LogoSliderWithPopup = ({ items, title = "Our Partners" }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [scrollPaused, setScrollPaused] = useState(false);
    const scrollRef = useRef(null);
    const animationRef = useRef(null);
    const cardWidth = 504; // 480px + 24px gap

    // Smooth scroll function with easing
    const smoothScroll = (element, target, duration) => {
        const start = element.scrollLeft;
        const change = target - start;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;

            if (elapsedTime >= duration) {
                element.scrollLeft = target;
                return;
            }

            // Easing function for smooth movement (easeInOutQuad)
            const progress = elapsedTime / duration;
            const easeProgress = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            element.scrollLeft = start + change * easeProgress;
            animationRef.current = requestAnimationFrame(animateScroll);
        };

        animationRef.current = requestAnimationFrame(animateScroll);
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const interval = setInterval(() => {
            if (!scrollPaused) {
                // Get current scroll position
                const currentScroll = scrollContainer.scrollLeft;

                // Calculate target (next card)
                const nextPosition = currentScroll + cardWidth;

                // Check if we need to loop back to the beginning
                if (nextPosition + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
                    smoothScroll(scrollContainer, 0, 1200); // Smooth scroll to beginning
                } else {
                    smoothScroll(scrollContainer, nextPosition, 1200); // Smooth scroll to next card
                }
            }
        }, 4000); // Slightly longer interval to allow for full animation

        return () => {
            clearInterval(interval);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [scrollPaused]);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    Learning doesn't happen in isolation.
                    We grow stronger with great partners.
                    The journey of knowledge acquisition flourishes through meaningful collaboration and shared experiences.
                </p>

                {/* Horizontal Scroll Container */}
                <div className="overflow-hidden mt-2">
                    <div
                        ref={scrollRef}
                        onMouseEnter={() => setScrollPaused(true)}
                        onMouseLeave={() => setScrollPaused(false)}
                        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                        style={{
                            scrollBehavior: "auto", // Changed from "smooth" to use our custom animation
                            minWidth: "100%",
                            scrollbarWidth: "none", // Firefox
                            msOverflowStyle: "none", // IE/Edge
                        }}
                    >
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedItem(item)}
                                className="min-w-[480px] max-w-[480px] flex bg-white rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 border border-gray-100"
                                style={{
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                }}
                            >
                                {/* Image */}
                                <div className="flex-shrink-0 p-4">
                                    <img
                                        src={item.logo?.main}
                                        alt={item.name}
                                        className="w-24 h-24 object-contain mx-auto"
                                    />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col justify-center p-4">
                                    <h4 className="text-lg font-semibold">{item.name}</h4>
                                    <p className="text-sm text-gray-600">{item.location}</p>
                                    <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {selectedItem && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl max-w-3xl w-full relative">
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-3 right-4 text-2xl"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedItem.logo?.main}
                            alt={selectedItem.name}
                            className="h-24 mx-auto mb-4 object-contain"
                        />
                        <h3 className="text-xl font-semibold text-center">{selectedItem.name}</h3>
                        <p className="text-gray-700 text-center mb-4">{selectedItem.description}</p>
                        <ul className="list-disc list-inside text-gray-800">
                            {selectedItem.courses?.map((course, i) => (
                                <li key={i}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default LogoSliderWithPopup;