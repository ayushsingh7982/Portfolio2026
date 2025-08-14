import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-6">Let's Build Something Amazing</h2>
          <p className="body-lg text-foreground-secondary max-w-2xl mx-auto">
            Ready to turn your ideas into reality? Let's connect and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-glass space-y-6">
              <h3 className="heading-md text-foreground">Get In Touch</h3>
              <p className="text-foreground-secondary body-base">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind, want to discuss opportunities, or just want to say hi, 
                I'd love to hear from you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="glass rounded-full p-3">
                    <Mail className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Email</p>
                    <a 
                      href="mailto:alex@example.com" 
                      className="text-foreground-secondary hover:text-neon-cyan transition-colors"
                    >
                      alex.chen.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="glass rounded-full p-3">
                    <MapPin className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Location</p>
                    <p className="text-foreground-secondary">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-glass-border">
                <p className="text-foreground-secondary mb-4">Find me on</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass rounded-full p-3 hover:neon-glow-cyan transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-foreground-secondary hover:text-neon-cyan transition-colors" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass rounded-full p-3 hover:neon-glow-purple transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-foreground-secondary hover:text-neon-purple transition-colors" />
                  </a>
                  <a 
                    href="mailto:alex@example.com"
                    className="glass rounded-full p-3 hover:neon-glow-cyan transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-foreground-secondary hover:text-neon-cyan transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="card-glass">
              <h4 className="heading-sm text-foreground mb-3">Fun Fact</h4>
              <p className="text-foreground-secondary text-sm">
                I respond to emails faster than I respond to text messages. 
                Try me! ⚡
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass border-glass-border focus:border-neon-cyan transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass border-glass-border focus:border-neon-cyan transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="glass border-glass-border focus:border-neon-cyan transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="glass border-glass-border focus:border-neon-cyan transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full group"
              >
                Send Message
                <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-elevated max-w-2xl mx-auto">
            <h3 className="heading-md text-foreground mb-4">Ready to start a project?</h3>
            <p className="text-foreground-secondary mb-6">
              Let's discuss your ideas and create something amazing together. 
              I'm always up for a good challenge!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" size="lg">
                Schedule a Call
              </Button>
              <Button variant="ghost-neon" size="lg">
                View My Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;