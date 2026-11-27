import { useEffect, useState } from 'react'

export default function IntroScreen({ onFinish }) {
  const [opening, setOpening] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const openTimer = setTimeout(() => setOpening(true), 1750)
    const removeTimer = setTimeout(() => {
      setRemoved(true)
      onFinish()
    }, 2980)

    return () => {
      clearTimeout(openTimer)
      clearTimeout(removeTimer)
    }
  }, [onFinish])

  if (removed) return null

  return (
    <div
      className={`intro ${opening ? 'is-opening' : ''}`}
      onClick={() => setOpening(true)}
      aria-hidden="true"
    >
      <div className="intro__panel intro__panel--l" />
      <div className="intro__panel intro__panel--r" />
      <div className="intro__inner">
        <span className="label">An independent occasion</span>
        <span className="intro__rule" />
        <h1 className="intro__title">RADITHA</h1>
        <p className="intro__sub">The Birthday Issue</p>
        <div className="intro__meta">
          <span>Vol. 01</span>
          <i />
          <span>December 10, 2026</span>
        </div>
        <div className="intro__loader" />
        <p className="intro__note">opening the issue…</p>
      </div>
    </div>
  )
}
