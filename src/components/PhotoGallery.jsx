import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Reveal from './Reveal.jsx'

const PHOTOS = [
  {
    src: '/images/raditha-4.jpg',
    alt: 'Raditha feeding a capybara through a fence',
    title: 'FEEDING TIME',
    caption: 'Raditha & a very patient capybara',
    hand: 'a tiny new friend',
    frame: 'Fig. 01',
  },
  {
    src: '/images/raditha-5.jpg',
    alt: 'Raditha sitting in a mall cafe with a smoothie',
    title: 'THE CAFE HOUR',
    caption: 'A smoothie and a slow afternoon',
    hand: 'everyday gold',
    frame: 'Fig. 02',
  },
  {
    src: '/images/raditha-1.jpg',
    alt: 'Raditha taking a mirror selfie',
    title: 'A MOMENT, KEPT',
    caption: 'An ordinary mirror, an ordinary day',
    hand: 'a good day, kept',
    frame: 'Fig. 03',
  },
]

export default function PhotoGallery() {
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

  const photo = active === null ? null : PHOTOS[active]

  return (
    <section id="archive" className="section archive">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="label sec-head__label">02 — The Archive</span>
          <span className="sec-head__line" />
          <span className="sec-head__page">p. 06</span>
        </Reveal>

        <Reveal className="archive__intro" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <h2 className="sec-title">The Archive</h2>
          <p className="sec-sub">Three frames. A whole lot of memories.</p>
        </Reveal>

        <div className="archive__grid">
          <div className="archive__col">
            <div className="archive__head">
              <span>Fig. 01 — The spread</span>
              <span>01 / 03</span>
            </div>

            <Reveal
              as="button"
              type="button"
              className="fig fig--spread"
              style={{ '--r': '-1.1deg' }}
              onClick={() => setActive(0)}
              aria-label="Open photograph: Raditha feeding a capybara"
            >
              <span className="fig__card">
                <img src={PHOTOS[0].src} alt={PHOTOS[0].alt} loading="lazy" />
                <span className="fig__cap">
                  <span>
                    <strong>{PHOTOS[0].title}</strong>
                    <span>{PHOTOS[0].caption}</span>
                  </span>
                  <span>01 / 03</span>
                </span>
                <span className="tape" aria-hidden="true" />
                <span className="stamp" aria-hidden="true">
                  Dec
                  <br />
                  2026
                </span>
              </span>
              <span className="fig__view">View frame</span>
            </Reveal>

            <div className="archive__aside">
              <hr className="hr-rule" />
              <p>three frames, a whole lot of memories</p>
              <hr className="hr-rule" />
            </div>
          </div>

          <div className="archive__col">
            <div className="archive__head">
              <span>Fig. 02 — The polaroid</span>
              <span>02 / 03</span>
            </div>

            <Reveal
              as="button"
              type="button"
              className="fig fig--polaroid"
              delay={90}
              onClick={() => setActive(1)}
              aria-label="Open photograph: Raditha at a mall cafe"
            >
              <span className="fig__card">
                <img src={PHOTOS[1].src} alt={PHOTOS[1].alt} loading="lazy" />
                <span className="fig__hand">
                  <em>{PHOTOS[1].hand}</em>
                  <span>
                    02 — Polaroid
                    <br />
                    Dec 10, 2026
                  </span>
                </span>
              </span>
              <span className="fig__view">View frame</span>
            </Reveal>

            <div className="archive__head">
              <span>Fig. 03 — The keepsake</span>
              <span>03 / 03</span>
            </div>

            <Reveal
              as="button"
              type="button"
              className="fig fig--torn"
              delay={140}
              onClick={() => setActive(2)}
              aria-label="Open photograph: Raditha taking a mirror selfie"
            >
              <span className="fig__card">
                <img src={PHOTOS[2].src} alt={PHOTOS[2].alt} loading="lazy" />
                <span className="fig__scroll">
                  <em>{PHOTOS[2].hand}</em>
                  <span>03 / 03</span>
                </span>
              </span>
              <span className="fig__view">View frame</span>
            </Reveal>
          </div>
        </div>
      </div>

      {photo && (
        <div className="lightbox" role="presentation" onClick={() => setActive(null)}>
          <figure
            className="lightbox__figure"
            role="dialog"
            aria-modal="true"
            aria-label={`${photo.title} — enlarged photograph`}
            onClick={(event) => event.stopPropagation()}
          >
            <img src={photo.src} alt={photo.alt} />
            <figcaption className="lightbox__cap">
              <span>
                {photo.frame} — {photo.title} · {photo.caption}
              </span>
              <em>{photo.hand}</em>
            </figcaption>
            <button
              type="button"
              className="lightbox__close"
              onClick={() => setActive(null)}
              autoFocus
            >
              <X size={13} aria-hidden="true" />
              Close frame
            </button>
          </figure>
        </div>
      )}
    </section>
  )
}
