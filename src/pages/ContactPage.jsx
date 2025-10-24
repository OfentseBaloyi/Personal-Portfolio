import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      <h2 className="text-4xl font-semibold text-teal-400 mb-6">Contact Me</h2>
      <form
        action="https://formspree.io/f/mayvlxyz" 
        method="POST"
        className="bg-gray-800 p-8 rounded-xl w-full max-w-md space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-900 text-white outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-900 text-white outline-none"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 rounded bg-gray-900 text-white outline-none"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-3 rounded-lg hover:brightness-125 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;