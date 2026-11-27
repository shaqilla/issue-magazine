const COLORS = ['#C98291', '#713647', '#A65C61', '#E8D49A', '#A5B59B', '#F6F0E5', '#8B7666']

export function burstConfetti({
  x = window.innerWidth / 2,
  y = window.innerHeight / 2,
  count = 110,
  spread = 1,
  gravity = 0.16,
} = {}) {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const canvas = document.createElement('canvas')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  canvas.style.cssText =
    'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:140'
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  if (!ctx) {
    canvas.remove()
    return
  }
  ctx.scale(dpr, dpr)

  const pieces = Array.from({ length: count }, () => {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.35 * spread
    const speed = 5 + Math.random() * 10
    return {
      x,
      y,
      vx: Math.cos(angle) * speed * (0.7 + Math.random() * 0.6),
      vy: Math.sin(angle) * speed * (0.7 + Math.random() * 0.6),
      w: 4 + Math.random() * 7,
      h: 6 + Math.random() * 10,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: Math.random() > 0.72 ? 'circle' : 'rect',
    }
  })

  const start = performance.now()
  const DURATION = 3600

  const tick = (now) => {
    const elapsed = now - start
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    for (const p of pieces) {
      p.vy += gravity
      p.vx *= 0.993
      p.vy *= 0.996
      p.x += p.vx
      p.y += p.vy
      p.rot += p.vr

      const life = Math.max(0, 1 - elapsed / DURATION)
      if (life <= 0) continue

      ctx.save()
      ctx.globalAlpha = Math.min(1, life * 1.6)
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      ctx.fillStyle = p.color
      if (p.shape === 'circle') {
        ctx.beginPath()
        ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2)
        ctx.fill()
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
      }
      ctx.restore()
    }

    if (elapsed < DURATION) {
      requestAnimationFrame(tick)
    } else {
      canvas.remove()
    }
  }

  requestAnimationFrame(tick)
}
