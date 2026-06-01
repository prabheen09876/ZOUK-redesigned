import { useState, useEffect, useRef } from 'react';

export default function LoadingScreen({ onMorphStart, onFinish, brandHeroRef }) {
  const [phase, setPhase] = useState('enter'); // enter → reveal → morph
  const wordRef = useRef(null);

  useEffect(() => {
    const timers = [
      // Phase 2: shimmer + tagline
      setTimeout(() => setPhase('reveal'), 1400),
      // Phase 3: morph into BrandHero
      setTimeout(() => {
        setPhase('morph');
        onMorphStart?.();
      }, 2800),
      // Done: remove from DOM
      setTimeout(() => onFinish?.(), 4200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish, onMorphStart]);

  // When morph starts, measure BrandHero and compute transform
  useEffect(() => {
    if (phase === 'morph' && brandHeroRef?.current && wordRef.current) {
      const heroEl = brandHeroRef.current;
      const wordEl = wordRef.current;

      const heroRect = heroEl.getBoundingClientRect();
      const wordRect = wordEl.getBoundingClientRect();

      // Find the h2 inside BrandHero for accurate text sizing
      const heroText = heroEl.querySelector('.brand-hero__text');
      const heroTextRect = heroText
        ? heroText.getBoundingClientRect()
        : heroRect;

      // Calculate vertical offset: center of BrandHero text - center of loading text
      const heroCenter = heroTextRect.top + heroTextRect.height / 2;
      const wordCenter = wordRect.top + wordRect.height / 2;
      const deltaY = heroCenter - wordCenter;

      // Calculate scale factor
      const scale = heroTextRect.height / wordRect.height;

      // Set CSS custom properties for the morph animation
      wordEl.style.setProperty('--morph-y', `${deltaY}px`);
      wordEl.style.setProperty('--morph-scale', `${Math.min(scale, 3)}`);
    }
  }, [phase, brandHeroRef]);

  const isRevealed = phase === 'reveal' || phase === 'morph';

  return (
    <div className={`loading-screen loading-screen--${phase}`}>
      {/* Subtle background pattern */}
      <div className="loading-screen__pattern" />

      {/* Center content */}
      <div className="loading-screen__content">
        {/* The ZOUK letters */}
        <div ref={wordRef} className="loading-screen__word" aria-label="ZOUK">
          {'ZOUK'.split('').map((letter, i) => (
            <span
              key={i}
              className="loading-screen__letter"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {letter}
            </span>
          ))}

          {/* Gold shimmer overlay */}
          <div
            className={`loading-screen__shimmer ${isRevealed ? 'loading-screen__shimmer--active' : ''}`}
          />
        </div>

        {/* Animated underline */}
        <div
          className={`loading-screen__line ${isRevealed ? 'loading-screen__line--active' : ''}`}
        />

        {/* Tagline */}
        <p
          className={`loading-screen__tagline ${phase === 'reveal' ? 'loading-screen__tagline--active' : ''}`}
        >
          Crafted with Purpose
        </p>
      </div>

      {/* Corner accents */}
      <div className="loading-screen__corner loading-screen__corner--tl" />
      <div className="loading-screen__corner loading-screen__corner--br" />
    </div>
  );
}
