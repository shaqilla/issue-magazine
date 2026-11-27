import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { burstConfetti } from '../lib/confetti.js'
import { Sparkle } from './Doodles.jsx'

const STARS = [
  { left: '-4%', top: '18%', size: 22, delay: '0s' },
  { left: '102%', top: '30%', size: 15, delay: '0.8s' },
  { left: '8%', top: '74%', size: 13, delay: '1.4s' },
  { left: '94%', top: '68%', size: 19, delay: '2s' },
  { left: '-2%', top: '48%', size: 11, delay: '2.6s' },
  { left: '55%', top: '4%', size: 14, delay: '1.1s' },
]

export default function FinalPage() {
  const [open, setOpen] = useState(false)
  const cardRef = useRef(null)

  const handleOpen = () => {
    setOpen(true)
    const rect = cardRef.current?.getBoundingClientRect()
    const x = rect ? rect.left + rect.width / 2 : undefined
    const y = rect ? rect.top + 40 : undefined
    window.setTimeout(() => {
      burstConfetti({
        x,
        y,
        count: 100,
        spread: 1.1,
      })
    }, 220)
  }

  return (
    <section id="last" className={`section final ${open ? 'is-wished' : ''}`}>
      <div className="wrap">
        <div className="final__inner">
          <Reveal className="sec-head">
            <span className="label sec-head__label">06 — The Last Page</span>
            <span className="sec-head__line" />
            <span className="sec-head__page">p. 24</span>
          </Reveal>

          <Reveal as="h2" className="final__title">
            And that’s the end of <em>this issue.</em>
          </Reveal>

          <Reveal as="p" className="final__sub" delay={100}>
            but your story keeps going.
          </Reveal>

          <Reveal className="final__action" delay={180}>
            <button type="button" className="btn btn--cream" onClick={handleOpen}>
              {open ? 'One more time' : 'Open your last surprise'}
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </button>
          </Reveal>

          <div
            className={`final__card ${open ? 'is-open' : ''}`}
            ref={cardRef}
            aria-live="polite"
          >
            <span className="final__card-label">
              {open ? 'For you, always' : 'Sealed until the last page'}
            </span>
            <p>
              May this year be kinder, brighter, and more beautiful than the pages you’ve
              left behind.
            </p>
            <p className="final__card-sign">Happy birthday, Raditha.</p>
          </div>

          {STARS.map((star) => (
            <Sparkle
              key={`${star.left}-${star.top}`}
              className="final__star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
