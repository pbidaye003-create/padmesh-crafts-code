import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import MagneticButton from "./MagneticButton";
import projectImage from "@/assets/project-turf.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
          </motion.div>

          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.1s ease-out",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Card className="glass-card border-border/50 overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 group">
              <div className="md:flex">
                <div className="md:w-1/2 overflow-hidden relative">
                  <motion.img
                    src={projectImage}
                    alt="Digital Turf Booking Website"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="md:w-1/2">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">
                      Digital Turf Booking Website
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">HTML</Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">CSS</Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">JavaScript</Badge>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">Responsive Design</Badge>
                    </div>
                    <CardDescription className="text-base">
                      Developed during Ideathon as a collaborative team project
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-foreground/90 mb-6 leading-relaxed">
                      A responsive website enabling users to seamlessly view available turf slots 
                      and book them online. The project focused on creating an intuitive, 
                      user-friendly interface with smooth navigation, making the booking process 
                      efficient and accessible across all devices.
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Real-time slot availability display
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Intuitive booking interface
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Fully responsive design for mobile and desktop
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Smooth user experience with clean navigation
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <MagneticButton className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </MagneticButton>
                      <MagneticButton variant="outline" className="glass-card border-primary text-primary hover:bg-primary/10">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </MagneticButton>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
