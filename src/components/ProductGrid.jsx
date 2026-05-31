import React from 'react';

const products = [
  { name: 'Flap Sling Bag', price: 1499, originalPrice: 2999, rating: 4.5, colors: ['#C9A66B', '#000000', '#8B4513'] },
  { name: 'Harmony Sling Bag', price: 1799, originalPrice: 3499, rating: 4.7, colors: ['#C9A66B', '#800020'] },
  { name: 'Everyday Tote Bag', price: 1299, originalPrice: 2499, rating: 4.6, colors: ['#2F4F4F', '#C9A66B', '#000000'] },
  { name: 'Classic Zipper Wallet', price: 799, originalPrice: 1499, rating: 4.8, colors: ['#C9A66B', '#800020', '#000080'] },
  { name: 'Amalia Daypack', price: 2499, originalPrice: 4999, rating: 4.5, colors: ['#000000', '#C9A66B'] },
  { name: 'Ira Handbag', price: 1999, originalPrice: 3999, rating: 4.4, colors: ['#C9A66B', '#8B4513'] },
  { name: 'Statement Office Bag', price: 2999, originalPrice: 5499, rating: 4.6, colors: ['#000000', '#2F4F4F'] },
  { name: 'Shoulder Bag', price: 1599, originalPrice: 2999, rating: 4.3, colors: ['#C9A66B', '#000000', '#800020'] },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1 mt-1">
      <div className="flex">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`text-xs ${i < fullStars ? 'text-accent-gold' : i === fullStars && hasHalf ? 'text-accent-gold' : 'text-border-color'}`}
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-xs text-text-gray">{rating}</span>
    </div>
  );
}

function ProductCard({ product }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border-color">
      {/* Image Area */}
      <div className="aspect-[3/4] bg-gradient-to-br from-light-bg to-accent-warm/10 relative overflow-hidden">
        {/* Placeholder Branding */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-headline text-5xl md:text-6xl text-accent-gold/15 font-bold select-none tracking-wider">
            ZOUK
          </span>
        </div>

        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-sale text-white text-xs font-semibold px-2 py-1 rounded">
          {discount}% OFF
        </div>

        {/* Quick Add Button */}
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 text-sm font-medium rounded opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent-gold cursor-pointer whitespace-nowrap">
          Quick Add
        </button>
      </div>

      {/* Details Area */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-xs text-accent-gold uppercase tracking-wider font-medium">Zouk</p>

        {/* Product Name */}
        <h3 className="text-sm font-medium mt-1 text-primary leading-snug">
          {product.name}
        </h3>

        {/* Rating */}
        <StarRating rating={product.rating} />

        {/* Pricing */}
        <div className="flex items-center gap-2 mt-2">
          <span className="font-semibold text-primary">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-text-gray line-through">₹{product.originalPrice.toLocaleString()}</span>
        </div>

        {/* Color Swatches */}
        <div className="flex gap-1.5 mt-3">
          {product.colors.map((color, i) => (
            <button
              key={i}
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm cursor-pointer transition-transform hover:scale-125"
              style={{ backgroundColor: color }}
              aria-label={`Color ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-light-bg">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl text-primary">
          BESTSELLERS
        </h2>
        <p className="text-text-gray mt-2 font-body">Curated for you</p>
        <div className="w-16 h-0.5 bg-accent-gold mx-auto mt-3" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-block border-2 border-primary text-primary px-10 py-3 text-sm uppercase tracking-wider font-medium hover:bg-primary hover:text-white transition-all duration-300"
        >
          View All Products
        </a>
      </div>
    </section>
  );
}
