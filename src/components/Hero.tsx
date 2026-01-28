import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import profile from "../assets/profile.jpg";

const Hero = () => {
  // scroll to next section
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* ===== Content ===== */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* ===== Profile Image (Circle) ===== */}
          <div className="mb-6 flex justify-center animate-fade-in">
            <img
              src={profile}
              alt="Hema Profile"
              className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover
                         border-4 border-white shadow-lg"
            />
          </div>

          {/* ===== Name & Intro ===== */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Hema Sai Sri Lakshmi Nallam
            </h1>

            <div className="h-1 w-28 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-6" />

            <p className="text-2xl md:text-3xl text-gray-700 font-light mb-6">
              Full Stack Developer & Creative Technologist
            </p>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate about building innovative web solutions and crafting
              engaging digital experiences with a balance of design and code.
            </p>
          </div>

          {/* ===== Buttons & Socials ===== */}
          <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=nallamhema08@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white
             rounded-full hover:bg-blue-600 transition-all hover:scale-105 shadow-md"
>
  <Mail size={20} />
  <span>Get in Touch</span>
</a>


            {[
              { icon: Github, link: "https://github.com/HemaNallam" },
              { icon: Linkedin, link: "https://linkedin.com/in/hema-nallam-008a83300" },
              { icon: Phone, link: "tel:9063442773" },
            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/70 border border-gray-200 rounded-full
                           hover:border-blue-400 hover:text-blue-500
                           transition-all hover:scale-105 backdrop-blur-sm"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* ===== Scroll Indicator ===== */}
          <div
            onClick={scrollToAbout}
            className="animate-bounce cursor-pointer"
          >
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>

        </div>
      </div>

      {/* ===== Bottom Fade (Click-through safe) ===== */}
      <div className="absolute bottom-0 left-0 right-0 h-28
                      bg-gradient-to-t from-white to-transparent
                      pointer-events-none" />

    </section>
  );
};

export default Hero;
