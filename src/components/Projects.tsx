import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import wanderlust from "@/assets/wanderlust.png";
import weatherapp from "@/assets/weatherapp.png";
import yantra from "@/assets/yantra.png";
import projectMobile from "@/assets/project-mobile.jpg";
import portfolio from "@/assets/portfolio.png";
import golfpage from "@/assets/golfpage.png";
import greenfinite from "@/assets/greenfinite.png";

const projectsData = [
  {
    id: 1,
    title: "Wanderlust - Book your Stay",
    description:
      "Modern hotel listing and booking platform with real time listing and geolocations via Mapbox  API.",
    image: wanderlust,
    tech: [
      "React",
      "MongoDB",
      "Express.js",
      "Node.js",
      "EJS",
      "Tailwind",
      "Mapbox",
      "Bootstrap",
    ],
    liveUrl: "https://wanderlust-kerf.onrender.com/",
    githubUrl: "https://github.com/ayushsingh7982/wanderlust",
    featured: false,
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "Badal-Weather App",
    description: "Comprehensive analytics along with realtime weather updates.",
    image: weatherapp,
    tech: ["React", "TailwindCSS", "API"],
    liveUrl: "https://weatherapp-wv8f.onrender.com/",
    githubUrl: "https://github.com/ayushsingh7982/WeatherApp",
    featured: false,
    category: "Frontend",
  },
  {
    id: 3,
    title: "Responsive Portfolio",
    description:
      "A sleek, modern portfolio website to showcase my projects and skills.",
    image: portfolio,
    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Vite",
      "Typescript",
      "Figma",
      "React Router",
    ],
    liveUrl: "https://ayushsingh7982.github.io/FinalPortfolio2026/",
    githubUrl: "https://ayushsingh7982.github.io/FinalPortfolio2026/",
  },
  {
    id: 4,
    title: "Greenfinite AI",
    description:
      "Driving a sustainable future through technology-powered environmental solutions.",
    image: greenfinite,
    tech: [
      "React",
      "RAG",
      "OpenAI",
      "LLM",
      " Tailwind",
      "Fast API",
      "Python",
      "Pydantic",
      "Matplotlib",
    ],
    liveUrl: "https://www.greenfinite.ai/",
    githubUrl: "https://github.com/ayushsingh7982",
    featured: true,
    category: "AI/ML",
  },
  {
    id: 5,
    title: "UI/UX Design ",
    description:
      "Comprehensive design system with reusable components and documentation.",
    image: yantra,
    tech: ["React", "Figma", "Tailwind", "Canva", "Adobe Photoshop"],
    liveUrl: "https://www.yaantra.com/",
    githubUrl: "https://github.com/ayushsingh7982",
    featured: false,
    category: "Design",
  },
  {
    id: 6,
    title: "Golf Page Landing Page",
    description:
      "A captivating landing page to promote a Web app, highlighting its features and benefits.",
    image: golfpage,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://ayushsingh7982.github.io/GolfLandingPage/",
    githubUrl: "https://github.com/ayushsingh7982/GolfLandingPage",
  },
];

const categories = ["All", "Full-Stack", "Frontend", "AI/ML", "Design"];

const ProjectCard = ({
  project,
  isHovered,
  onHover,
}: {
  project: any;
  isHovered: boolean;
  onHover: (id: number | null) => void;
}) => {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 hover-lift ${
        project.featured ? "md:col-span-2 md:row-span-2" : ""
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
              project.featured ? "h-64" : "h-48"
            } ${isHovered ? "scale-110" : "scale-100"}`}
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-90" : "opacity-40"
            }`}
          />

          {/* Action Buttons */}
          <div
            className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            <Button
              size="sm"
              variant="ghost-neon"
              className="p-2"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost-neon"
              className="p-2"
              onClick={() => window.open(project.githubUrl, "_blank")}
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
              onClick={() => window.open(project.liveUrl, "_blank")}
              className="flex-1"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Live
            </Button>
            <Button
              variant="ghost-neon"
              size="sm"
              onClick={() => window.open(project.githubUrl, "_blank")}
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

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

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
          <Button asChild variant="ghost-neon" size="lg">
            <a
              href="https://github.com/ayushsingh7982"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
              <Github className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
