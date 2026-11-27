import Reveal from './Reveal.jsx'
import { DoodleArrow, CurvedArrowDown } from './Doodles.jsx'

const HEADLINES = [
  'The art of being you',
  'Memories in motion',
  'Another year, another story',
  'Collecting little moments',
  '10 December — a day worth keeping',
  'This issue is all about you',
]

export default function MagazineCover({ onOpen, ready }) {
  return (
    <section id="cover" className={`cover ${ready ? 'is-ready' : ''}`} aria-label="Magazine cover">
      <div className="cover__frame" aria-hidden="true" />
      <div className="wrap cover__inner">
        <header className="cover__masthead">
          <span>An independent occasion</span>
          <span>The birthday issue</span>
          <span>Vol. 01 — Dec. 10. 2026</span>
        </header>

        <div className="cover__stage">
          <div className="cover__copy">
            <div className="cover__eyebrow">
              <i />
              <span className="label label--accent">Special edition</span>
            </div>

            <h1 className="cover__title">RADITHA</h1>

            <div className="cover__sublabel">
              <i />
              <span>The Birthday Issue</span>
            </div>

            <p className="cover__quote">
              “growing up,
              <br />
              one page at a time.”
            </p>

            <p className="cover__support">
              A little celebration of someone worth celebrating.
            </p>

            <div className="cover__actions">
              <button type="button" className="btn btn--solid" onClick={onOpen}>
                Open the issue
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </button>
              <span className="cover__note" aria-hidden="true">
                for you, always
                <DoodleArrow />
              </span>
            </div>
          </div>

          <div className="cover__visual">
            <div className="cover__photo">
              <img
                src="/images/raditha-2.jpg"
                alt="Close-up portrait of Raditha for the birthday issue"
              />
              <div className="cover__photo-cap">
                <span>
                  Raditha
                  <br />
                  December 2026
                </span>
                <em>a good day</em>
              </div>
              <span className="tape tape--tl" aria-hidden="true" />
            </div>

            <span className="cover__badge" aria-hidden="true">
              Vol
              <strong>01</strong>
              Issue
            </span>

            <span className="stamp cover__stamp" aria-hidden="true">
              Dec
              <br />
              10
              <br />
              2026
            </span>

            <span className="cover__visual-note" aria-hidden="true">
              the birthday girl
              <DoodleArrow />
            </span>
          </div>

          <ul className="cover__headlines">
            <li className="cover__headlines-label">Inside this issue</li>
            {HEADLINES.map((headline, index) => (
              <li key={headline}>
                <span>
                  <i>{String(index + 1).padStart(2, '0')}</i>
                  {headline}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <footer className="cover__foot">
          <span>A little celebration of someone worth celebrating</span>
          <button
            type="button"
            className="cover__scroll"
            onClick={() =>
              document.getElementById('person')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Scroll to open
            <CurvedArrowDown />
          </button>
        </footer>
      </div>
    </section>
  )
}
