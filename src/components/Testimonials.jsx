import React from 'react';

const testimonials = [
  {
    text: 'The quality of my Zouk bag is absolutely stunning. It perfectly blends Indian craftsmanship with modern design.',
    name: 'Priya S.',
    product: 'Flap Sling Bag',
  },
  {
    text: 'I get compliments every single day! The patterns are so unique and the material feels premium.',
    name: 'Ananya M.',
    product: 'Everyday Tote Bag',
  },
  {
    text: 'Finally, a brand that celebrates Indian artistry without compromising on contemporary style.',
    name: 'Ritu K.',
    product: 'Classic Zipper Wallet',
  },
];

const StarRating = () => (
  <div className="text-accent-gold text-lg mb-4">★★★★★</div>
);

const Testimonials = () => {
  const pressMentions =
    'Featured in Vogue India • Elle • Cosmopolitan • Femina • GQ India • Grazia • Harper\u2019s Bazaar';

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="font-headline text-3xl text-center uppercase tracking-widest text-primary">
          Loved by Our Tribe
        </h2>
        <div className="w-16 h-0.5 bg-accent-gold mx-auto mt-3 mb-12" />

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-border-color rounded-xl p-8 hover:shadow-lg transition-all"
            >
              <StarRating />
              <p className="italic text-text-gray leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="w-12 h-px bg-accent-gold my-4" />
              <p className="font-semibold text-primary">{testimonial.name}</p>
              <p className="text-sm text-text-gray">{testimonial.product}</p>
            </div>
          ))}
        </div>

        {/* Press Mentions Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-text-gray/40 text-sm uppercase tracking-[0.3em] mx-4">
              {pressMentions}
            </span>
            <span className="text-text-gray/40 text-sm uppercase tracking-[0.3em] mx-4">
              {pressMentions}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
