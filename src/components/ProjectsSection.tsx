'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ExternalLink, Github, Eye, Filter } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'ECommerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    category: 'Full-Stack',
    featured: true,
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Modern analytics dashboard with machine learning insights and real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'Chart.js', 'Docker'],
    category: 'AI/ML',
    featured: true,
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile app for fitness tracking with social features and workout plans.',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&h=300&fit=crop',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
    category: 'Mobile',
    featured: false,
    github: '#',
    live: '#'
  },
  {
    id: 4,
    title: 'Blockchain Voting System',
    description: 'Secure, transparent voting system built on blockchain technology with smart contracts.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
    category: 'Blockchain',
    featured: true,
    github: '#',
    live: '#'
  },
  {
    id: 5,
    title: 'Real-time Chat Application',
    description: 'Scalable chat application with end-to-end encryption, file sharing, and video calls.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
    technologies: ['Socket.io', 'React', 'Node.js', 'WebRTC', 'MongoDB'],
    category: 'Real-time',
    featured: false,
    github: '#',
    live: '#'
  },
  {
    id: 6,
    title: 'DevOps Automation Suite',
    description: 'Complete CI/CD pipeline automation with monitoring, testing, and deployment tools.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=300&fit=crop',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS'],
    category: 'DevOps',
    featured: false,
    github: '#',
    live: '#'
  }
]

const categories = ['All', 'Full-Stack', 'AI/ML', 'Mobile', 'Blockchain', 'Real-time', 'DevOps']

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' || project.category === activeFilter
  )

  const featuredProjects = filteredProjects.filter(p => p.featured)
  const otherProjects = filteredProjects.filter(p => !p.featured)

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, featuring diverse technologies and innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Filter className="text-muted-foreground mr-2" size={20} />
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                  : 'bg-card border border-border hover:border-purple-400/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects Grid */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Featured Work</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur hover:bg-card transition-all duration-300 h-full">
                    <div className="relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                      </motion.div>
                      
                      {/* Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                      >
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                        >
                          <Github size={20} className="text-white" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={20} className="text-white" />
                        </motion.a>
                      </motion.div>

                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                          Featured
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs hover:bg-purple-500/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={project.github} className="gap-2">
                            <Github size={16} />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700" asChild>
                          <a href={project.live} className="gap-2">
                            <Eye size={16} />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="border-0 bg-card/30 backdrop-blur hover:bg-card/50 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="flex-1 text-xs p-2" asChild>
                          <a href={project.github}>
                            <Github size={14} />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex-1 text-xs p-2" asChild>
                          <a href={project.live}>
                            <ExternalLink size={14} />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="gap-2 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}