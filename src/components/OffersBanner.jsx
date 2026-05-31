import React from 'react';

const offers = [
  { text: 'Buy 1 Get 1', icon: '🎁' },
  { text: 'Office Bags Starting ₹1499', icon: '💼' },
  { text: 'Backpacks Up To 50% Off', icon: '🎒' },
  { text: 'Wallet BOGO', icon: '👛' },
];

export default function OffersBanner() {
  return (
    <section className="w-full overflow-x-auto scrollbar-none">
      <div className="flex min-w-max md:min-w-0 md:grid md:grid-cols-4">
        {offers.map((offer, index) => {
          const isDark = index % 2 === 0;

          return (
            <div
              key={offer.text}
              className={`
                flex-shrink-0 w-64 md:w-auto px-8 py-5 text-center cursor-pointer
                transition-all duration-300 hover:opacity-90
                ${isDark ? 'bg-primary' : 'bg-accent-gold'}
                ${index < offers.length - 1 ? (isDark ? 'border-r border-white/10' : 'border-r border-black/10') : ''}
              `}
            >
              <div className="text-2xl mb-1">{offer.icon}</div>
              <p className="font-headline text-lg text-white whitespace-nowrap">
                {offer.text}
              </p>
              <span className="text-xs text-white/70 uppercase tracking-wider mt-1 block">
                Shop Now →
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
