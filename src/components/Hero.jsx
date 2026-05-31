export default function Hero() {
  return (
    <section className="relative min-h-screen bg-light-bg overflow-hidden flex items-center">
      {/* Subtle geometric pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #C9A66B 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #C9A66B 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-bl from-accent-gold/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] py-20">
          {/* Left — Editorial Text Content */}
          <div className="flex flex-col justify-center">
            {/* Small tag */}
            <div className="animate-fade-up delay-100">
              <span className="inline-block font-body text-xs uppercase tracking-[0.3em] text-accent-gold font-medium mb-6">
                New Collection 2026
              </span>
            </div>

            {/* Main Headline */}
            <div className="animate-fade-up delay-200">
              <h1 className="font-headline leading-[0.9] tracking-tight text-primary">
                <span className="block text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5.5vw]">
                  HOT BAG
                </span>
                <span className="block text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5.5vw] italic text-accent-gold">
                  SUMMER
                </span>
              </h1>
            </div>

            {/* Gold accent line */}
            <div className="animate-fade-up delay-300">
              <div className="w-16 h-[2px] bg-accent-gold mt-8 mb-6" />
            </div>

            {/* Subtitle */}
            <div className="animate-fade-up delay-400">
              <p className="font-body text-lg sm:text-xl text-text-gray max-w-md leading-relaxed">
                Discover the collection that defines your style — handcrafted
                bags rooted in Indian artistry.
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-up delay-500 mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-accent-gold text-white font-body text-sm uppercase tracking-widest px-8 py-4 hover:bg-primary transition-all duration-300 group"
              >
                Shop the Collection
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Right — Lifestyle Image Placeholder */}
          <div className="relative hidden lg:flex items-center justify-center animate-fade-up delay-300">
            <div className="relative w-full max-w-lg aspect-[3/4]">
              {/* Main image placeholder with warm gradient */}
              <div className="absolute inset-0 rounded-sm overflow-hidden">
                <div
                  className="w-full h-full"
                  style={{
                    background: `
                      linear-gradient(145deg, 
                        #E8DDD0 0%, 
                        #D4A373 30%, 
                        #C9A66B 60%, 
                        #B8956A 100%
                      )
                    `,
                  }}
                />
                {/* Decorative overlay shapes */}
                <div className="absolute inset-0">
                  <div className="absolute top-[15%] left-[10%] w-24 h-32 border border-white/20 rotate-6" />
                  <div className="absolute bottom-[20%] right-[15%] w-20 h-28 border border-white/15 -rotate-3" />
                  <div className="absolute top-[40%] right-[25%] w-3 h-3 bg-white/30 rounded-full" />
                  <div className="absolute bottom-[35%] left-[30%] w-2 h-2 bg-white/20 rounded-full" />
                </div>
                {/* Caption overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/30 to-transparent">
                  <p className="font-headline text-white text-lg italic">
                    Crafted with Purpose
                  </p>
                  <p className="font-body text-white/80 text-xs uppercase tracking-widest mt-1">
                    Summer 2026
                  </p>
                </div>
              </div>

              {/* Floating decorative element */}
              <div className="absolute -top-6 -right-6 w-28 h-28 border border-accent-gold/30" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent-gold/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up delay-500">
        <div className="flex flex-col items-center gap-2 text-text-gray">
          <span className="font-body text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-8 bg-accent-gold/50 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
