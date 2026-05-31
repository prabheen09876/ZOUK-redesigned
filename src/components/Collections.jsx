import React from 'react';

const collections = [
  {
    name: 'Rhea Kapoor × Zouk',
    tagline: 'Celebrity Glamour Meets Indian Craft',
    gradient: 'bg-gradient-to-br from-amber-800 via-rose-700 to-amber-900',
  },
  {
    name: 'Alt by Zouk',
    tagline: 'Contemporary. Minimal. Bold.',
    gradient: 'bg-gradient-to-tl from-stone-800 via-zinc-600 to-stone-900',
  },
  {
    name: '1991 by Zouk',
    tagline: 'Heritage Vintage Collection',
    gradient: 'bg-gradient-to-tr from-amber-900 via-yellow-800 to-orange-900',
  },
];

const Collections = () => {
  return (
    <section className="bg-light-bg py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="font-headline text-3xl text-center uppercase tracking-widest text-primary">
          Curated Collections
        </h2>
        <div className="w-16 h-0.5 bg-accent-gold mx-auto mt-3 mb-12" />

        {/* Collection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
            >
              {/* Aspect Ratio Container */}
              <div className="aspect-[4/5]">
                {/* Gradient Background (placeholder for image) */}
                <div
                  className={`absolute inset-0 ${collection.gradient} transition-transform duration-700 group-hover:scale-105`}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-headline text-white text-2xl mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {collection.tagline}
                  </p>
                  <span className="text-accent-gold text-sm tracking-wider group-hover:tracking-widest transition-all">
                    Explore Collection →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
