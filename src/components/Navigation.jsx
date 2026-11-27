import { useEffect, useState } from 'react'
import { SECTIONS } from '../lib/sections.js'

export default function Navigation({ active, progress }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.body.classList.add('is-locked')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const goTo = (id) => {
    setMenuOpen(false)
    const target = document.getElementById(id)
    if (!target) return
    window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 80)
  }

  const goTop = () => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="wrap nav__inner">
          <button type="button" className="nav__brand" onClick={goTop}>
            Raditha <em>— the birthday issue</em>
          </button>

          <nav aria-label="Issue contents">
            <ul className="nav__links">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={`nav__link ${active === section.id ? 'is-active' : ''}`}
                    onClick={() => goTo(section.id)}
                  >
                    <span aria-hidden="true">{section.num}</span>
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav__meta">
            <span>Vol. 01</span>
            <strong>10.12.26</strong>
          </div>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close contents' : 'Open contents'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i aria-hidden="true" />
            {menuOpen ? 'Close' : 'Index'}
          </button>

          <div className="nav__progress" aria-hidden="true">
            <i style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <span className="label mobile-menu__label">Contents — Vol. 01</span>
        {SECTIONS.map((section) => (
          <button
            type="button"
            key={section.id}
            className="mobile-menu__link"
            onClick={() => goTo(section.id)}
          >
            {section.label}
            <small>{section.num}</small>
          </button>
        ))}
        <div className="mobile-menu__foot">
          <span className="label">December 10, 2026</span>
          <span className="hand">read slowly.</span>
        </div>
      </div>
    </>
  )
}
