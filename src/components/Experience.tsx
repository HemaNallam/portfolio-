import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Content Intern',
    company: 'Pixeltests',
    period: 'May 2024 - Oct 2024',
    color: 'from-purple-500 to-pink-500',
    highlights: [
      'Designed 20+ AI-powered social media creatives, driving 15% engagement growth',
      'Spearheaded content strategy for EdTech video production on emerging technologies',
      'Maintained consistent brand quality across multiple digital platforms',
    ],
  },
  {
    role: 'Marketing Intern',
    company: 'Campus Online',
    period: 'Dec 2023 - Apr 2024',
    color: 'from-blue-500 to-cyan-500',
    highlights: [
      'Launched campus lunch box initiative serving affordable meals to students',
      'Partnered with local businesses and startup cell for community-driven projects',
      'Analyzed engagement metrics to optimize digital marketing campaigns',
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Real-world experience shaping digital solutions</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <div className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 p-1 rounded-full bg-gradient-to-r ${exp.color}`}>
                      <Briefcase size={14} className="text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
