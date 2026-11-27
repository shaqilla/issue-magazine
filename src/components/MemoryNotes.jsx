import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { Squiggle, HandArrow } from './Doodles.jsx'

const NOTES = [
  {
    n: '01',
    tag: 'A little reminder',
    variant: 'note',
    hint: 'pull me open',
    text: 'A little reminder that you deserve good things, not just today, but every day.',
  },
  {
    n: '02',
    tag: 'Sealed with care',
    variant: 'env',
    hint: 'open the envelope',
    text: 'May life surprise you with beautiful moments when you least expect them.',
  },
  {
    n: '03',
    tag: 'A scrap of paper',
    variant: 'torn',
    hint: 'unfold the scrap',
    text: 'I hope you never forget that simply being yourself is already something worth celebrating.',
  },
  {
    n: '04',
    tag: 'One for the road',
    variant: 'stamp',
    hint: 'peel the stamp',
    text: 'Here’s to more stories, more laughter, more unexpected adventures, and more memories.',
  },
]

export default function MemoryNotes() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null)
    }
    document.body.classList.add('is-locked')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  const note = active === null ? null : NOTES[active]

  return (
    <section id="things" className="section things">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="label sec-head__label">03 — Little Things</span>
          <span className="sec-head__line" />
          <span className="sec-head__page">p. 10</span>
        </Reveal>

        <div className="things__intro">
          <Reveal as="h2" className="sec-title">
            The little things
          </Reveal>
          <Reveal as="p" className="things__sub" delay={120}>
            Some things are too small for a whole page, but too lovely to leave unnoticed.
            Four small notes, tucked into the issue — pick one.
          </Reveal>
        </div>

        <div className="things__grid">
          {NOTES.map((item, index) => (
            <Reveal
              as="button"
              type="button"
              key={item.n}
              className={`thing thing--${item.variant}`}
              delay={index * 90}
              onClick={() => setActive(index)}
              aria-label={`${item.tag} — open note ${item.n}`}
            >
              <span className="thing__eyebrow">
                <span className="label">Note {item.n}</span>
                <span className="thing__eyebrow-line" aria-hidden="true" />
              </span>

              <span className="thing__body">
                {item.variant === 'note' && (
                  <>
                    <span className="card-top">
                      <span>A little reminder</span>
                      <span>No. {item.n}</span>
                    </span>
                    <span className="card-mark">R</span>
                    <span className="card-rules">
                      <i />
                      <i />
                    </span>
                    <span className="card-pull">Pull</span>
                  </>
                )}

                {item.variant === 'env' && (
                  <>
                    <span className="env-line" aria-hidden="true" />
                    <span className="env-label">for you — {item.n}</span>
                    <span className="env-seal">R</span>
                  </>
                )}

                {item.variant === 'torn' && (
                  <>
                    <span className="scrap-title">
                      little
                      <br />
                      things
                    </span>
                    <Squiggle className="scrap-doodle" />
                    <span className="scrap-foot">
                      <span>a scrap of joy</span>
                      <span className="scrap-dot" aria-hidden="true" />
                    </span>
                  </>
                )}

                {item.variant === 'stamp' && (
                  <span className="stamp-inner">
                    <small>
                      Raditha
                      <br />
                      Post
                    </small>
                    <span className="stamp-r">R</span>
                    <small>
                      Dec. 10
                      <br />
                      2026
                    </small>
                  </span>
                )}
              </span>

              <span className="thing__hint">
                {item.hint}
                <HandArrow />
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      {note && (
        <div className="note-modal" role="presentation" onClick={() => setActive(null)}>
          <div
            className="note-card"
            role="dialog"
            aria-modal="true"
            aria-label={`Little note ${note.n}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="note-card__close"
              onClick={() => setActive(null)}
              aria-label="Close note"
              autoFocus
            >
              <X size={15} aria-hidden="true" />
            </button>

            <div className="note-card__top">
              <span className="label label--accent">Little note — {note.n}</span>
              <span className="label">{note.tag}</span>
            </div>

            <p className="note-card__text">“{note.text}”</p>
            <p className="note-card__sign">— with love, your friend</p>
          </div>
        </div>
      )}
    </section>
  )
}
