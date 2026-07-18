import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxbgDQSb5bixQq-kL1HC7FV3cnkYbBjPnlt8b9UXe6O-aUpX2G5etqjiTJpwC4tYnn3/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-28 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} className="contact-form space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
