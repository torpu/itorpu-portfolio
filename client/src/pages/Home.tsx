import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail, Music, Code, Zap, ExternalLink, Brain, Radio, Waves } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Design Philosophy: Neon Cyberpunk Aesthetic
 * - Dark backgrounds with electric neon accents (magenta, cyan, purple)
 * - Glowing text effects and animated gradients
 * - Diagonal section dividers and asymmetrical layouts
 * - Bold, geometric typography with Space Mono headings
 * - Smooth animations and kinetic interactions
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold glow-magenta">iTorpu</div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">Projects</a>
            <a href="#music" className="text-sm hover:text-accent transition-colors">AI Music</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('/images/hero-neon-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 z-1 bg-gradient-to-b from-background via-transparent to-background"
          animate={{
            background: [
              "linear-gradient(to bottom, rgba(10, 14, 39, 0.9), transparent, rgba(10, 14, 39, 0.9))",
              "linear-gradient(to bottom, rgba(10, 14, 39, 0.7), transparent, rgba(10, 14, 39, 0.7))",
              "linear-gradient(to bottom, rgba(10, 14, 39, 0.9), transparent, rgba(10, 14, 39, 0.9))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Animated Icons - Music Theme */}
        <motion.div
          className="absolute top-20 left-10 z-5 text-accent/60"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Music className="h-16 w-16 drop-shadow-[0_0_15px_rgba(255,0,110,0.8)]" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 z-5 text-chart-1/60"
          animate={{
            y: [0, -40, 0],
            rotate: [0, -15, 15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Radio className="h-20 w-20 drop-shadow-[0_0_15px_rgba(0,217,255,0.8)]" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 z-5 text-secondary-foreground/60"
          animate={{
            y: [0, -35, 0],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Waves className="h-14 w-14 drop-shadow-[0_0_15px_rgba(0,217,255,0.8)]" />
        </motion.div>

        {/* Floating Animated Icons - Stream Theme */}
        <motion.div
          className="absolute top-60 right-10 z-5 text-secondary-foreground/60"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -10, 10, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <Radio className="h-16 w-16 drop-shadow-[0_0_15px_rgba(0,217,255,0.8)]" />
        </motion.div>

        {/* Floating Animated Icons - AI Theme */}
        <motion.div
          className="absolute bottom-60 right-32 z-5 text-chart-1/60"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        >
          <Brain className="h-16 w-16 drop-shadow-[0_0_15px_rgba(0,217,255,0.8)]" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-1/4 z-5 text-accent/50"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -12, 12, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        >
          <Code className="h-12 w-12 drop-shadow-[0_0_15px_rgba(255,0,110,0.8)]" />
        </motion.div>

        {/* Animated Particles/Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full z-2"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              width: `${20 + (i % 3) * 15}px`,
              height: `${20 + (i % 3) * 15}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(255, 0, 110, 0.4), transparent)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(0, 217, 255, 0.4), transparent)'
                : 'radial-gradient(circle, rgba(157, 78, 221, 0.4), transparent)',
              filter: 'blur(2px)',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 30, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Content */}
        <div className="container relative z-10 text-center">
          <motion.div 
            className="space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold glow-magenta"
              animate={{
                textShadow: [
                  "0 0 10px #FF006E, 0 0 20px #FF006E, 0 0 30px #FF006E",
                  "0 0 20px #FF006E, 0 0 30px #FF006E, 0 0 40px #FF006E",
                  "0 0 10px #FF006E, 0 0 20px #FF006E, 0 0 30px #FF006E",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              iTorpu
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-secondary-foreground font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Developer • Innovation Architect • AI Music Producer
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Crafting the future through code, innovation, and AI-generated music. 
              Exploring the intersection of technology and creativity.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 justify-center pt-8 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a href="https://kick.com/itorpu" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-accent hover:bg-accent/90 text-white border-2 border-accent hover:border-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
                  >
                    <Radio className="mr-2 h-4 w-4" />
                    Watch on Kick
                  </Button>
                </motion.div>
              </a>
              <a href="https://suno.com/@orp20" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline"
                    className="border-2 border-secondary-foreground hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <Music className="mr-2 h-4 w-4" />
                    Suno Music
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
              fill="url(#diagonalGradient)"
            />
            <defs>
              <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF006E" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#00D9FF" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-gradient-to-b from-background via-dark-card/30 to-background">
        <div className="container">
          <h2 className="text-5xl font-bold mb-12 glow-cyan">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-2 border-border hover:border-accent transition-all duration-300 p-6 hover:shadow-lg hover:shadow-accent/20">
              <Code className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Developer</h3>
              <p className="text-muted-foreground">
                Full-stack developer passionate about building innovative solutions and exploring cutting-edge technologies.
              </p>
            </Card>

            <Card className="bg-card border-2 border-border hover:border-secondary-foreground transition-all duration-300 p-6 hover:shadow-lg hover:shadow-secondary-foreground/20">
              <Zap className="h-12 w-12 text-secondary-foreground mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovation Architect</h3>
              <p className="text-muted-foreground">
                Designing systems and strategies that push boundaries and create meaningful impact through technology.
              </p>
            </Card>

            <Card className="bg-card border-2 border-border hover:border-chart-1 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-chart-1/20">
              <Music className="h-12 w-12 text-chart-1 mb-4" />
              <h3 className="text-xl font-bold mb-3">AI Music Producer</h3>
              <p className="text-muted-foreground">
                Exploring the creative possibilities of AI-generated music and pushing the boundaries of digital sound design.
              </p>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-card border-2 border-border rounded-lg">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate technologist who thrives at the intersection of code, innovation, and creativity. 
              With expertise in full-stack development and a keen interest in artificial intelligence, I'm constantly 
              exploring how technology can enhance human creativity. My work spans from building robust applications 
              to experimenting with AI music generation and streaming interactive content on Kick.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 bg-background">
        <div className="container">
          <h2 className="text-5xl font-bold mb-12 glow-purple">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-2 border-border overflow-hidden hover:border-accent transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-secondary-foreground/20 flex items-center justify-center overflow-hidden">
                <Code className="h-24 w-24 text-accent/40 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Innovation Platform</h3>
                <p className="text-muted-foreground mb-4">
                  A cutting-edge platform for collaborative innovation and rapid prototyping of new ideas.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-secondary-foreground/20 text-secondary-foreground px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-chart-1/20 text-chart-1 px-2 py-1 rounded">AI</span>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-2 border-border overflow-hidden hover:border-secondary-foreground transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-secondary-foreground/20 to-chart-1/20 flex items-center justify-center overflow-hidden">
                <Music className="h-24 w-24 text-secondary-foreground/40 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Music Experiments</h3>
                <p className="text-muted-foreground mb-4">
                  Exploring the creative potential of AI-generated music through Suno and experimental compositions.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-secondary-foreground/20 text-secondary-foreground px-2 py-1 rounded">Suno AI</span>
                  <span className="text-xs bg-chart-1/20 text-chart-1 px-2 py-1 rounded">Music</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Creative</span>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-2 border-border overflow-hidden hover:border-chart-1 transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-chart-1/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <Radio className="h-24 w-24 text-chart-1/40 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Live Streaming Content</h3>
                <p className="text-muted-foreground mb-4">
                  Regular streams showcasing game development, coding sessions, and AI music production on Kick.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-chart-1/20 text-chart-1 px-2 py-1 rounded">Kick</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Gaming</span>
                  <span className="text-xs bg-secondary-foreground/20 text-secondary-foreground px-2 py-1 rounded">Dev</span>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-2 border-border overflow-hidden hover:border-purple-400 transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-secondary-foreground/20 flex items-center justify-center overflow-hidden">
                <Zap className="h-24 w-24 text-purple-400/40 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tech Innovation Lab</h3>
                <p className="text-muted-foreground mb-4">
                  Experimental projects pushing the boundaries of web technology and creative coding.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">WebGL</span>
                  <span className="text-xs bg-secondary-foreground/20 text-secondary-foreground px-2 py-1 rounded">3D</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Experimental</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Music Section */}
      <section id="music" className="relative py-20 bg-gradient-to-b from-background via-dark-card/30 to-background">
        <div className="container">
          <h2 className="text-5xl font-bold mb-12 glow-cyan">AI Music & Sound</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm fascinated by the intersection of artificial intelligence and music creation. 
                Through platforms like Suno, I'm exploring how AI can be a creative partner in generating 
                unique musical compositions and soundscapes.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My experiments range from ambient electronic music to experimental sound design, 
                all created with the help of cutting-edge AI models. Check out my Suno profile 
                to hear the latest creations.
              </p>
              <a href="https://suno.com/@orp20" target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary-foreground hover:bg-secondary-foreground/90 text-background">
                  <Music className="mr-2 h-4 w-4" />
                  Listen on Suno
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden border-2 border-secondary-foreground">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('/images/ai-music-visual.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-background">
        <div className="container">
          <h2 className="text-5xl font-bold mb-12 glow-magenta text-center">Get In Touch</h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-2 border-border p-8">
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Interested in collaborating, discussing innovation, or just saying hello? 
                Reach out through any of these channels.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <a href="mailto:itorpu@itorpu.com" className="group">
                  <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent rounded-lg hover:border-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                    <Mail className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground">itorpu@itorpu.com</p>
                  </div>
                </a>

                <a href="https://kick.com/itorpu" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="p-6 bg-gradient-to-br from-secondary-foreground/10 to-secondary-foreground/5 border-2 border-secondary-foreground rounded-lg hover:border-secondary-foreground/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-foreground/20">
                    <Radio className="h-8 w-8 text-secondary-foreground mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold mb-2">Kick</h3>
                    <p className="text-sm text-muted-foreground">@itorpu</p>
                  </div>
                </a>

                <a href="https://suno.com/@orp20" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="p-6 bg-gradient-to-br from-chart-1/10 to-chart-1/5 border-2 border-chart-1 rounded-lg hover:border-chart-1/80 transition-all duration-300 hover:shadow-lg hover:shadow-chart-1/20">
                    <Music className="h-8 w-8 text-chart-1 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold mb-2">Suno</h3>
                    <p className="text-sm text-muted-foreground">@orp20</p>
                  </div>
                </a>

                <a href="https://github.com/torpu" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-400 rounded-lg hover:border-purple-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                    <Github className="h-8 w-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold mb-2">GitHub</h3>
                    <p className="text-sm text-muted-foreground">github.com/itorpu</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background/50">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 iTorpu. All rights reserved. Built with innovation and creativity.</p>
        </div>
      </footer>
    </div>
  );
}
