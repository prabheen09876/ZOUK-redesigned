import { useState, useEffect } from 'react'

const navLinks = [
  'Hot Bag Summer',
  'Bags',
  'Wallets',
  'Backpacks',
  'Zouk For Men',
  'Travel',
  'Gift Shop',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav className="sticky top-0 z-50 bg-primary border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Left — placeholder for spacing */}
          <div />

          {/* Center — Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-sm uppercase tracking-wider text-secondary hover:text-accent-gold transition-colors duration-200 whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right — Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search */}
            <button
              aria-label="Search"
              className="p-2 text-secondary hover:text-accent-gold transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                search
              </span>
            </button>

            {/* Account */}
            <button
              aria-label="Account"
              className="p-2 text-secondary hover:text-accent-gold transition-colors duration-200 hidden sm:block"
            >
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                person
              </span>
            </button>

            {/* Cart */}
            <button
              aria-label="Cart"
              className="p-2 text-secondary hover:text-accent-gold transition-colors duration-200 relative"
            >
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                shopping_bag
              </span>
              <span className="absolute -top-0.5 -right-0.5 bg-accent-gold text-white text-[10px] font-bold font-body w-4.5 h-4.5 flex items-center justify-center rounded-full leading-none">
                2
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              aria-label="Menu"
              className="lg:hidden p-2 text-secondary hover:text-accent-gold transition-colors duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-40 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-1 border-t border-border-color">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              className="font-body text-base uppercase tracking-wider text-primary hover:text-accent-gold transition-all duration-200 py-3 border-b border-border-color/50"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}

          {/* Mobile Account Link */}
          <a
            href="#"
            className="flex items-center gap-3 font-body text-base uppercase tracking-wider text-primary hover:text-accent-gold transition-all duration-200 py-3 mt-4"
            onClick={() => setMobileOpen(false)}
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
              person
            </span>
            My Account
          </a>
        </div>
      </div>
    </nav>
  )
}
