export default function IntroOverlay({ phase }) {
  const isFading = phase === 'morphing' || phase === 'ready';

  return (
    <div className={`intro-overlay ${isFading ? 'intro-overlay--fading' : ''}`}>
      {/* Subtle dot pattern */}
      <div className="intro-overlay__pattern" />

      {/* Corner accents */}
      <div className="intro-overlay__corner intro-overlay__corner--tl" />
      <div className="intro-overlay__corner intro-overlay__corner--br" />
    </div>
  );
}
