import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Scene3D from "./Scene3D";
import profilePic from "@/assets/profile-pic.jpg";

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
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content card */}
          <motion.div
            className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Profile Picture */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <img
                  src={profilePic}
                  alt="Padmesh Bidaye"
                  className="w-full h-full rounded-full object-cover object-top border-4 border-primary/30 shadow-glow"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="text-gradient inline-block">
                  Padmesh Bidaye
                </span>
              </h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Computer Engineering Student
            </motion.p>
            
            {/* Description */}
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Building responsive web solutions and exploring innovative tech in software development, machine learning, and IoT
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <MagneticButton
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg hover:shadow-xl transition-shadow"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              
              <MagneticButton
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="glass-card border-primary/50 text-foreground hover:border-primary hover:bg-primary/10"
              >
                Get In Touch
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <motion.a
                href="https://github.com/PadmeshBidaye"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="GitHub Profile"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/padmesh-bidaye"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:pbidaye003@gmail.com"
                className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Email"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
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
