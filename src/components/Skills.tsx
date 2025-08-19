import { useState } from "react";

const skillsData = [
  {
    category: "Frontend",
    color: "neon-cyan",
    skills: [
      { name: "React", level: 90, experience: "2+ years" },
      { name: "TypeScript", level: 70, experience: "1+ years" },
      { name: "Bootstrap", level: 95, experience: "3+ years" },
      { name: "Tailwind CSS", level: 95, experience: "3+ years" },
      { name: "JavaScript", level: 90, experience: "3+ years" },
      { name: "SASS/SCSS", level: 90, experience: "1+ years" },
    ]
  },
  {
    category: "Backend & Tools",
    color: "neon-purple",
    skills: [
      { name: "Node.js", level: 75, experience: "2+ years" },
      { name: "Express.js", level: 70, experience: "2+ years" },
      { name: "PostgreSQL", level: 65, experience: "2+ years" },
      { name: "MongoDB", level: 70, experience: "2+ years" },
      { name: "SQL", level: 60, experience: "2+ years" },
      { name: "Git", level: 95, experience: "3+ years" },
    ]
  },
  {
    category: "Design & UX",
    color: "neon-green",
    skills: [
      { name: "Figma", level: 85, experience: "3+ years" },
      { name: "Canva", level: 80, experience: "3+ years" },
      { name: "Framer Motion", level: 60, experience: "1+ years" },
      { name: "Three.js", level: 70, experience: "1+ years" },
      { name: "GSAP", level: 55, experience: "1+ years" },
      { name: "Responsive Design", level: 95, experience: "3+ years" },
    ]
  }
];

const SkillCard = ({ skill, color, index }: { skill: any; color: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card-glass p-6 cursor-pointer transition-all duration-500 hover-lift ${
        isHovered ? 'neon-glow-cyan' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-between items-start mb-4">
        <h4 className="heading-sm text-foreground">{skill.name}</h4>
        <span className={`text-xs px-2 py-1 rounded-full glass text-${color}`}>
          {skill.experience}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground-secondary">Proficiency</span>
          <span className={`text-sm font-semibold text-${color}`}>{skill.level}%</span>
        </div>
        
        <div className="w-full bg-background-tertiary rounded-full h-2 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r transition-all duration-1000 ease-out ${
              color === 'neon-cyan' ? 'from-neon-cyan to-neon-cyan/70' :
              color === 'neon-purple' ? 'from-neon-purple to-neon-purple/70' :
              'from-neon-green to-neon-green/70'
            }`}
            style={{
              width: isHovered ? `${skill.level}%` : '0%',
              transitionDelay: '0.2s'
            }}
          />
        </div>
      </div>

      {/* Additional Info on Hover */}
      {/* Uncomment if you want to show additional info on hover */}

      {isHovered && (
        <div className="mt-4 p-3 glass rounded-lg animate-fade-up">
          <p className="text-xs text-foreground-secondary">
            Specialized in building modern, scalable applications with focus on performance and user experience.
          </p>
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-6">Skills & Expertise</h2>
          <p className="body-lg text-foreground-secondary max-w-2xl mx-auto">
            Technologies I love working with and the experience behind them
          </p>
        </div>

        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-8">
              <div className="text-center">
                <h3 className={`heading-md text-${category.color} mb-2`}>
                  {category.category}
                </h3>
                <div className={`w-24 h-0.5 bg-${category.color} mx-auto opacity-50`} />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    index={skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: "25+", color: "neon-cyan" },
            { label: "Years Experience", value: "3+", color: "neon-purple" },
            { label: "Happy Clients", value: "10+", color: "neon-green" },
            { label: "Lines of Code", value: "∞", color: "neon-pink" },
          ].map((stat, index) => (
            <div key={stat.label} className="card-glass text-center p-6 hover-lift">
              <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-foreground-secondary text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;