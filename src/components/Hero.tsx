import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Scene3D from "./Scene3D";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
    >
      <Scene3D />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="text-gradient inline-block">
                Padmesh Bidaye
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Engineering Student
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building responsive web solutions and exploring innovative tech in software development, machine learning, and IoT
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <MagneticButton
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            
            <MagneticButton
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="glass-card border-primary text-primary hover:bg-primary/10"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a
              href="https://github.com/PadmeshBidaye"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/padmesh-bidaye"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:pbidaye003@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to About section"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
