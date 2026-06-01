import { useState } from 'react';

const bannerItems = [
  {
    id: 1,
    name: 'Sling Bags',
    tag: 'Best Seller',
    image: '/images/banner/sling-bag.png',
    color: '#E8DDD0',
  },
  {
    id: 2,
    name: 'Tote Bags',
    tag: 'New Arrival',
    image: '/images/banner/tote-bag.png',
    color: '#C4D7E0',
  },
  {
    id: 3,
    name: 'Wallets',
    tag: 'Top Rated',
    image: '/images/banner/wallet.png',
    color: '#2D4A3E',
  },
  {
    id: 4,
    name: 'Office Bags',
    tag: 'Professional',
    image: '/images/banner/office-bag.png',
    color: '#4A4A4A',
  },
  {
    id: 5,
    name: 'Backpacks',
    tag: 'Trending',
    image: '/images/banner/backpack.png',
    color: '#C4886B',
  },
  {
    id: 6,
    name: 'Crossbody',
    tag: 'Everyday',
    image: '/images/banner/crossbody.png',
    color: '#D4B8D0',
  },
  {
    id: 7,
    name: 'Travel Bags',
    tag: 'Adventure',
    image: '/images/banner/travel-bag.png',
    color: '#8B9E6B',
  },
  {
    id: 8,
    name: 'Clutches',
    tag: 'Evening',
    image: '/images/banner/clutch.png',
    color: '#1B2A4A',
  },
  {
    id: 9,
    name: 'Messenger',
    tag: 'Heritage',
    image: '/images/banner/messenger.png',
    color: '#A67B5B',
  },
  {
    id: 10,
    name: 'Laptop Sleeves',
    tag: 'Tech',
    image: '/images/banner/laptop-sleeve.png',
    color: '#3A4A5A',
  },
];

export default function CuratedBanner() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-20 px-4 md:px-8 bg-light-bg overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-10 flex items-end justify-between">
        <div>
          <span className="font-body text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold block mb-2">
            Handpicked for You
          </span>
          <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold tracking-tight italic">
            Zouk's Curated Picks
          </h2>
        </div>
        <a
          href="#"
          className="font-body text-sm text-primary underline underline-offset-4 decoration-accent-gold hover:text-accent-gold transition-colors duration-300 hidden sm:block"
        >
          View all
        </a>
      </div>

      {/* Banner Strip Container */}
      <div className="max-w-7xl mx-auto">
        <div
          className="curated-banner-strip"
          onMouseLeave={() => setHoveredId(null)}
        >
          {bannerItems.map((item) => {
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                className={`curated-card ${isHovered ? 'curated-card--active' : ''}`}
                style={{
                  '--card-color': item.color,
                }}
                onMouseEnter={() => setHoveredId(item.id)}
              >
                {/* Card Image */}
                <div className="curated-card__image-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="curated-card__image"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay content */}
                <div className="curated-card__overlay">
                  <span className="curated-card__tag">{item.tag}</span>
                  <h3 className="curated-card__name">{item.name}</h3>
                  <span className="curated-card__cta">
                    Explore
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>

                {/* Side label (visible when collapsed) */}
                <div className="curated-card__side-label">
                  <span>{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
