import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { HandArrow, HeartDoodle } from './Doodles.jsx'

export default function InteractiveLetter() {
  const [open, setOpen] = useState(false)

  return (
    <section id="letter" className="section letter">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="label sec-head__label">04 — An Open Letter</span>
          <span className="sec-head__line" />
          <span className="sec-head__page">p. 14</span>
        </Reveal>

        <div className="letter__grid">
          <Reveal as="h2" className="sec-title letter__title">
            An open letter
            <br />
            <em>to Raditha</em>
          </Reveal>

          <div className="letter__stage">
            <button
              type="button"
              className={`envelope ${open ? 'is-open' : ''}`}
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? 'Close the letter envelope' : 'Open the birthday letter'}
            >
              <span className="env__back" aria-hidden="true" />
              <span className="env__letter" aria-hidden="true">
                to Raditha —
              </span>
              <span className="env__front" aria-hidden="true" />
              <span className="env__flap" aria-hidden="true" />
              <span className="env__flap-mark" aria-hidden="true">
                press to open
              </span>
              <span className="env__seal" aria-hidden="true">
                R
              </span>
            </button>

            <p className={`letter__hint ${open ? 'is-hidden' : ''}`} aria-hidden={open}>
              <HandArrow />
              click the envelope
            </p>
          </div>

          <Reveal className="letter__paper" direction="right" delay={120}>
            <div className="letter__top">
              <span className="label label--accent">The letter</span>
              <span className="hand">Dec. 10, 2026</span>
            </div>

            {!open && (
              <p className="letter__teaser">
                “Happy birthday, Raditha.”
                <span>
                  a letter is waiting inside the envelope — sealed with a little love.
                </span>
              </p>
            )}

            <div className={`letter__reveal ${open ? 'is-open' : ''}`}>
              <div>
                <p className="letter__salute">Happy birthday, Raditha!</p>

                <div className="letter__body">
                  <p>
                    Today is your day, and I wanted to make something a little different
                    instead of sending just another ordinary birthday message.
                  </p>
                  <p>
                    I hope this new chapter brings you more opportunities, peaceful days,
                    exciting experiences, unexpected happiness, and people who make life feel
                    a little lighter.
                  </p>
                  <p>
                    May you keep discovering new things, keep making memories, and keep
                    finding reasons to smile even on ordinary days.
                  </p>
                  <p>
                    You deserve a year filled with little moments that eventually become your
                    favorite memories.
                  </p>
                  <p>Happy birthday, and here’s to another chapter of your story.</p>
                </div>

                <div className="letter__sign">
                  <div className="letter__sign-box">
                    <small>with love,</small>
                    your friend
                  </div>
                  <HeartDoodle />
                </div>
              </div>
            </div>

            {!open && (
              <p className="letter__paper-note">p.s. it’s a good one.</p>
            )}

            <button
              type="button"
              className={`letter__toggle ${open ? '' : 'is-hidden'}`}
              onClick={() => setOpen(false)}
            >
              Fold it back
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
