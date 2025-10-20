import { GraduationCap, Code, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <Card className="mb-12 border-border bg-card animate-fade-in">
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

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-in-left">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  12th Pass from T.P. Bhatia College of Science
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  2023–2025 batch
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-muted-foreground">
                  Building responsive websites and web applications
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  HTML, CSS, JavaScript & frameworks
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Exploring ML, IoT, and emerging technologies
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Problem-solving & open-source
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
