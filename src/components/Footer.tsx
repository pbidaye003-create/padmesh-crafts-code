import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/50 backdrop-blur-xl border-t border-border/50 py-12 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/PadmeshBidaye", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/padmesh-bidaye", label: "LinkedIn" },
              { icon: Mail, href: "mailto:pbidaye003@gmail.com", label: "Email" },
              { icon: Instagram, href: "https://instagram.com/padmesh_bidaye", label: "Instagram" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-12 h-12 rounded-xl glass-card border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <p className="text-sm text-muted-foreground text-center font-medium">
            © {currentYear} Padmesh Bidaye. All rights reserved.
          </p>
          
          <p className="text-xs text-muted-foreground/70 text-center">
            Built with <span className="text-primary">passion</span> and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
