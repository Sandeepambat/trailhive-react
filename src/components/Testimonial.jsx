import Reveal from './Reveal.jsx'

const LOGOS = [
  'DELL',
  'zendesk',
  'Rakuten',
  'Pacific Funds',
  'NCR',
  'Lattice',
  'TED',
]

export default function Testimonial({
  quote,
  author,
  photo = false,
  showLogos = false,
  ctaLabel,
  bgImage,
}) {
  return (
    <section
      className={`testimonial ${photo ? 'testimonial--photo' : ''}`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : undefined
      }
    >
      <div className="container">
        <Reveal as="span" className="eyebrow eyebrow--light">
          TESTIMONIAL
        </Reveal>

        <Reveal as="blockquote" className="ailgn-center" delay={1}>
          “{quote}”
        </Reveal>

        <Reveal as="p" className="testimonial__author" delay={1}>
          — {author}
        </Reveal>

        {ctaLabel && (
          <Reveal as="a" href="#learn" className="btn btn--light" delay={2}>
            {ctaLabel}
          </Reveal>
        )}

        {showLogos && (
          <Reveal className="logos" delay={2}>
            <p className="logos__label">
              Trusted by teams at over <strong>1,000</strong> of the
              world&apos;s leading organizations
            </p>

            <ul className="logos__row">
              {LOGOS.map((logo) => (
                <li key={logo}>{logo}</li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}