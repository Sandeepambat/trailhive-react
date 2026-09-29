import Reveal from './Reveal.jsx';
import Wrapper from '../assets/Wrapper.png';

export default function CtaImage() {
  return (
    <section className="cta-image">
      <div className="container">
        <Reveal as="h2">
          Find new trails to explore and adventures to embark on.
        </Reveal>

        <Reveal className="cta-image__frame" delay={1}>
          <img
            src={Wrapper}
            alt="Two hikers with backpacks walking toward snow-capped mountains"
            className="img-mountains"
          />
        </Reveal>
      </div>
    </section>
  );
}