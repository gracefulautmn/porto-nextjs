// components/MailSection.js
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import contactImage from '../../public/images/meow.webp'; // Import gambar Anda

const MailSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSendStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await response.json();
        console.error('Gagal mengirim email:', errorData);
        setSendStatus('error');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat mengirim email:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="max-w-lg">
          <h2 className="text-3xl font-semibold mb-6">CONTACT ME!!</h2>
          <p className="mb-8 text-gray-700 text-lg">
          Have questions or want to discuss? Please send us a message via the form below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Message
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`bg-[#dbd8d0] hover:bg-[#c7c2ba] text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            {sendStatus === 'success' && (
              <p className="mt-4 text-green-500">Your message was sent successfully!</p>
            )}
            {sendStatus === 'error' && (
              <p className="mt-4 text-red-500">An error occurred while sending the message. Please try again later.</p>
            )}
          </form>
        </div>
        <div className="hidden md:block">
          <Image src={contactImage} alt="Ilustrasi Kontak" className="rounded-lg shadow-md w-64 ml-28 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default MailSection;