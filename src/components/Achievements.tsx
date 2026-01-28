import { Trophy, Award, Medal, Star, Users, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Academic Excellence',
    description: 'Academic Topper (2022-2023) - Recognized for outstanding academic performance',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Target,
    title: 'Smart India Hackathon 2024',
    description: 'Selected among top 40 teams from college to participate in national-level innovation challenge',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Medal,
    title: 'Webtech Hackathon',
    description: '3rd Place - Competed against 20 teams with innovative web solution',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Award,
    title: 'Google Developer Hackathon',
    description: 'Participated in prestigious Google hackathon, showcasing technical prowess',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Star,
    title: 'MERN Stack Certification',
    description: 'Completed comprehensive full-stack development course with hands-on projects',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'SIGMA 2K24 Organizing Head',
    description: 'Led college tech fest, promoting innovation and teamwork among students',
    color: 'from-red-500 to-orange-500',
  },
];

const Achievements = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Milestones that define my journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 hover:scale-105"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.color} inline-block mb-4`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Leadership & Community</h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Beyond technical achievements, I've served as Class Representative, coordinating events and
            bridging communication between students and faculty. As the Organizing Head of SIGMA 2K24,
            I led our college tech fest, fostering innovation and collaboration across the campus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
