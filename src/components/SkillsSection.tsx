'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Badge } from './ui/badge'
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Settings
} from 'lucide-react'

const skillCategories = [
  {
    name: 'Frontend',
    icon: Palette,
    color: 'from-blue-400 to-cyan-400',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'JavaScript', level: 95 },
      { name: 'Vue.js', level: 80 }
    ]
  },
  {
    name: 'Backend',
    icon: Server,
    color: 'from-green-400 to-emerald-400',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'GraphQL', level: 82 },
      { name: 'REST APIs', level: 95 },
      { name: 'Microservices', level: 80 }
    ]
  },
  {
    name: 'Database',
    icon: Database,
    color: 'from-purple-400 to-pink-400',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'Prisma', level: 85 },
      { name: 'SQL', level: 90 },
      { name: 'Elasticsearch', level: 75 }
    ]
  },
  {
    name: 'DevOps',
    icon: Cloud,
    color: 'from-orange-400 to-red-400',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 88 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Terraform', level: 70 },
      { name: 'Git', level: 95 }
    ]
  }
]

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 
  'PostgreSQL', 'MongoDB', 'GraphQL', 'Next.js', 'Tailwind', 
  'Express', 'Redis', 'Kubernetes', 'Git', 'Jest', 'Cypress',
  'Figma', 'Webpack', 'Vite', 'Prisma', 'Supabase'
]

const statsData = [
  { number: '50+', label: 'Projects Completed' },
  { number: '5+', label: 'Years Experience' },
  { number: '20+', label: 'Technologies' },
  { number: '99%', label: 'Client Satisfaction' }
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: Math.random() * 10 - 5,
                  transition: { duration: 0.2 }
                }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-500/20 transition-colors"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-card border border-border hover:border-blue-400/50'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="font-medium">{category.name}</span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Active Category Skills */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color}`}>
                {(() => {
                  const IconComponent = skillCategories[activeCategory].icon
                  return <IconComponent size={32} className="text-white" />
                })()}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{skillCategories[activeCategory].name} Development</h3>
                <p className="text-muted-foreground">Proficiency levels in {skillCategories[activeCategory].name.toLowerCase()} technologies</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-sm text-muted-foreground"
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-secondary rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut"
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.8 + index * 0.1,
                type: "spring"
              }}
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-blue-400/50 transition-colors"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}