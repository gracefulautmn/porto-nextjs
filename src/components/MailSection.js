'use client';

import React, { useState } from 'react';

const MailSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    setTimeout(() => {
      console.log({ name, email, message });
      setSendStatus('success'); 
      setIsSending(false);
      if ('success') {
        setName('');
        setEmail('');
        setMessage('');
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 mt-12">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[--foreground] mb-4">CONTACT ME</h2>
        <p className="mb-8 text-[--foreground] opacity-80">
          Have questions or want to discuss? Please send me a message via the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block text-[--foreground] opacity-90 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none border border-[--subtle-border] rounded-lg w-full py-3 px-4 bg-transparent text-[--foreground] leading-tight focus:outline-none focus:ring-2 focus:ring-[--primary]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[--foreground] opacity-90 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none border border-[--subtle-border] rounded-lg w-full py-3 px-4 bg-transparent text-[--foreground] leading-tight focus:outline-none focus:ring-2 focus:ring-[--primary]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[--foreground] opacity-90 text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="appearance-none border border-[--subtle-border] rounded-lg w-full py-3 px-4 bg-transparent text-[--foreground] leading-tight focus:outline-none focus:ring-2 focus:ring-[--primary]"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 border border-[--subtle-border] font-semibold rounded-lg hover:bg-[--card-background] transition-colors"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {sendStatus === 'success' && (
            <p className="mt-4 text-green-500">Your message was sent successfully!</p>
          )}
          {sendStatus === 'error' && (
            <p className="mt-4 text-red-500">An error occurred. Please try again later.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default MailSection;
