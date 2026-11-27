import Reveal from './Reveal.jsx'
import { DoodleArrow } from './Doodles.jsx'

const FACTS = [
  ['Name', 'Raditha'],
  ['The occasion', 'Birthday'],
  ['The date', '10 December 2026'],
  ['Role', 'The main character'],
]

export default function EditorialSection() {
  return (
    <section id="person" className="section person">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="label sec-head__label">01 — The Person</span>
          <span className="sec-head__line" />
          <span className="sec-head__page">p. 02</span>
        </Reveal>

        <div className="person__grid">
          <div className="person__copy">
            <Reveal as="h2" className="sec-title person__title">
              Meet the
              <br />
              <em>person</em> of the day.
            </Reveal>

            <Reveal as="p" className="person__lede" delay={110}>
              Today’s issue is dedicated to someone who deserves her own little corner of
              the universe. So we printed a whole magazine about her — the laugh, the little
              rituals, the ordinary days that somehow became the good stuff.
            </Reveal>

            <Reveal as="div" className="person__facts" delay={200}>
              <dl style={{ margin: 0 }}>
                {FACTS.map(([term, value]) => (
                  <div className="person__fact" key={term}>
                    <dt>{term}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="person__quote" delay={280}>
              <DoodleArrow />
              <p>the main character of today.</p>
            </Reveal>
          </div>

          <div className="person__media">
            <span className="person__ghost" aria-hidden="true">
              R
            </span>

            <Reveal as="figure" className="person__photo" direction="right" delay={120}>
              <img src="/images/raditha-3.jpg" alt="Raditha with a giant Lotso plush" />
              <figcaption>
                <span>
                  Fig. 01 — the birthday person
                  <br />
                  photographed in her element
                </span>
                <em>in her element</em>
              </figcaption>
              <span className="tape tape--top" aria-hidden="true" />
            </Reveal>

            <span className="stamp stamp--round person__stamp" aria-hidden="true">
              Special
              <br />
              Edition
              <br />
              2026
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
