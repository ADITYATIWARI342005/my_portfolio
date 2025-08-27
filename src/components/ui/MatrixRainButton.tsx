import React, { useEffect, useRef } from 'react'

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

type MatrixRainButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
}

export function MatrixRainButton({ label, className, ...props }: MatrixRainButtonProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Binary characters for authentic Matrix look
    const characters = '01'
    let columns = 0
    let drops: number[] = []
    let fontSize = 16

    function setup() {
      const dpr = window.devicePixelRatio || 1
      const { width, height } = container.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      canvas.style.width = `${Math.max(1, Math.floor(width))}px`
      canvas.style.height = `${Math.max(1, Math.floor(height))}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      fontSize = Math.max(20, Math.floor(Math.min(width, height) / 10))
      ctx.font = `${fontSize}px 'Courier New', monospace`
      columns = Math.max(1, Math.floor(width / (fontSize * 0.4)))
      drops = new Array(columns).fill(1).map(() => Math.floor(Math.random() * -40))
    }

    function draw() {
      const { width, height } = canvas
      
      // Solid black background
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, width, height)

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        
        // Classic Matrix green with enhanced glow
        ctx.fillStyle = '#00ff41'  // Authentic Matrix green
        ctx.shadowColor = '#00ff41'
        ctx.shadowBlur = 15
        
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        ctx.fillText(text, x, y)

        // Reset drop when it goes off screen (much slower falling)
        if (y > height / (window.devicePixelRatio || 1) && Math.random() > 0.995) {
          drops[i] = -Math.floor(Math.random() * 40)
        }
        drops[i] += 0.3 // Much slower falling speed
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    setup()
    draw()

    resizeObserverRef.current = new ResizeObserver(() => {
      setup()
    })
    resizeObserverRef.current.observe(container)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      resizeObserverRef.current?.disconnect()
    }
  }, [])

  return (
    <button
      {...props}
      className={cn(
        'relative overflow-hidden rounded-lg bg-black text-white outline-none',
        'focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2',
        'border border-emerald-500/20 shadow-lg shadow-emerald-500/10',
        'transition-all duration-200 hover:shadow-emerald-500/20',
        'px-8 py-4 min-w-[200px] min-h-[80px]',
        className,
      )}
    >
      <div ref={containerRef} className="absolute inset-0">
        <canvas ref={canvasRef} className="absolute inset-0" />
        {/* Enhanced vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
      </div>
      <span className="relative z-10 text-[#00ff41] font-bold text-lg tracking-wider font-mono drop-shadow-[0_0_8px_rgba(0,255,65,0.3)]">
        {label}
      </span>
    </button>
  )
}

export default MatrixRainButton


