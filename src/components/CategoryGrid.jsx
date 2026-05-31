import React from 'react';

const categories = [
  { name: 'Sling Bags', span: 'col-span-2', angle: 'bg-gradient-to-br' },
  { name: 'Office Bags', span: 'col-span-1', angle: 'bg-gradient-to-tr' },
  { name: 'Tote Bags', span: 'col-span-1', angle: 'bg-gradient-to-bl' },
  { name: 'Wallets', span: 'col-span-1', angle: 'bg-gradient-to-tl' },
  { name: 'Backpacks', span: 'col-span-2', angle: 'bg-gradient-to-r' },
  { name: 'Travel', span: 'col-span-1', angle: 'bg-gradient-to-b' },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="font-headline text-2xl md:text-3xl uppercase tracking-widest text-primary">
          Shop by Category
        </h2>
        <div className="w-16 h-0.5 bg-accent-gold mx-auto mt-3" />
      </div>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className={`category-card relative overflow-hidden rounded-lg aspect-[4/3] ${cat.span} group cursor-pointer`}
          >
            {/* Gradient Background as Image Placeholder */}
            <div
              className={`category-image absolute inset-0 ${cat.angle} from-accent-gold to-accent-warm transition-transform duration-500`}
            />

            {/* Decorative Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-headline text-6xl md:text-8xl font-bold select-none whitespace-nowrap">
                ZOUK
              </div>
            </div>

            {/* Dark Gradient Overlay for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Category Info */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
              <h3 className="text-white font-headline text-lg md:text-xl">
                {cat.name}
              </h3>
              <span className="category-cta text-accent-gold text-sm tracking-wider transition-all duration-300 whitespace-nowrap">
                Shop Now →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
