import { Code2, Globe, Boxes, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
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

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Offering professional web development and technical solutions to bring your ideas to life
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              Hire Me for Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
