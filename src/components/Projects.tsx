import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projectImage from "@/assets/project-turf.jpg";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <Card className="border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in group">
            <div className="md:flex">
              <div className="md:w-1/2 overflow-hidden">
                <img
                  src={projectImage}
                  alt="Digital Turf Booking Website"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="md:w-1/2">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">
                    Digital Turf Booking Website
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Responsive Design</Badge>
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
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
