import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectMobile from "@/assets/project-mobile.jpg";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with real-time inventory, advanced filtering, and seamless checkout experience.",
    image: projectEcommerce,
    tech: ["React", "TypeScript", "Next.js", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Comprehensive analytics platform with real-time data visualization and interactive charts.",
    image: projectDashboard,
    tech: ["React", "D3.js", "Node.js", "GraphQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Fitness Mobile App",
    description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
    image: projectMobile,
    tech: ["React Native", "TypeScript", "Firebase", "Expo"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "Mobile"
  },
  {
    id: 4,
    title: "AI Chat Interface",
    description: "Intelligent chat interface with natural language processing and real-time responses.",
    image: projectDashboard,
    tech: ["React", "WebSocket", "OpenAI", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "AI/ML"
  },
  {
    id: 5,
    title: "Design System",
    description: "Comprehensive design system with reusable components and documentation.",
    image: projectEcommerce,
    tech: ["React", "Storybook", "Tailwind", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "Design"
  },
  {
    id: 6,
    title: "Blockchain DApp",
    description: "Decentralized application for NFT marketplace with Web3 integration.",
    image: projectMobile,
    tech: ["React", "Web3.js", "Solidity", "Ethereum"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "Web3"
  }
];

const categories = ["All", "Full-Stack", "Frontend", "Mobile", "AI/ML", "Design", "Web3"];

const ProjectCard = ({ project, isHovered, onHover }: { project: any; isHovered: boolean; onHover: (id: number | null) => void }) => {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 hover-lift ${
        project.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="card-glass h-full overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full object-cover transition-all duration-700 ${
              project.featured ? 'h-64' : 'h-48'
            } ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-90' : 'opacity-40'
          }`} />
          
          {/* Action Buttons */}
          <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
            <Button
              size="sm"
              variant="ghost-neon"
              className="p-2"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost-neon"
              className="p-2"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-4 h-4" />
            </Button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold glass rounded-full text-neon-cyan">
              {project.category}
            </span>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="heading-sm text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
              {project.title}
            </h3>
            <p className="text-foreground-secondary text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-background-tertiary text-foreground-secondary rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3 pt-2">
            <Button
              variant="neon"
              size="sm"
              onClick={() => window.open(project.liveUrl, '_blank')}
              className="flex-1"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Live
            </Button>
            <Button
              variant="ghost-neon"
              size="sm"
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="flex-1"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-6">Featured Projects</h2>
          <p className="body-lg text-foreground-secondary max-w-2xl mx-auto">
            A showcase of my recent work, from concept to deployment
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "neon" : "ghost-neon"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onHover={setHoveredProject}
            />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="ghost-neon" size="lg">
            View All Projects on GitHub
            <Github className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;