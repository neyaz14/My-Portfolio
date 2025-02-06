import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Linkedin, Instagram, Youtube } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    ).then(
      (response) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        setStatus('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white  p-4">
        <div className='text-center my-14'>
            <h1 className='text-4xl font-bold text-violet-600 '>Contact with me </h1>
            <p className='text-white'>Got a question ? send me a message , and I will get back to you soon</p>
        </div>
      <div className=" flex flex-col md:flex-row md:w-[90%] mx-auto  gap-10">
        {/* Contact Form */}
        <div className="bg-[#1a1a2e] md:w-[50%]  mx-auto rounded-xl p-6 shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-purple-400">Get in Touch</h2>
          <p className="mb-6 text-gray-300">
            Have something to discuss? Send me a message and let's talk.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-[#252539] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-[#252539] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-[#252539] text-white p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>

            {status && (
              <p className={`text-center mt-4 ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Comments & Social Links */}
        <div className="space-y-6 md:w-[29%] mx-auto">
          {/* Comments Section */}


          {/* Social Connect */}
          <div className="bg-[#1a1a2e] rounded-xl p-6 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Connect With Me</h3>
            <div className="space-y-4">
              <Link
                to="https://linkedin.com"
                className="flex items-center bg-[#252539] p-3 rounded-lg hover:bg-blue-900 transition"
              >
                <Linkedin className="mr-3" />
                Let's Connect on LinkedIn
              </Link>
              <Link
                to="https://instagram.com"
                className="flex items-center bg-[#252539] p-3 rounded-lg hover:bg-pink-900 transition"
              >
                <Instagram className="mr-3" />
                Instagram
              </Link>
              <Link
                to="https://youtube.com"
                className="flex items-center bg-[#252539] p-3 rounded-lg hover:bg-red-900 transition"
              >
                <Youtube className="mr-3" />
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
