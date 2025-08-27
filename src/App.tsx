'use client'

import { useEffect } from 'react'
import { motion } from 'motion/react'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ContactSection } from './components/ContactSection'

export default function App() {
  useEffect(() => {
    // Enable smooth scrolling for the whole page
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Page Transition Wrapper */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 bg-secondary/20 border-t border-border"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <div className="text-xl font-mono font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  &lt;Alex Johnson/&gt;
                </div>
                <p className="text-muted-foreground text-sm">
                  Building the future, one line of code at a time
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  © 2024 Alex Johnson. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Made with ❤️ using React & Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </motion.footer>
      </motion.main>

      {/* Simplified Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl opacity-20" />
      </div>
    </div>
  )
}