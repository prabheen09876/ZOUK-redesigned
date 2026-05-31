import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter signup:', email);
      setEmail('');
    }
  };

  return (
    <section className="bg-primary py-16">
      <div className="max-w-xl mx-auto text-center px-6">
        <h2 className="text-white font-headline text-3xl">
          Join the Zouk Tribe
        </h2>
        <p className="text-white/60 text-sm mt-2">
          Get 10% off your first order + early access to new collections
        </p>

        <form onSubmit={handleSubmit} className="flex mt-8 gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-accent-gold"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-accent-gold text-white font-semibold hover:bg-accent-warm transition-colors tracking-wider uppercase text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
