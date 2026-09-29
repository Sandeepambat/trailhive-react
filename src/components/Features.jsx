import Reveal from './Reveal.jsx';
import Image from '../assets/Image.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image Wrapper.png';

const FEATURES = [
  {
    id: 'dawn',
    img: Image,
    alt: 'Hiker silhouette at dawn',
    title: 'Access nature',
    text: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
  {
    id: 'sun',
    img: Image2,
    alt: 'Hiker walking toward the sun',
    title: 'Access nature',
    text: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
  {
    id: 'gear',
    img: Image3,
    alt: 'Hiking gear and backpack on rocks',
    title: 'Access nature',
    text: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container features__inner">
      

        <div className="features__grid">
            <Reveal className="features__head">
          <span className="eyebrow">Features</span>
          <h2>Stay Active and Healthy</h2>
          <a href="#learn" className="btn btn--dark">Learn more</a>
        </Reveal>
          {FEATURES.map((feature, i) => (
            <Reveal as="article" key={feature.id} className="feature-card" delay={Math.min(i + 1, 3)}>
              <img className="feature-card__img" src={feature.img} alt={feature.alt} loading="lazy" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}