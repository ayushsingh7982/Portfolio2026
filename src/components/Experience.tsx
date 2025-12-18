import { useState } from "react";
import { MapPin, Calendar, ExternalLink, Briefcase } from "lucide-react";

const experienceData = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Endorphind",
    type: "Internship",
    duration: "Jun 2025 - Oct 2025 · 5 mos",
    location: "Bengaluru, Karnataka, India · Remote",
    description: "Developed full-stack web applications using modern technologies. Worked on FastAPI backend services and React frontend components. Gained experience in building scalable applications with focus on performance optimization.",
    skills: ["FastAPI", "React", "Node.js", "MongoDB", "TypeScript", "Python", "REST APIs", "Git", "Agile", "Problem Solving", "Team Collaboration"],
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGxK8-5Qr5zJA/company-logo_100_100/company-logo_100_100/0/1630570738347/endorphind_logo?e=1743033600&v=beta&t=8Qz8Qr5zJAGxK8-5Qr5zJAGxK8-5Qr5zJAGxK8-5Qr5zJA",
    featured: true,
    color: "neon-cyan"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Freelance | Self-Employed",
    type: "Freelance",
    duration: "Sep 2024 - Jan 2025 · 5 mos",
    location: "Delhi, India · Remote",
    description: "Delivered custom web solutions for various clients. Built responsive websites and web applications using React and modern CSS frameworks. Focused on creating user-friendly interfaces with excellent performance.",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Client Communication", "Project Management"],
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    featured: false,
    color: "neon-purple"
  },
  {
    id: 3,
    title: "User Experience Designer",
    company: "Test Yantra",
    type: "Internship",
    duration: "Sep 2024 - Dec 2024 · 4 mos",
    location: "Noida, Uttar Pradesh, India · Hybrid",
    description: "Designed user-centered digital experiences and interfaces. Conducted user research and created wireframes, prototypes, and design systems. Collaborated with development teams to ensure design implementation.",
    skills: ["User Experience (UX)", "Concept Generation", "Figma", "Wireframing", "Prototyping", "User Research", "Design Systems", "Collaboration"],
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGxK8-5Qr5zJA/company-logo_100_100/company-logo_100_100/0/1630570738347/testyantra_logo?e=1743033600&v=beta&t=8Qz8Qr5zJAGxK8-5Qr5zJAGxK8-5Qr5zJAGxK8-5Qr5zJA",
    featured: false,
    color: "neon-green"
  },
  {
    id: 4,
    title: "Frontend Web Developer",
    company: "CodSoft",
    type: "Internship",
    duration: "Jun 2024 - Jul 2024 · 2 mos",
    location: "Remote",
    description: "Developed responsive web applications and landing pages. Worked with HTML, CSS, JavaScript, and modern frameworks. Gained hands-on experience in frontend development best practices and version control.",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design", "Git", "Version Control", "Web Development"],
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGxK8-5Qr5zJA/company-logo_100_100/company-logo_100_100/0/1630570738347/codsoft_logo?e=1743033600&v=beta&t=8Qz8Qr5zJAGxK8-5Qr5zJAGxK8-5Qr5zJAGxK8-5Qr5zJA",
    featured: false,
    color: "neon-pink"
  }
];

const ExperienceCard = ({ 
  experience, 
  index, 
  isHovered, 
  onHover 
}: { 
  experience: any; 
  index: number; 
  isHovered: boolean; 
  onHover: (id: number | null) => void; 
}) => {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 hover-lift ${
        experience.featured ? "lg:col-span-2" : ""
      }`}
      onMouseEnter={() => onHover(experience.id)}
      onMouseLeave={() => onHover(null)}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={`card-glass h-full p-6 transition-all duration-300 ${
        isHovered ? `neon-glow-${experience.color.split('-')[1]}` : ''
      }`}>
        
        {/* Header */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="flex-shrink-0">
            <div className={`w-12 h-12 rounded-lg glass flex items-center justify-center border border-${experience.color}/20`}>
              <Briefcase className={`w-6 h-6 text-${experience.color}`} />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className={`heading-sm text-foreground mb-1 group-hover:text-${experience.color} transition-colors`}>
                  {experience.title}
                </h3>
                <p className="text-foreground-secondary font-medium">
                  {experience.company} · {experience.type}
                </p>
              </div>
              
              {experience.featured && (
                <span className={`px-3 py-1 text-xs font-semibold glass rounded-full text-${experience.color}`}>
                  Latest
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Duration & Location */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-foreground-secondary">
            <Calendar className="w-4 h-4" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-foreground-secondary">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground-secondary text-sm leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* Skills */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">Key Skills & Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill: string, skillIndex: number) => (
              <span
                key={skill}
                className={`px-2 py-1 text-xs bg-background-tertiary text-foreground-secondary rounded-md transition-all duration-300 hover:bg-${experience.color}/10 hover:text-${experience.color}`}
                style={{ animationDelay: `${skillIndex * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Effect - Additional Info */}
        {isHovered && (
          <div className="mt-6 p-4 glass rounded-lg animate-fade-up border border-${experience.color}/20">
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground-secondary">
                Click to learn more about this experience
              </span>
              <ExternalLink className={`w-4 h-4 text-${experience.color}`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 relative font-serif">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-6 font-serif">Professional Experience</h2>
          <p className="body-lg text-foreground-secondary max-w-2xl mx-auto font-serif">
            My journey through various roles, building expertise in <span className="neon-cyan">full-stack development</span> and <span className="neon-purple">user experience design</span>
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isHovered={hoveredExperience === experience.id}
              onHover={setHoveredExperience}
            />
          ))}
        </div>

        {/* Experience Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Total Experience", value: "2+", suffix: "Years", color: "neon-cyan" },
            { label: "Companies Worked", value: "4+", suffix: "Organizations", color: "neon-purple" },
            { label: "Projects Delivered", value: "15+", suffix: "Successful", color: "neon-green" },
            { label: "Technologies Mastered", value: "20+", suffix: "Tech Stack", color: "neon-pink" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="card-glass text-center p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-3xl font-bold text-${stat.color} mb-2 font-serif`}>
                {stat.value}
              </div>
              <div className="text-foreground-secondary text-sm font-serif">
                {stat.label}
              </div>
              <div className={`text-xs text-${stat.color} mt-1 font-serif`}>
                {stat.suffix}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="heading-md text-foreground mb-4 font-serif">
              Ready to Work Together?
            </h3>
            <p className="text-foreground-secondary mb-6 font-serif">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's connect and see how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/ayushsingh7982/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 rounded-lg hover:bg-neon-cyan/20 transition-all duration-300 hover-glow font-serif"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View LinkedIn Profile
              </a>
              <a
                href="mailto:singhayush8376@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-neon-purple/10 text-neon-purple border border-neon-purple/20 rounded-lg hover:bg-neon-purple/20 transition-all duration-300 hover-glow font-serif"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;