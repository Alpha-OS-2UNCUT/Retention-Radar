'use client'
import { useEffect, useRef } from 'react'

const CLIENTS = [
  { angle: 25,  dist: 0.42, color: '#06b6d4', label: 'Apex' },
  { angle: 72,  dist: 0.65, color: '#22c55e', label: 'Blue Oak' },
  { angle: 130, dist: 0.33, color: '#06b6d4', label: 'Nexus' },
  { angle: 175, dist: 0.70, color: '#22c55e', label: 'Croft' },
  { angle: 220, dist: 0.48, color: '#06b6d4', label: 'Sterling' },
  { angle: 290, dist: 0.58, color: '#22c55e', label: 'Vanta' },
  { angle: 340, dist: 0.38, color: '#06b6d4', label: 'Meridian' },
  { angle: 310, dist: 0.74, color: '#22c55e', label: 'Forge' },
]

export function RadarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let sweep = 0
    const glow = CLIENTS.map(() => 0)

    const resize = () => {
      const parent = canvas.parentElement
      const size = Math.min(parent?.clientWidth ?? 480, 480)
      canvas.width = size
      canvas.height = size
    }
    resize()

    const observer = new ResizeObserver(resize)
    if (canvas.parentElement) observer.observe(canvas.parentElement)

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      const cx = W / 2
      const cy = H / 2
      const R = W * 0.44

      ctx.clearRect(0, 0, W, H)

      // Background fill
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.fillStyle = '#030c1a'
      ctx.fill()
      ctx.restore()

      // Outer glow ring
      ctx.save()
      const ringGrad = ctx.createRadialGradient(cx, cy, R - 2, cx, cy, R + 12)
      ringGrad.addColorStop(0, 'rgba(6,182,212,0.35)')
      ringGrad.addColorStop(1, 'rgba(6,182,212,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, R + 6, 0, Math.PI * 2)
      ctx.strokeStyle = ringGrad
      ctx.lineWidth = 12
      ctx.stroke()
      ctx.restore()

      // Clip to circle
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.clip()

      // Radial rings
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath()
        ctx.arc(cx, cy, R * (i / 4), 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(6,182,212,0.12)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Cross hair
      ctx.beginPath()
      ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy)
      ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R)
      ctx.strokeStyle = 'rgba(6,182,212,0.08)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Diagonal
      const diag = R * Math.SQRT1_2
      ctx.beginPath()
      ctx.moveTo(cx - diag, cy - diag); ctx.lineTo(cx + diag, cy + diag)
      ctx.moveTo(cx + diag, cy - diag); ctx.lineTo(cx - diag, cy + diag)
      ctx.strokeStyle = 'rgba(6,182,212,0.05)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Sweep trail
      const TRAIL = 80
      const TRAIL_ANGLE = Math.PI * 0.55
      for (let i = 0; i < TRAIL; i++) {
        const a = sweep - (i / TRAIL) * TRAIL_ANGLE
        const alpha = ((1 - i / TRAIL) ** 1.6) * 0.4
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R)
        ctx.strokeStyle = `rgba(6,182,212,${alpha.toFixed(3)})`
        ctx.lineWidth = i < 3 ? 2.5 : 1
        ctx.stroke()
      }

      // Sweep arm
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.lineTo(cx + Math.cos(sweep) * R, cy + Math.sin(sweep) * R)
      ctx.strokeStyle = '#06b6d4'
      ctx.lineWidth = 2
      ctx.shadowColor = '#06b6d4'
      ctx.shadowBlur = 16
      ctx.stroke()
      ctx.restore()

      // Center
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, 4, 0, Math.PI * 2)
      ctx.fillStyle = '#06b6d4'
      ctx.shadowColor = '#06b6d4'
      ctx.shadowBlur = 14
      ctx.fill()
      ctx.restore()

      // Client dots
      CLIENTS.forEach((c, i) => {
        const angle = (c.angle * Math.PI) / 180
        const dx = cx + Math.cos(angle) * c.dist * R
        const dy = cy + Math.sin(angle) * c.dist * R

        // Detect sweep crossing
        let sw = sweep % (Math.PI * 2)
        if (sw < 0) sw += Math.PI * 2
        let da = angle < 0 ? angle + Math.PI * 2 : angle % (Math.PI * 2)
        let diff = sw - da
        if (diff < 0) diff += Math.PI * 2
        if (diff < 0.04) glow[i] = 1.0
        glow[i] = Math.max(0, glow[i] - 0.007)

        const g = glow[i]
        const alpha = 0.35 + g * 0.65
        const rad = 3.5 + g * 3
        const blur = 4 + g * 18

        ctx.save()
        ctx.globalAlpha = alpha

        // Pulse ring
        if (g > 0.05) {
          ctx.beginPath()
          ctx.arc(dx, dy, rad + (1 - g) * 14, 0, Math.PI * 2)
          ctx.strokeStyle = c.color
          ctx.globalAlpha = g * 0.45
          ctx.lineWidth = 1.5
          ctx.stroke()
          ctx.globalAlpha = alpha
        }

        // Dot
        ctx.beginPath()
        ctx.arc(dx, dy, rad, 0, Math.PI * 2)
        ctx.fillStyle = c.color
        ctx.shadowColor = c.color
        ctx.shadowBlur = blur
        ctx.fill()
        ctx.restore()
      })

      ctx.restore() // end clip

      // Border ring
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(6,182,212,0.3)'
      ctx.lineWidth = 1.5
      ctx.stroke()
      ctx.restore()

      sweep += 0.014
    }

    const loop = () => { draw(); animId = requestAnimationFrame(loop) }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-[480px] aspect-square"
      style={{ imageRendering: 'pixelated' }}
    />
  )
}
