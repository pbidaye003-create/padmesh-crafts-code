import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "Responsive Design", level: 85 },
        { name: "JavaScript Frameworks", level: 70 },
      ],
    },
    {
      category: "Technologies & Concepts",
      skills: [
        { name: "IoT", level: 65 },
        { name: "Machine Learning", level: 60 },
        { name: "Software Development", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <Card
                key={catIndex}
                className="border-border bg-card animate-fade-in"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-primary">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000 ease-out animate-slide-in-left"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.1)}s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
