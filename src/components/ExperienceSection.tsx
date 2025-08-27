'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Building, Calendar, MapPin, Award, GraduationCap } from 'lucide-react'

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led team of 5 developers on major product redesign',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
    logo: '🏢'
  },
  {
    id: 2,
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    period: '2020 - 2022',
    description: 'Built and maintained e-commerce platform from ground up. Collaborated with design team to create seamless user experiences.',
    achievements: [
      'Developed payment processing system handling $2M+ transactions',
      'Created admin dashboard improving operational efficiency by 50%',
      'Implemented real-time inventory management system'
    ],
    technologies: ['Vue.js', 'Python', 'Django', 'Redis', 'Stripe'],
    logo: '🚀'
  },
  {
    id: 3,
    type: 'education',
    title: 'Master of Science in Computer Science',
    company: 'Stanford University',
    location: 'Stanford, CA',
    period: '2018 - 2020',
    description: 'Specialized in Machine Learning and Distributed Systems. Thesis on "Scalable Real-time Data Processing Architectures".',
    achievements: [
      'GPA: 3.9/4.0',
      'Research Assistant in AI Lab',
      'Published 2 papers in peer-reviewed conferences'
    ],
    technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'Spark'],
    logo: '🎓'
  },
  {
    id: 4,
    type: 'work',
    title: 'Software Developer Intern',
    company: 'Microsoft',
    location: 'Seattle, WA',
    period: '2019 (Summer)',
    description: 'Worked on Azure DevOps team developing CI/CD pipeline improvements. Gained experience with large-scale distributed systems.',
    achievements: [
      'Improved build performance by 25%',
      'Contributed to open-source DevOps tools',
      'Received return offer for full-time position'
    ],
    technologies: ['C#', '.NET', 'Azure', 'Docker', 'Kubernetes'],
    logo: '🔷'
  },
  {
    id: 5,
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: 'UC Berkeley',
    location: 'Berkeley, CA',
    period: '2014 - 2018',
    description: 'Strong foundation in computer science fundamentals. Active in hackathons and coding competitions.',
    achievements: [
      'Summa Cum Laude graduate',
      'President of Computer Science Society',
      'Winner of 3 major hackathons'
    ],
    technologies: ['Java', 'C++', 'Python', 'JavaScript', 'MySQL'],
    logo: '🐻'
  }
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  })

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono mb-6 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through technology, learning, and professional growth
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              style={{ height: timelineHeight }}
              className="w-full bg-gradient-to-b from-emerald-400 to-cyan-500"
              initial={{ height: "0%" }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10 w-4 h-4 rounded-full border-4 border-background ${
                    exp.type === 'work' 
                      ? 'bg-emerald-400' 
                      : 'bg-cyan-400'
                  }`}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <Card className="border-0 bg-card/50 backdrop-blur hover:bg-card transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-3xl">{exp.logo}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {exp.type === 'work' ? (
                              <Building size={16} className="text-emerald-400" />
                            ) : (
                              <GraduationCap size={16} className="text-cyan-400" />
                            )}
                            <Badge
                              variant="secondary"
                              className={exp.type === 'work' ? 'bg-emerald-400/20 text-emerald-400' : 'bg-cyan-400/20 text-cyan-400'}
                            >
                              {exp.type === 'work' ? 'Work' : 'Education'}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                          <p className="text-lg text-muted-foreground mb-2">{exp.company}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Award size={16} className="text-yellow-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: index * 0.2 + 0.7 + i * 0.05 }}
                            >
                              <Badge variant="outline" className="text-xs hover:bg-emerald-500/20 transition-colors">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '5+', label: 'Years of Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '10+', label: 'Technologies Mastered' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}