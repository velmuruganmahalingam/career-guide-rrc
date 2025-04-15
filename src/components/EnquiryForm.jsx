import React, { useState, useEffect, useRef } from "react";

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        source: "",
        otherSource: "",
        studyInterest: "",
    });
    const [sourceOptions, setSourceOption] = useState([]);
    const hasFetchedRef = useRef(false);

    useEffect(() => {
        if (hasFetchedRef.current) return;
        const fetchSource = async () => {
            try {
                const response = await fetch('https://career-guide-be-production.up.railway.app/api/enquiry/source', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json()
                console.log(data.Source)
                setSourceOption(data.Source)

            } catch (err) {
                console.error(err)
            }
        };
        fetchSource();
        hasFetchedRef.current = true;
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const finalData = {
            ...formData,
            phone: Number(formData.phone),
            source: formData.source === "Other" ? formData.otherSource : formData.source,
        };
        try {
            const res = await fetch("https://career-guide-be-production.up.railway.app/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(finalData),
            });

            const result = await res.json();

            if (res.ok) {
                alert("Thank you for your enquiry!");
                console.log("Success", result)
                setFormData({
                    name: formData.name = "",
                    email: formData.email = "",
                    phone: formData.phone = "",
                    source: formData.source = "",
                    otherSource: formData.otherSource = "",
                    studyInterest: formData.studyInterest = "",
                })
            } else {
                alert("Failed to send enquiry");
                console.log("Error", result)
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="py-10  bg-white-50">
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center">Send Us Your Enquiry</h2>

                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-50 p-6 rounded-xl shadow space-y-4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="p-3 border rounded-lg w-full"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="p-3 border rounded-lg w-full"
                        />
                    </div>

                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="p-3 border rounded-lg w-full"
                    />

                    <select
                        name="source"
                        required
                        value={formData.source}
                        onChange={handleChange}
                        className="p-3 border rounded-lg w-full text-gray-700"
                    >
                        <option value="">How did you hear about us?</option>
                        {sourceOptions.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>

                    {formData.source === "Other" && (
                        <input
                            type="text"
                            name="otherSource"
                            required
                            value={formData.otherSource}
                            onChange={handleChange}
                            placeholder="Please specify how you heard about us"
                            className="p-3 border rounded-lg w-full"
                        />
                    )}

                    <select
                        name="studyInterest"
                        required
                        value={formData.studyInterest}
                        onChange={handleChange}
                        className="p-3 border rounded-lg w-full text-gray-700">
                        <option value="Domestic">Domestic Study</option>
                        <option value="International">International Study</option>
                    </select>

                    <textarea
                        name="comments"
                        placeholder="Tell us about you"
                        rows={4}
                        className="p-3 border rounded-lg w-full resize-none"
                    ></textarea>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                        >
                            Submit Enquiry
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EnquiryForm;
