import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    try {
      // Replace the URL below with your backend endpoint
      const response = await fetch('https://formspree.io/f/xwkgyyqk', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Failed to send message. Please try again later.');
      }
    } catch {
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="border px-4 py-2 rounded w-full"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="border px-4 py-2 rounded w-full"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="border px-4 py-2 rounded w-full"
        required
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 transition"
      >
        Send Message
      </button>
      {submitted && (
        <div className="text-green-600 font-semibold mt-2">
          Thank you! Your message has been sent.
        </div>
      )}
      {error && <div className="text-red-600 font-semibold mt-2">{error}</div>}
    </form>
  );
};

export default ContactForm;
