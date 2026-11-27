import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { burstConfetti } from '../lib/confetti.js'

const CANDLES = [230, 280, 330]

export default function BirthdayCake() {
  const [out, setOut] = useState(false)
  const [wished, setWished] = useState(false)
  const cakeRef = useRef(null)

  const handleWish = () => {
    if (out) {
      setOut(false)
      return
    }

    setOut(true)
    setWished(true)

    const rect = cakeRef.current?.getBoundingClientRect()
    if (rect) {
      burstConfetti({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height * 0.32,
        count: 130,
      })
    }
  }

  return (
    <section id="wish" className="section wish">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="label sec-head__label">05 — Make a Wish</span>
          <span className="sec-head__line" />
          <span className="sec-head__page">p. 18</span>
        </Reveal>

        <div className="wish__grid">
          <div className="wish__copy">
            <Reveal as="h2" className="wish__title">
              Make
              <br />a <em>wish.</em>
            </Reveal>

            <Reveal as="p" className="wish__sub" delay={100}>
              Close your eyes for a second, think of something good, and blow out the
              candles. The whole issue is holding its breath for you.
            </Reveal>

            <Reveal as="p" className="wish__note" delay={160}>
              (no judging the wish — it’s yours)
            </Reveal>

            <Reveal className="wish__actions" delay={220}>
              <button type="button" className="btn" onClick={handleWish}>
                {out ? 'Light them again' : 'Make your wish'}
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </button>
              <span className="hand" aria-hidden="true">
                {out ? 'that was quick — did you wish?' : 'when you’re ready'}
              </span>
            </Reveal>

            <div
              className={`wish__message ${wished ? 'is-shown' : ''}`}
              aria-live="polite"
            >
              <p>A wish for you. Always.</p>
              <small>— from everyone who loves you</small>
            </div>
          </div>

          <Reveal className="cake-stage" direction="right" delay={120}>
            <span className="cake-stage__halo" aria-hidden="true" />

            <svg
              ref={cakeRef}
              className={`cake ${out ? 'is-out' : ''}`}
              viewBox="0 0 560 500"
              role="button"
              tabIndex={0}
              aria-label={out ? 'Light the candles again' : 'Blow out the candles'}
              onClick={handleWish}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  handleWish()
                }
              }}
            >
              <defs>
                <linearGradient id="tierTop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#d99aa6" />
                  <stop offset="1" stopColor="#bd7081" />
                </linearGradient>
                <linearGradient id="tierBottom" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#7d3b4c" />
                  <stop offset="1" stopColor="#5f2a39" />
                </linearGradient>
                <linearGradient id="frost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#fcf8ef" />
                  <stop offset="1" stopColor="#efe3cf" />
                </linearGradient>
              </defs>

              <ellipse cx="280" cy="454" rx="196" ry="16" fill="rgba(40,35,35,0.12)" />
              <ellipse cx="280" cy="434" rx="194" ry="21" fill="#ded2bf" />
              <ellipse cx="280" cy="428" rx="194" ry="21" fill="#f4ecdd" />
              <ellipse
                cx="280"
                cy="428"
                rx="150"
                ry="15"
                fill="none"
                stroke="rgba(139,118,102,0.22)"
                strokeWidth="1"
              />

              {/* bottom tier */}
              <rect x="130" y="298" width="300" height="122" rx="6" fill="url(#tierBottom)" />
              {[162, 206, 250, 294, 338, 382].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="330"
                  x2={x}
                  y2="414"
                  stroke="rgba(246,240,229,0.07)"
                  strokeWidth="1"
                />
              ))}
              <path
                d="M126 292 H434 V326 q-22 22 -44 0 q-22 22 -44 0 q-22 22 -44 0 q-22 22 -44 0 q-22 22 -44 0 q-22 22 -44 0 q-22 22 -44 0 Z"
                fill="url(#frost)"
              />
              <ellipse cx="280" cy="292" rx="154" ry="7" fill="#fdf9f1" />

              <g fill="#e8d49a">
                <circle cx="166" cy="352" r="3" />
                <circle cx="204" cy="366" r="2.4" />
                <circle cx="356" cy="360" r="2.6" />
                <circle cx="396" cy="348" r="3" />
              </g>

              {/* banner */}
              <g transform="rotate(-1.6 280 368)">
                <rect
                  x="204"
                  y="348"
                  width="152"
                  height="32"
                  fill="#faf5ea"
                  stroke="rgba(40,35,35,0.14)"
                />
                <text
                  x="280"
                  y="369"
                  textAnchor="middle"
                  fontFamily="DM Sans, sans-serif"
                  fontSize="9"
                  fontWeight="600"
                  letterSpacing="2.6"
                  fill="#713647"
                >
                  10 · 12 · 2026
                </text>
              </g>

              {/* top tier */}
              <rect x="182" y="224" width="196" height="82" rx="6" fill="url(#tierTop)" />
              {[216, 250, 284, 318, 344].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="252"
                  x2={x}
                  y2="298"
                  stroke="rgba(246,240,229,0.09)"
                  strokeWidth="1"
                />
              ))}
              <path
                d="M174 218 H386 V248 q-17.7 19 -35.4 0 q-17.7 19 -35.4 0 q-17.7 19 -35.4 0 q-17.7 19 -35.4 0 q-17.7 19 -35.4 0 q-17.7 19 -35.4 0 Z"
                fill="url(#frost)"
              />
              <ellipse cx="280" cy="218" rx="106" ry="6" fill="#fdf9f1" />

              <g fill="#fdf7ec" opacity="0.85">
                <circle cx="204" cy="262" r="2.4" />
                <circle cx="356" cy="266" r="2.1" />
                <circle cx="228" cy="284" r="1.9" />
                <circle cx="334" cy="286" r="2.3" />
              </g>

              {/* candles */}
              {CANDLES.map((x, index) => (
                <g key={x}>
                  <rect x={x - 4.5} y="154" width="9" height="68" rx="4" fill="#fbf5e9" />
                  <rect x={x - 4.5} y="166" width="9" height="4" fill="#c98291" opacity="0.75" />
                  <rect x={x - 4.5} y="180" width="9" height="4" fill="#c98291" opacity="0.75" />
                  <rect x={x - 4.5} y="194" width="9" height="4" fill="#c98291" opacity="0.75" />
                  <line
                    x1={x}
                    y1="154"
                    x2={x}
                    y2="147"
                    stroke="#3f322c"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <g transform={`translate(${x} 136)`}>
                    <g
                      className="smoke"
                      style={{ animationDelay: `${0.18 + index * 0.1}s` }}
                    >
                      <path
                        d="M0 0c-6-9 6-14 0-23c-6-9 6-13 0-22"
                        fill="none"
                        stroke="#8b7666"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>

                  <g transform={`translate(${x} 118)`}>
                    <g className="flame" style={{ animationDelay: `${-0.42 * index}s` }}>
                      <ellipse cx="0" cy="22" rx="12" ry="16" fill="rgba(232,196,106,0.22)" />
                      <path d="M0 6C6.5 13 9 21 0 29C-9 21-6.5 13 0 6Z" fill="#e9c86c" />
                      <path
                        d="M0 15C3.4 18.5 3.6 23.5 0 26.5C-3.6 23.5-3.4 18.5 0 15Z"
                        fill="#fdf3d2"
                      />
                    </g>
                  </g>
                </g>
              ))}

              {/* little decorations */}
              <g fill="none" stroke="#a5b59b" strokeWidth="2.4" strokeLinecap="round">
                <path d="M148 408c6-13 18-17 27-14-5 12-16 17-27 14Z" fill="#a5b59b" stroke="none" />
                <path d="M409 412c-5-13-16-18-25-15 4 12 15 17 25 15Z" fill="#a5b59b" stroke="none" />
              </g>
              <g fill="#e8d49a">
                <path d="M112 232c1.4 5.6 4.2 8.4 9.8 9.8-5.6 1.4-8.4 4.2-9.8 9.8-1.4-5.6-4.2-8.4-9.8-9.8 5.6-1.4 8.4-4.2 9.8-9.8Z" />
                <path d="M452 268c1.1 4.4 3.3 6.6 7.7 7.7-4.4 1.1-6.6 3.3-7.7 7.7-1.1-4.4-3.3-6.6-7.7-7.7 4.4-1.1 6.6-3.3 7.7-7.7Z" />
                <path d="M420 112c0.9 3.6 2.7 5.4 6.3 6.3-3.6 0.9-5.4 2.7-6.3 6.3-0.9-3.6-2.7-5.4-6.3-6.3 3.6-0.9 5.4-2.7 6.3-6.3Z" />
              </g>
            </svg>

            <span className="cake-note" aria-hidden="true">
              make it a good one
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
