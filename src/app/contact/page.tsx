"use client"; // Ensure it's placed at the top

import Link from 'next/link';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-[#004383] shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Contact Me</h1>
          <nav>
            <Link href="/" className="text-white hover:text-blue-700">Home</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            Feel free to reach out to me for any questions, feedback, or opportunities. I would love to hear from you!
          </p>

          <p className="text-lg mb-4">
            You can also email me directly at: 
            <a href="mailto:alishbashabbir312@gmail.com" className="text-blue-500 hover:text-blue-700"> alishbashabbir312@gmail.com</a>
          </p>

          {formSubmitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
              <p className="font-semibold">Thank you for your message!</p>
              <p>I&#39;ll get back to you soon.</p> {/* Here is the fix */}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          )}
        </section>
      </main>
    </div>
  );
};

export default Contact;
