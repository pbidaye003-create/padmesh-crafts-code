import { GraduationCap, Code, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="mb-12 glass-card border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  I'm a Computer Engineering student with interests in software development, 
                  machine learning, and IoT. I enjoy learning by building, collaborating on 
                  open-source projects, and solving challenging technical problems.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  My approach combines practical coding skills with a passion for innovation, 
                  always seeking to create solutions that make a real impact.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    12th Pass from T.P. Bhatia College of Science
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    2023–2025 batch
                  </p>
                  <p className="text-muted-foreground mt-3">
                    Completed schooling from St. Xavier's High School
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 group h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: -360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Code className="h-8 w-8 text-secondary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Development</h3>
                  <p className="text-muted-foreground">
                    Building responsive websites and web applications
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    HTML, CSS, JavaScript & frameworks
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Cpu className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Exploring ML, IoT, and emerging technologies
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Problem-solving & open-source
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
