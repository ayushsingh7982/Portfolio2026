import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Ayush delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Working with Ayush was a game-changer for our startup. He transformed our ideas into a beautiful, functional website that helped us secure our first round of funding.",
    rating: 5,
    project: "Company Website"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Creative Agency",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Ayush's creativity and technical skills are outstanding. He created a stunning portfolio website that perfectly represents our brand and has significantly improved our client engagement.",
    rating: 5,
    project: "Portfolio Website"
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO",
    company: "DataFlow Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Ayush's full-stack development skills are impressive. He built a complex dashboard application with excellent performance and user experience. Highly recommended!",
    rating: 5,
    project: "Analytics Dashboard"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-6">What Clients Say</h2>
          <p className="body-lg text-foreground-secondary max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some amazing people have said about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="card-elevated text-center relative">
            <div className="absolute top-6 left-6">
              <Quote className="w-8 h-8 text-neon-cyan opacity-50" />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < currentTestimonial.rating
                      ? "text-yellow-400 fill-current"
                      : "text-foreground-secondary"
                  }`}
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-neon-cyan/20"
              />
              <div className="text-left">
                <h4 className="font-semibold text-foreground">{currentTestimonial.name}</h4>
                <p className="text-foreground-secondary text-sm">
                  {currentTestimonial.role} at {currentTestimonial.company}
                </p>
                <p className="text-neon-cyan text-xs mt-1">
                  Project: {currentTestimonial.project}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full p-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-neon-cyan w-8"
                        : "bg-foreground-secondary hover:bg-neon-cyan/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full p-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { label: "Happy Clients", value: "15+", color: "neon-cyan" },
              { label: "Projects Completed", value: "25+", color: "neon-purple" },
              { label: "Client Satisfaction", value: "100%", color: "neon-green" },
            ].map((stat, index) => (
              <div key={stat.label} className="card-glass text-center p-6">
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
      </div>
    </section>
  );
};

export default Testimonials;