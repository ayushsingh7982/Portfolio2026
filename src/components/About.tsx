import { Code, Footprints, Coffee, Gamepad2, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative font-!serif">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-6 font-serif">About Me</h2>
          <p className="body-lg text-foreground-secondary max-w-2xl mx-auto font-serif">
            The <span className="neon-cyan">Chaos</span> behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Side */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="card-glass space-y-6">
              <h3 className="heading-md text-foreground !font-serif">My Journey</h3>
              <div className="space-y-4 text-foreground-secondary body-base !font-serif leading-relaxed">
                <p>
                  What started as a curiosity in my early college days soon turned into a deep 
                  passion for creating things with code. I still remember the excitement of 
                  building my first interactive project — spending hours debugging, learning 
                  from mistakes, and feeling an unmatched thrill when it finally worked.
                </p>
                <p>
                  Over time, I moved from simple HTML/CSS pages to mastering JavaScript, React, 
                  and full-stack development with the MERN stack. From freelance gigs to 
                  internship experiences, each project taught me not just about clean, functional 
                  code, but also about solving real-world problems efficiently and creatively.
                </p>
                <p>
                  Today, I continue to push my limits by exploring new technologies, contributing 
                  to meaningful projects, and refining my craft. And when I'm not coding, I'm 
                  probably running, working out, or diving into tech trends that inspire my next 
                  big idea.
                </p>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="card-glass">
              <h4 className="heading-sm text-foreground mb-4 font-serif">Quick Facts</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                  <span className="text-foreground-secondary font-serif">Delhi, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-neon-purple" />
                  <span className="text-foreground-secondary">
                    2+ Years Experience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Footprints className=" w-5 h-5 text-neon-cyan flex-shrink-0" />
                  <span className="text-foreground-secondary font-serif">Running</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gamepad2 className="w-5 h-5 text-neon-purple flex-shrink-0" />
                  <span className="text-foreground-secondary font-serif">Cycling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Side */}
          <div className="relative order-1 lg:order-2">
            <div className="card-elevated max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://tse3.mm.bing.net/th/id/OIP.WMNrDvKtpV55pUiZbh9EhgHaEx?pid=Api&P=0&h=220"
                  alt="Ayush Singh - Frontend Developer"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Code Window Overlay */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass rounded-lg p-3 sm:p-4 border border-neon-cyan/20">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <div className="code-text text-xs space-y-1 font-mono">
                  <div className="text-neon-purple">const</div>
                  <div className="text-foreground">developer = &#123;</div>
                  <div className="text-neon-cyan ml-4">passion: "∞",</div>
                  <div className="text-neon-cyan ml-4">coffee: true,</div>
                  <div className="text-neon-cyan ml-4">code: "clean"</div>
                  <div className="text-foreground">&#125;</div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-10 -left-4 sm:-left-6 glass rounded-full p-2 sm:p-3 animate-float">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan" />
            </div>
            <div
              className="absolute bottom-20 -right-6 sm:-right-8 glass rounded-full p-2 sm:p-3 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-neon-purple" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;