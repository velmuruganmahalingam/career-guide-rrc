import React, { useState, useEffect, useRef } from "react";
import { fetchColleges } from '../api/college';

const LogoSliderWithPopup = ({ items, title = "Our Partners" }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [scrollPaused, setScrollPaused] = useState(false);
    const [openCategory, setOpenCategory] = useState(null);
    const [fetchItem, setFetchItem] = useState([]);
    const [imageLoadError, setImageLoadError] = useState({});
    const scrollRef = useRef(null);
    const animationRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const cardWidth = 504; // 480px + 24px gap
    const hasFetchedRef = useRef(false);
    const hasBeenDragged = useRef(false); // Track if dragging occurred for click prevention

    // PUBLIC_URL is used for production builds
    const PUBLIC_URL = process.env.PUBLIC_URL || '';

    // Helper function to properly format image URL with your project's public path
    const formatImageUrl = (imageUrl) => {
        if (!imageUrl) return `${PUBLIC_URL}/placeholder-logo.png`;

        // Log the raw URL for debugging
        console.log("Raw image URL:", imageUrl);

        // Handle various path formats and ensure proper public URL prefix
        if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
            // If it's already an absolute URL, return as is
            return imageUrl;
        } else {
            // Remove any leading dots and ensure there's a leading slash
            const cleanPath = imageUrl.replace(/^\.+/, '');
            const pathWithLeadingSlash = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;

            // Combine with PUBLIC_URL for proper path resolution in production
            const formattedUrl = `${PUBLIC_URL}${pathWithLeadingSlash}`;
            console.log("Formatted URL:", formattedUrl);
            return formattedUrl;
        }
    };

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
        //get College Details
        if (hasFetchedRef.current) return;
        const getCollege = async () => {
            try {
                const resp = await fetchColleges();
                console.log("College data:", resp.data);

                // Check if data was properly received
                if (!resp || !resp.data || !Array.isArray(resp.data) || resp.data.length === 0) {
                    console.warn("College data is empty or invalid:", resp);
                    return;
                }

                // Log each college's data structure to help debug
                resp.data.forEach((item, index) => {
                    console.log(`College ${index} (${item.name || 'unnamed'}) data:`, {
                        id: item.id,
                        name: item.name,
                        location: item.location,
                        logo: item.logo,
                        logoPath: item.logo?.main || 'missing'
                    });
                });

                setFetchItem(resp.data);
            }
            catch (error) {
                console.error("Error fetching colleges:", error.message);
            }
        };

        // Call the get college func
        getCollege();
        hasFetchedRef.current = true;

        // Return empty cleanup to avoid running this effect more than once
        return () => { };
    }, []);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        // --- AUTO SCROLL ---
        const interval = setInterval(() => {
            if (!scrollPaused && !isDragging.current) {
                const currentScroll = scrollContainer.scrollLeft;
                const nextPosition = currentScroll + cardWidth;

                if (nextPosition + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
                    smoothScroll(scrollContainer, 0, 1200);
                } else {
                    smoothScroll(scrollContainer, nextPosition, 1200);
                }
            }
        }, 4000);

        // DRAG FUNCTIONALITY - completely rewritten
        const handleMouseDown = (e) => {
            // Only handle primary mouse button (left click)
            if (e.button !== 0) return;

            console.log("Mouse down", e.pageX);
            isDragging.current = true;
            hasBeenDragged.current = false; // Reset drag flag
            startX.current = e.pageX;
            scrollLeft.current = scrollContainer.scrollLeft;

            // Stop any ongoing animations
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }

            // Change cursor
            document.body.style.cursor = 'grabbing';

            // Prevent default to avoid text selection
            e.preventDefault();
        };

        const handleMouseMove = (e) => {
            if (!isDragging.current) return;

            const dx = e.pageX - startX.current;
            if (Math.abs(dx) > 5) {
                hasBeenDragged.current = true; // User has dragged enough to consider it a drag
            }

            scrollContainer.scrollLeft = scrollLeft.current - dx;
            e.preventDefault();
        };

        const handleMouseUp = (e) => {
            if (!isDragging.current) return;

            console.log("Mouse up");
            isDragging.current = false;
            document.body.style.cursor = '';
        };

        // Add event listeners directly to the document
        scrollContainer.addEventListener('mousedown', handleMouseDown);
        scrollContainer.addEventListener('mousemove', handleMouseMove);
        scrollContainer.addEventListener('mouseup', handleMouseUp);

        // --- CLEANUP ---
        return () => {
            clearInterval(interval);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }

            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);

            // Reset cursor if component unmounts while dragging
            document.body.style.cursor = '';
        };
    }, [scrollPaused]);

    // Handler for image load errors
    const handleImageError = (key) => {
        setImageLoadError(prev => ({
            ...prev,
            [key]: true
        }));
    };

    // Handle card click - only select if not being dragged
    const handleCardClick = (item) => {
        if (!hasBeenDragged.current) {
            setSelectedItem(item);
        }
        // Reset drag flag
        hasBeenDragged.current = false;
    };

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
                        onMouseLeave={() => {
                            if (!isDragging.current) {
                                setScrollPaused(false);
                            }
                        }}
                        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 select-none"
                        style={{
                            scrollBehavior: "auto",
                            minWidth: "100%",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            cursor: "grab"
                        }}>
                        {fetchItem.length > 0 ? (
                            fetchItem.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleCardClick(item)}
                                    className="min-w-[480px] max-w-[480px] flex bg-white rounded-lg hover:scale-105 transition-transform duration-300 border border-gray-100"
                                    style={{
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                    }}
                                >
                                    {/* Image or Fallback */}
                                    <div className="flex-shrink-0 p-4">
                                        {/* Static logo fallback approach (for testing) */}
                                        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-lg">
                                            {(() => {
                                                const key = item.id ?? idx;

                                                return imageLoadError[key] ? (
                                                    <span className="text-3xl font-bold text-gray-400">
                                                        {item.name?.charAt(0) || 'C'}
                                                    </span>
                                                ) : (
                                                    <img
                                                        src={formatImageUrl(item.logo?.main)}
                                                        alt={item.name || 'College Logo'}
                                                        className="w-24 h-24 object-contain mx-auto"
                                                        onError={() => handleImageError(key)}
                                                        onLoad={() => console.log(`Image loaded for ${item.name}`)}
                                                    />
                                                );
                                            })()}
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col justify-center p-4">
                                        <h4 className="text-lg font-semibold">{item.name || 'College Name'}</h4>
                                        <p className="text-sm text-gray-600">{item.location || 'Location'}</p>
                                        <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                                            {item.description || 'No description available'}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Placeholder loading state
                            Array(3).fill(0).map((_, idx) => (
                                <div
                                    key={idx}
                                    className="min-w-[480px] max-w-[480px] flex bg-white rounded-lg border border-gray-100"
                                    style={{
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                    }}
                                >
                                    <div className="flex-shrink-0 p-4">
                                        <div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse"></div>
                                    </div>
                                    <div className="flex flex-col justify-center p-4 space-y-2 w-full">
                                        <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4"></div>
                                        <div className="h-4 bg-gray-200 rounded animate-pulse w-2/4"></div>
                                        <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {selectedItem && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setSelectedItem(null);
                                setOpenCategory(null); // reset expansion on close
                            }}
                            className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
                        >
                            &times;
                        </button>

                        {/* Logo */}
                        <div className="flex justify-center mb-4">
                            <div className="h-24 w-24 flex items-center justify-center bg-gray-100 rounded-full shadow">
                                {imageLoadError[selectedItem.id] ? (
                                    <span className="text-3xl font-bold text-gray-400">
                                        {selectedItem.name?.charAt(0) || 'C'}
                                    </span>
                                ) : (
                                    <img
                                        src={formatImageUrl(selectedItem.logo?.main)}
                                        alt={selectedItem.name || 'College Logo'}
                                        className="h-24 w-24 object-contain rounded-full"
                                        onError={() => handleImageError(selectedItem.id)}
                                    />
                                )}
                            </div>
                        </div>

                        {/* College Info */}
                        <div className="text-center mb-4">
                            <h3 className="text-2xl font-semibold text-gray-900">{selectedItem.name || 'College Name'}</h3>
                            <p className="text-sm text-gray-600">{selectedItem.location || 'Location'}</p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-center mb-6">{selectedItem.description || 'No description available'}</p>

                        {/* Courses by Category */}
                        {selectedItem.courses && selectedItem.courses.length > 0 && (() => {
                            const courseCategories = selectedItem.courses.reduce((acc, course) => {
                                const category = course.category || "Others";
                                if (!acc[category]) acc[category] = [];
                                acc[category].push(course.name);
                                return acc;
                            }, {});

                            return (
                                <div className="max-h-64 overflow-y-auto pr-1">
                                    {Object.entries(courseCategories).map(([category, courses]) => (
                                        <div key={category} className="mb-4 border border-gray-200 rounded-lg">
                                            <button
                                                onClick={() =>
                                                    setOpenCategory(openCategory === category ? null : category)
                                                }
                                                className="w-full flex justify-between items-center px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 rounded-t-lg font-semibold text-blue-600"
                                            >
                                                {category}
                                                <span>{openCategory === category ? "−" : "+"}</span>
                                            </button>
                                            {openCategory === category && (
                                                <ul className="px-6 py-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc list-inside text-gray-700 text-sm bg-white rounded-b-lg">
                                                    {courses.map((courseName, idx) => (
                                                        <li key={idx}>{courseName}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            );
                        })()}
                    </div>
                </div>
            )}
        </>
    );
};

export default LogoSliderWithPopup;