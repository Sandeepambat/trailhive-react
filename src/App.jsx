import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Testimonial from './components/Testimonial.jsx';
import CtaImage from './components/CtaImage.jsx';
import Footer from './components/Footer.jsx';
import bgimage from './assets/bgimage.png';

export default function App() {
  // Smooth-scroll for in-page anchors (nav, CTAs, footer links)
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />

        <Testimonial
          quote="TrailHive has completely changed the way I explore the outdoors. The personalized trail recommendations and virtual challenges have kept me motivated and engaged with my adventures."
          author="John R."
          showLogos
        />

        <CtaImage />

      <Testimonial
  quote="I love the social networking aspect of TrailHive. It's great to connect with other hikers and bikers and plan group events together."
  author="Sara L."
  ctaLabel="Learn More"
  photo
  bgImage={bgimage}
/>
      </main>

      <Footer />
    </>
  );
}
