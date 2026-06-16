import React from 'react';

const Projects = () => {
  const colorMap = {
    primary: {
      from: 'from-primary-100',
      to: 'to-primary-200',
      bg: 'bg-primary/20',
      text: 'text-primary',
      hoverBg: 'hover:bg-primary',
      tagBg: 'bg-primary-100'
    },
    secondary: {
      from: 'from-secondary-100',
      to: 'to-secondary-200',
      bg: 'bg-secondary/20',
      text: 'text-secondary',
      hoverBg: 'hover:bg-secondary',
      tagBg: 'bg-secondary-100'
    },
    accent: {
      from: 'from-accent-100',
      to: 'to-accent-200',
      bg: 'bg-accent/20',
      text: 'text-accent',
      hoverBg: 'hover:bg-accent',
      tagBg: 'bg-accent-100'
    },
    noteiq: {
      from: 'from-indigo-100',
      to: 'to-indigo-200',
      bg: 'bg-indigo-500/20',
      text: 'text-indigo-600',
      hoverBg: 'hover:bg-indigo-600',
      tagBg: 'bg-indigo-100'
    }
  };

  const projects = [
    {
      title: 'NoteIQ - AI Note Assistant',
      desc: 'An intelligent note-taking platform featuring smart summarization, automated tagging, and context-aware search powered by AI.',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop',
      tags: ['React Js', 'Tailwind CSS', 'AI Integration'],
      features: ['Smart Summaries', 'AI Powered'],
      color: 'noteiq',
      link: 'https://note-iq-ebon.vercel.app/'
    },
    {
      title: 'Online Store Dashboard',
      desc: 'A dashboard for managing an online store with charts, inventory tracking, and user management.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      tags: ['React', 'Chart.js', 'Tailwind'],
      features: ['Fast Performance', 'Mobile Friendly'],
      color: 'primary'
    },
    {
      title: 'Weather App',
      desc: 'Get weather updates for any city with a clean, easy-to-use interface and helpful forecasts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2940&auto=format&fit=crop',
      tags: ['JavaScript', 'PWA', 'API'],
      features: ['Works Offline', 'Location Aware'],
      color: 'secondary'
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            My Projects
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Here are some cool things I've built
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <div key={index} className="project-card bg-white rounded-xl card-shadow hover:card-shadow-hover transition-smooth overflow-hidden">
                <div className={`aspect-video bg-gradient-to-br ${colors.from} ${colors.to} relative overflow-hidden`}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className={`absolute inset-0 ${colors.bg} flex items-center justify-center opacity-0 hover:opacity-100 transition-smooth`}>
                    <div className="flex space-x-4">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={`bg-white ${colors.text} p-3 rounded-full shadow-lg ${colors.hoverBg} hover:text-white transition-smooth`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                        </a>
                      ) : (
                        <a href={`mailto:rathodraj2612@gmail.com?subject=Project Inquiry - ${project.title}`} className={`bg-white ${colors.text} p-3 rounded-full shadow-lg ${colors.hoverBg} hover:text-white transition-smooth`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                        </a>
                      )}
                      <button className={`bg-white ${colors.text} p-3 rounded-full shadow-lg ${colors.hoverBg} hover:text-white transition-smooth`}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-poppins font-semibold text-text-primary mb-2">{project.title}</h3>
                  <p className="text-text-secondary mb-4 text-sm sm:text-base">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className={`px-2 sm:px-3 py-1 ${colors.tagBg} ${colors.text} text-xs sm:text-sm rounded-full`}>{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-text-tertiary">
                    {project.features.map(f => <span key={f}>{f}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a href="mailto:rathodraj2612@gmail.com?subject=Project Discussion" className="inline-flex items-center text-primary font-poppins font-semibold hover:text-primary-600 transition-smooth text-sm sm:text-base">
            Email Me About Your Project
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;