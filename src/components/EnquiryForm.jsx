import React, { useState } from "react";

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        source: "",
        comment: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        alert("Thank you for your enquiry!");
        setFormData({
            name: "",
            email: "",
            phone: "",
            source: "",
            comment: "",
        });
    };

    return (
        <section className="py-10">
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
                        <option value="Google">Google</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Referral">Refferal</option>
                        <option value="Other">Other</option>
                    </select>

                    <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Your Comment"
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
