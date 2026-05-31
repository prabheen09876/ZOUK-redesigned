import React, { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  { 
    id: 1,
    name: 'Flap Sling Bag', 
    price: 1499, 
    originalPrice: 2999, 
    code: 'FS-001',
    bgColor: '#E8DDD0', 
    imageBg: 'linear-gradient(135deg, #E8DDD0 0%, #D4A373 100%)' 
  },
  { 
    id: 2,
    name: 'Harmony Sling Bag', 
    price: 1799, 
    originalPrice: 3499, 
    code: 'HS-002',
    bgColor: '#F5F1EA', 
    imageBg: 'linear-gradient(135deg, #F5F1EA 0%, #C9A66B 100%)' 
  },
  { 
    id: 3,
    name: 'Everyday Tote Bag', 
    price: 1299, 
    originalPrice: 2499, 
    code: 'ET-003',
    bgColor: '#E2E8F0', 
    imageBg: 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)' 
  },
  { 
    id: 4,
    name: 'Classic Zipper Wallet', 
    price: 799, 
    originalPrice: 1499, 
    code: 'CW-004',
    bgColor: '#F1E9DB', 
    imageBg: 'linear-gradient(135deg, #F1E9DB 0%, #B8956A 100%)' 
  },
];

export default function ProductGrid() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-24 px-4 md:px-8 bg-black overflow-hidden select-none">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6">
        <div>
          <span className="text-red-500 font-body text-xs uppercase tracking-[0.3em] font-semibold block mb-2">
            Selected Bestsellers
          </span>
          <h2 className="font-headline text-4xl md:text-5xl text-white font-bold tracking-tight">
            THE NEW ERA
          </h2>
        </div>
        <p className="text-zinc-400 font-body text-sm max-w-xs mt-4 md:mt-0">
          Handcrafted vegan bags, blending traditional Indian craftsmanship with modern brutalist design aesthetics.
        </p>
      </div>

      {/* Product Grid / Row */}
      <div className="max-w-7xl mx-auto flex gap-4 min-h-[500px]">
        {products.map((product) => {
          const isHovered = hoveredId === product.id;
          const isAnyHovered = hoveredId !== null;

          // Flex sizing logic:
          // Default: flex-1
          // Hovered: grows to 1.4
          // Unhovered when another is hovered: shrinks slightly
          let flexValue = 1;
          if (isHovered) {
            flexValue = 1.4;
          } else if (isAnyHovered) {
            flexValue = 0.86;
          }

          return (
            <motion.div
              key={product.id}
              className="relative overflow-hidden cursor-pointer h-[500px]"
              animate={{ flex: flexValue }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image & Background Wrapper */}
              <div 
                className="w-full h-full relative overflow-hidden bg-zinc-900 border border-white/10"
                style={{ background: product.imageBg }}
              >
                {/* Parallax shift of background text / design pattern */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20"
                  animate={{ x: isHovered ? -40 : 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                >
                  <span className="font-headline text-9xl font-extrabold text-black/40 tracking-wider">
                    {product.code}
                  </span>
                </motion.div>

                {/* Parallax Product Image Placeholder (Using geometric/abstract visual style matching outfit.hellohello.is) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-12"
                  animate={{ x: isHovered ? 30 : 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                >
                  {/* Outer decorative box simulating product silhouette */}
                  <div className="w-2/3 aspect-[3/4] border-4 border-black/80 relative flex items-center justify-center shadow-2xl bg-white/10 backdrop-blur-sm">
                    <span className="font-body text-xs uppercase tracking-widest text-black/80 font-bold">
                      {product.name.split(' ')[0]}
                    </span>
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" />
                  </div>
                </motion.div>

                {/* Sliding Vibrant Red Accent Panel */}
                <motion.div
                  className="absolute inset-y-0 left-0 bg-red-600 z-10 pointer-events-none"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? '28%' : 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />

                {/* Circular "VIEW MORE" CTA Button */}
                <div className="absolute inset-0 flex items-center justify-end pr-12 z-20 pointer-events-none">
                  <motion.div
                    className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center text-center shadow-lg border border-red-500/50"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <span className="text-white font-body text-[10px] font-bold tracking-widest leading-tight block">
                      VIEW<br />MORE
                    </span>
                  </motion.div>
                </div>

                {/* Overlay Card Details at the bottom */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-red-500 text-[10px] uppercase tracking-widest font-semibold mb-1">Zouk Premium</p>
                      <h3 className="text-white font-headline text-lg font-bold tracking-tight">
                        {product.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-sm">₹{product.price.toLocaleString()}</p>
                      <p className="text-zinc-400 text-xs line-through">₹{product.originalPrice.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
