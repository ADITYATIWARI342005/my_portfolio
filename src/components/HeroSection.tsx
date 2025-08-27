'use client'

import React, { useEffect, useRef, useState } from 'react'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import MatrixRainButton from './ui/MatrixRainButton'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const codeSnippets = [
  'const developer = new FullStackDev();',
  'function createAwesome() { return code; }',
  'git commit -m "Building the future"',
  'npm run innovation --force',
  'while(alive) { learn(); code(); improve(); }',
]

export function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  
  const texts = [
    'Software Engineer',
    'Full-Stack Developer', 
    'Problem Solver',
    'Innovation Driver'
  ]

  // Typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentText = texts[currentTextIndex]
    
    if (displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1))
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setDisplayText('')
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentTextIndex, texts])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const [ctaWidthPx, setCtaWidthPx] = useState<number>(420)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return

    const compute = () => {
      const rect = el.getBoundingClientRect()
      const target = Math.max(280, rect.width / 2)
      setCtaWidthPx(target)
    }

    const ro = new ResizeObserver(compute)
    ro.observe(el)
    window.addEventListener('resize', compute)
    compute()
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', compute)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Simplified Animated Background */}
      <div className="absolute inset-0">
        {/* Static code snippets with CSS animations */}
        <div className="absolute top-20 left-10 text-xs font-mono text-blue-400/30 animate-pulse">
          {codeSnippets[0]}
        </div>
        <div className="absolute top-40 right-20 text-xs font-mono text-purple-400/30 animate-pulse" style={{ animationDelay: '1s' }}>
          {codeSnippets[1]}
        </div>
        <div className="absolute bottom-40 left-20 text-xs font-mono text-emerald-400/30 animate-pulse" style={{ animationDelay: '2s' }}>
          {codeSnippets[2]}
        </div>
        <div className="absolute bottom-20 right-10 text-xs font-mono text-cyan-400/30 animate-pulse" style={{ animationDelay: '3s' }}>
          {codeSnippets[3]}
        </div>
        <div className="absolute top-1/2 left-1/4 text-xs font-mono text-pink-400/30 animate-pulse" style={{ animationDelay: '4s' }}>
          {codeSnippets[4]}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-mono bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            ref={titleRef}
          >
            Alex Johnson
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-16 flex items-center justify-center"
          >
            <span className="text-xl md:text-2xl text-gray-300 font-mono">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-blue-400"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Building digital solutions that matter. Passionate about clean code, 
            innovative solutions, and creating seamless user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col gap-4 justify-center items-center max-w-2xl mx-auto"
          >
            <div className="flex gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>

            <div
              className="mx-auto w-[var(--cta-width)]"
              style={{ ['--cta-width' as any]: `${Math.round(ctaWidthPx)}px` }}
            >
              <MatrixRainButton
                label="Let's Build Something Amazing"
                onClick={scrollToAbout}
                className="block w-full text-[2rem] md:text-[2.5rem] leading-none px-10 py-6 font-mono"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}