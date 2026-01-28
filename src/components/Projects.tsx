import { ExternalLink, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Smart Kids Play School',
    year: '2025',
    description: 'A comprehensive school website featuring responsive design, dynamic event management, and an intuitive admin dashboard for seamless content updates.',
    tech: ['React', 'Node.js', 'Responsive Design', 'Admin Panel'],
    link: 'https://smartkidsplayschool.com',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Student Profile Manager',
    year: '2024',
    description: 'Real-time student profile application built with the MERN stack, featuring efficient API integration and lightning-fast data retrieval.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Task Management App',
    year: '2024',
    description: 'Full-featured to-do list application with live updates, CRUD operations, and smooth user interactions for enhanced productivity.',
    tech: ['MERN Stack', 'Real-time Updates', 'REST API'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Resume Builder Platform',
    year: '2023',
    description: 'Web application enabling students to create professional resumes with an intuitive interface and powerful search functionality.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    gradient: 'from-orange-500 to-red-500',
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Building solutions that solve real-world problems</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient}`}>
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={16} />
                  <span>{project.year}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:scale-105 transition-transform`}
                >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
