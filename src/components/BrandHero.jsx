import { forwardRef } from 'react';

const BrandHero = forwardRef(function BrandHero({ loadingPhase }, ref) {
  const isAnimating = loadingPhase && loadingPhase !== 'ready';
  const isRevealed = loadingPhase === 'reveal' || loadingPhase === 'morphing';
  const isMorphing = loadingPhase === 'morphing';

  return (
    <div
      ref={ref}
      className={`brand-hero w-full bg-primary overflow-hidden select-none ${isAnimating ? 'brand-hero--loading' : ''}`}
      style={{ lineHeight: 0.88 }}
    >
      <h2
        className="brand-hero__text"
        style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 'clamp(18vw, 22vw, 26vw)',
          color: '#F5F1EA',
          letterSpacing: '-0.01em',
          lineHeight: 0.88,
          margin: 0,
          padding: '0.04em 0.04em 0',
          width: '100%',
          textAlign: 'center',
          display: 'block',
          position: 'relative',
        }}
      >
        {'ZOUK'.split('').map((letter, i) => (
          <span
            key={i}
            className={`brand-hero__letter ${isAnimating ? 'brand-hero__letter--animate' : ''}`}
            style={isAnimating ? { animationDelay: `${i * 0.12}s` } : undefined}
          >
            {letter}
          </span>
        ))}

        {/* Gold shimmer sweep over text */}
        {isAnimating && (
          <span
            className={`brand-hero__shimmer ${isRevealed ? 'brand-hero__shimmer--active' : ''}`}
          />
        )}
      </h2>

      {/* Loading decorations below the text */}
      {isAnimating && (
        <div
          className={`brand-hero__loading-extras ${isMorphing ? 'brand-hero__loading-extras--exit' : ''}`}
        >
          <div
            className={`brand-hero__load-line ${isRevealed ? 'brand-hero__load-line--active' : ''}`}
          />
          <p
            className={`brand-hero__load-tagline ${loadingPhase === 'reveal' ? 'brand-hero__load-tagline--active' : ''}`}
          >
            Crafted with Purpose
          </p>
        </div>
      )}
    </div>
  );
});

export default BrandHero;
