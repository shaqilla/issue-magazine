import { Star5, Squiggle, HeartDoodle } from './Doodles.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <p className="footer__brand">
            Raditha <em>— the birthday issue</em>
          </p>
          <span className="label">Vol. 01 — Special edition</span>
        </div>

        <div className="footer__cols">
          <div>
            <h4>Colophon</h4>
            <p>
              An independent birthday magazine made for <em>Raditha</em> — written, printed
              and stitched together by a friend.
            </p>
            <div className="footer__doodles" aria-hidden="true">
              <Star5 width="13" height="13" />
              <Squiggle width="80" height="14" />
              <HeartDoodle width="18" height="16" />
            </div>
          </div>

          <div>
            <h4>Published</h4>
            <p>
              Published with love.
              <br />
              December 10, 2026.
            </p>
          </div>

          <div>
            <h4>Inside</h4>
            <p>
              The person · The archive · Little things · The letter · Make a wish · The last
              page.
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 — one person, one whole issue</span>
          <span className="hand footer__hand">read it again, slowly.</span>
          <span className="footer__page">
            Page 24 <span aria-hidden="true">—</span> End
          </span>
        </div>
      </div>
    </footer>
  )
}
