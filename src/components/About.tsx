import { GraduationCap, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Sparkles className="text-blue-600" size={28} />
              Who I Am
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a Computer Science and Design student at SRKR Engineering College, graduating in 2026 with a stellar 9.15 CGPA.
              My journey in technology is driven by curiosity and a passion for creating solutions that make a difference.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I thrive in environments that challenge me to innovate and learn continuously. Whether it's developing full-stack
              applications, creating engaging content, or leading tech initiatives, I bring dedication and creativity to everything I do.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond coding, I've organized major tech festivals, led marketing campaigns, and built real-world projects that
              bridge the gap between technology and user needs.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Academic Excellence</h4>
                  <p className="text-gray-700 mb-3">
                    Bachelor of Technology in Computer Science and Design
                  </p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>SRKR Engineering College • CGPA: 9.15</p>
                    <p>Intermediate Education • 93.3%</p>
                    <p>Secondary Education • 10 CGPA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-600 rounded-xl">
                  <Award className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Recognition</h4>
                  <p className="text-gray-700">
                    Academic Topper, Smart India Hackathon qualifier, and award-winning developer
                    with a track record of excellence in both academics and practical implementations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
