import React from 'react';

const footerLinks = {
  shop: [
    'Bags',
    'Wallets',
    'Backpacks',
    'Footwear',
    'Travel Collection',
    'Gift Shop',
  ],
  help: [
    'Track Order',
    'Returns & Exchange',
    'FAQs',
    'Contact Us',
    'Size Guide',
  ],
  about: [
    'Our Story',
    'Sustainability',
    'Store Locator',
    'Zouk Tribe',
    'Careers',
  ],
};

const socialLinks = ['Instagram', 'Facebook', 'Twitter', 'YouTube'];

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-xs uppercase tracking-widest text-accent-gold mb-6">
      {title}
    </h4>
    <nav className="flex flex-col">
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="text-sm text-white/60 hover:text-white transition-colors block mb-3"
        >
          {link}
        </a>
      ))}
    </nav>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-headline text-2xl text-white font-bold mb-4">
              ZOUK
            </h3>
            <p className="text-sm text-white/50 mb-6">
              Crafting the modern Indian lifestyle
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-white/60 hover:text-accent-gold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <FooterColumn title="Shop" links={footerLinks.shop} />

          {/* Help Column */}
          <FooterColumn title="Help" links={footerLinks.help} />

          {/* About Column */}
          <FooterColumn title="About" links={footerLinks.about} />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; 2024 Zouk. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Visa &bull; Mastercard &bull; UPI &bull; RuPay
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
