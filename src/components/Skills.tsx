import { Code2, Palette, Users, Wrench } from 'lucide-react';

const allSkills = [
  { name: 'React.js', category: 'Web Development', level: 90, icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', category: 'Web Development', level: 90, icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { name: 'HTML/CSS', category: 'Web Development', level: 95, icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { name: 'Node.js', category: 'Web Development', level: 85, icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { name: 'MySQL', category: 'Web Development', level: 85, icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { name: 'PHP', category: 'Web Development', level: 80, icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { name: 'Python', category: 'Programming', level: 85, icon: Wrench, color: 'from-emerald-500 to-teal-500' },
  { name: 'Java', category: 'Programming', level: 80, icon: Wrench, color: 'from-emerald-500 to-teal-500' },
  { name: 'C', category: 'Programming', level: 75, icon: Wrench, color: 'from-emerald-500 to-teal-500' },
  { name: 'Canva', category: 'Design & Content', level: 90, icon: Palette, color: 'from-purple-500 to-pink-500' },
  { name: 'UI/UX Design', category: 'Design & Content', level: 80, icon: Palette, color: 'from-purple-500 to-pink-500' },
  { name: 'Veed', category: 'Design & Content', level: 85, icon: Palette, color: 'from-purple-500 to-pink-500' },
  { name: '3D Maya', category: 'Design & Content', level: 70, icon: Palette, color: 'from-purple-500 to-pink-500' },
  { name: 'Communication', category: 'Soft Skills', level: 95, icon: Users, color: 'from-orange-500 to-red-500' },
  { name: 'Leadership', category: 'Soft Skills', level: 90, icon: Users, color: 'from-orange-500 to-red-500' },
  { name: 'Time Management', category: 'Soft Skills', level: 90, icon: Users, color: 'from-orange-500 to-red-500' },
  { name: 'Design Thinking', category: 'Soft Skills', level: 85, icon: Users, color: 'from-orange-500 to-red-500' },
];

const categoryInfo = {
  'Web Development': { icon: Code2, color: 'from-blue-500 to-cyan-500' },
  'Programming': { icon: Wrench, color: 'from-emerald-500 to-teal-500' },
  'Design & Content': { icon: Palette, color: 'from-purple-500 to-pink-500' },
  'Soft Skills': { icon: Users, color: 'from-orange-500 to-red-500' },
};

const Skills = () => {
  const sortedSkills = [...allSkills].sort((a, b) => b.level - a.level);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Comprehensive skill set with proven expertise</p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Skills by Proficiency</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {sortedSkills.map((skill, index) => {
              const colorClasses = {
                'from-blue-500 to-cyan-500': 'bg-blue-100 text-blue-700',
                'from-emerald-500 to-teal-500': 'bg-emerald-100 text-emerald-700',
                'from-purple-500 to-pink-500': 'bg-purple-100 text-purple-700',
                'from-orange-500 to-red-500': 'bg-orange-100 text-orange-700',
              };
              const bgClass = colorClasses[skill.color as keyof typeof colorClasses];

              return (
                <div
                  key={index}
                  className={`${bgClass} px-4 py-2 rounded-full font-semibold text-sm hover:scale-110 transition-transform cursor-default`}
                  style={{ opacity: 0.6 + (skill.level / 100) * 0.4 }}
                >
                  {skill.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Skill Breakdown</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(categoryInfo).map(([category, info]) => {
              const Icon = info.icon;
              const categorySkills = allSkills.filter(s => s.category === category);

              return (
                <div
                  key={category}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-8 group hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color}`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">{category}</h4>
                  </div>

                  <div className="space-y-4">
                    {categorySkills.map((skill, idx) => (
                      <div key={idx} className="group/item">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${info.color} text-white`}>
                              {skill.level}
                            </span>
                          </div>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${info.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Always Learning</h3>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            I'm committed to continuous learning and staying updated with the latest technologies and best practices in web development, design, and digital innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
