import { Code2, Globe, Boxes, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Designing and developing responsive websites using modern HTML, CSS, JavaScript, and frameworks. Creating user-friendly interfaces with clean, maintainable code.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Code2,
      title: "Custom Projects",
      description: "Taking on small to medium-sized projects in coding, web applications, or automation. Delivering practical solutions tailored to your specific needs.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Boxes,
      title: "Technical Solutions",
      description: "Building innovative solutions with a focus on software development, IoT integration, and emerging technologies. Problem-solving with creative approaches.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Offering professional web development and technical solutions to bring your ideas to life
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full">
                  <CardHeader>
                    <motion.div
                      className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </motion.div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <MagneticButton
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              Hire Me for Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
