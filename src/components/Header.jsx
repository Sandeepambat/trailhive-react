import { useEffect, useState } from 'react';
import Vector from '../assets/Vector.png'


const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#blog', label: 'Blog' },
  { href: '#about', label: 'About us' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} id="siteHeader">
      <div className="container header__inner">
        <a href="#top" className="logo">

          <img
            src={Vector}
            alt="Logo"
          />
          <span>TrailHive</span>
        </a>

        <nav className="nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="#contact" className="btn btn--outline">Contact us</a>
          <a href="#download" className="btn btn--dark">Download the app</a>
        </div>

        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-nav ${open ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <a href="#contact" className="btn btn--outline" onClick={closeMenu}>Contact us</a>
        <a href="#download" className="btn btn--dark" onClick={closeMenu}>Download the app</a>
      </div>
    </header>
  );
}
