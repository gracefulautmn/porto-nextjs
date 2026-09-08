'use client';

import React, { useState } from 'react';
import profileData from '@/data/profileData';
import { brutalBtnPrimary } from '@/lib/brutalist';

const inputClass =
  'w-full px-space-md py-space-sm bg-surface-container-lowest border-2 border-on-surface ' +
  'font-label-mono text-body-md text-on-surface outline-none ' +
  'focus:bg-tertiary-fixed focus:shadow-[4px_4px_0px_#1b1b1b] transition-all';

const MailSection = () => {
  const { contact } = profileData;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // status ∈ { idle, sending, success, error }
  const [status, setStatus] = useState('idle');

  const isSending = status === 'sending';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guard duplicate submits while a request is in progress.
    if (status === 'sending') return;

    setStatus('sending');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Non-ok response: retain field values.
        setStatus('error');
      }
    } catch {
      // Thrown request (network error): retain field values.
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full py-space-2xl border-t-2 border-on-surface">
      <div className="flex items-center justify-between mb-space-xl">
        <h2 className="font-headline-md text-headline-md text-on-surface uppercase font-bold">
          Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
        {/* Context Details */}
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <p className="font-body-lg text-body-lg text-on-surface">
            Starting a new system project, architecture consultation, or software engineering collaboration opportunity.
          </p>

          <div className="border-2 border-on-surface p-space-md bg-surface-container-low shadow-[4px_4px_0px_#1b1b1b]">
            <div className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-space-2xs">
              DIRECT INBOX
            </div>
            <div className="font-label-mono text-body-md text-on-surface font-bold select-all">
              {contact.email}
            </div>
          </div>

          <div className="border-2 border-on-surface p-space-md bg-surface-container-low shadow-[4px_4px_0px_#1b1b1b]">
            <div className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-space-2xs">
              LOCATION
            </div>
            <div className="font-label-mono text-body-md text-on-surface font-bold">
              {contact.location}
            </div>
          </div>
        </div>

        {/* Minimal Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="border-[2.5px] border-on-surface p-space-xl bg-surface-container-lowest shadow-[6px_6px_0px_#1b1b1b] flex flex-col gap-space-md"
          >
            <div className="flex flex-col gap-space-2xs">
              <label
                htmlFor="name"
                className="font-label-mono text-label-mono uppercase text-on-surface font-bold"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="FULL NAME"
                className={inputClass}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-space-2xs">
              <label
                htmlFor="email"
                className="font-label-mono text-label-mono uppercase text-on-surface font-bold"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="EMAIL"
                className={inputClass}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-space-2xs">
              <label
                htmlFor="message"
                className="font-label-mono text-label-mono uppercase text-on-surface font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="PLEASE DESCRIBE YOUR REQUIREMENTS OR QUESTIONS ABOUT THE SYSTEM IN DETAIL..."
                className={`${inputClass} resize-none`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="pt-space-xs">
              <button
                type="submit"
                className={`${brutalBtnPrimary} w-full font-headline-sm text-headline-sm uppercase px-space-xl py-space-md font-bold`}
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send a Message'}
              </button>
            </div>

            {status === 'success' && (
              <div className="font-label-mono text-label-mono p-space-sm border-2 border-on-surface bg-tertiary-fixed text-on-surface text-center">
                MESSAGE SUCCESSFULLY SENT.
              </div>
            )}
            {status === 'error' && (
              <div className="font-label-mono text-label-mono p-space-sm border-2 border-on-surface bg-secondary-container text-on-surface text-center">
                AN ERROR OCCURRED. PLEASE TRY AGAIN.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default MailSection;
