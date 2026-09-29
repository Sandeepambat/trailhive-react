import { useState } from 'react';
import logo from '../assets/logo.png'

const APP_LINKS = ['Features', 'Benefits', 'Pricing', 'Explore', 'Trails'];
const COMPANY_LINKS = ['About', 'Jobs', 'Press', 'Support', 'Members'];

const SOCIALS = [
  {
    label: 'Facebook',
    path: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.2c2.7 0 3 .01 4.12.06 1.11.05 1.87.23 2.53.48.68.27 1.26.62 1.83 1.19.57.57.92 1.15 1.19 1.83.25.66.43 1.42.48 2.53.05 1.12.06 1.42.06 4.12s-.01 3-.06 4.12c-.05 1.11-.23 1.87-.48 2.53-.27.68-.62 1.26-1.19 1.83-.57.57-1.15.92-1.83 1.19-.66.25-1.42.43-2.53.48-1.12.05-1.42.06-4.12.06s-3-.01-4.12-.06c-1.11-.05-1.87-.23-2.53-.48-.68-.27-1.26-.62-1.83-1.19-.57-.57-.92-1.15-1.19-1.83-.25-.66-.43-1.42-.48-2.53C2.21 15 2.2 14.7 2.2 12s.01-3 .06-4.12c.05-1.11.23-1.87.48-2.53.27-.68.62-1.26 1.19-1.83.57-.57 1.15-.92 1.83-1.19.66-.25 1.42-.43 2.53-.48C9 2.21 9.3 2.2 12 2.2Zm0 1.8c-2.65 0-2.97.01-4.01.06-.97.04-1.5.21-1.85.34-.46.18-.79.4-1.14.75-.35.35-.57.68-.75 1.14-.13.35-.3.88-.34 1.85-.05 1.04-.06 1.36-.06 4.01s.01 2.97.06 4.01c.04.97.21 1.5.34 1.85.18.46.4.79.75 1.14.35.35.68.57 1.14.75.35.13.88.3 1.85.34 1.04.05 1.36.06 4.01.06s2.97-.01 4.01-.06c.97-.04 1.5-.21 1.85-.34.46-.18.79-.4 1.14-.75.35-.35.57-.68.75-1.14.13-.35.3-.88.34-1.85.05-1.04.06-1.36.06-4.01s-.01-2.97-.06-4.01c-.04-.97-.21-1.5-.34-1.85a3.06 3.06 0 0 0-.75-1.14 3.06 3.06 0 0 0-1.14-.75c-.35-.13-.88-.3-1.85-.34-1.04-.05-1.36-.06-4.01-.06Zm0 3.07a4.93 4.93 0 1 1 0 9.86 4.93 4.93 0 0 1 0-9.86Zm0 1.8a3.13 3.13 0 1 0 0 6.26 3.13 3.13 0 0 0 0-6.26Zm5.13-1.99a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z',
  },
  {
    label: 'Twitter',
    path: 'M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.14 12.14 0 0 1 3.15 4.9a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.22-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.2c-.63.17-1.3.2-1.98.07a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 22.46 6Z',
  },
  {
    label: 'LinkedIn',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.62c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z',
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }
    setSuccess('Thanks — you\u2019re on the list!');
    setEmail('');
    setTimeout(() => setSuccess(''), 4000);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#top" className="logo logo--footer">
            <img
  src={logo}
  alt="Logo"
  className="h-6 w-auto brightness-0 invert"
/>
            <span>TrailHive</span>
          </a>
        </div>

        <nav className="footer__col">
          <h4>App</h4>
          {APP_LINKS.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`}>{label}</a>
          ))}
        </nav>

        <nav className="footer__col">
          <h4>Company</h4>
          {COMPANY_LINKS.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`}>{label}</a>
          ))}
        </nav>

        <form className="footer__subscribe" onSubmit={handleSubmit} noValidate>
          <div className="footer__subscribe-row">
            <label htmlFor="subscribeEmail" className="sr-only">Email address</label>
            <input
              type="email"
              id="subscribeEmail"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn--light">Subscribe</button>
          </div>
          <p className="footer__subscribe-note">
            By subscribing you agree with our <a href="#privacy">Privacy Policy</a>
          </p>
          <p className="footer__subscribe-success" role="status" aria-live="polite">{success}</p>
        </form>
      </div>

      <div className="container footer__bottom">
        <p>© 2023 TrailHive. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookies Settings</a>
        </div>
        <div className="footer__social">
          {SOCIALS.map((social) => (
            <a key={social.label} href="#" aria-label={social.label}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
