import Reveal from './Reveal.jsx';
import Column from '../assets/Column.png'
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <Reveal className="hero__copy">
          <h1>Your Ultimate Outdoor Companion</h1>
          <p>
            Are you tired of spending hours searching for the perfect hiking or biking trail?
            TrailHive - the ultimate outdoor adventure app that connects you with the best trails
            in your area.
          </p>
          <a href="#download" className="btn btn--light">Download the app</a>
        </Reveal>

        <Reveal className="hero__media" delay={1}>
          <img
            src={Column}
            alt="Hiker standing by a mountain lake"
            className="hero__img img-lake"
          />
        </Reveal>
      </div>
    </section>
  );
}
