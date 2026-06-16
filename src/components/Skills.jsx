import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Building interactive user interfaces' },
    { name: 'JavaScript', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'Making websites interactive and dynamic' },
    { name: 'HTML5', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', desc: 'Building the structure of web pages' },
    { name: 'CSS3', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', desc: 'Making websites look beautiful and responsive' },
    { name: 'Tailwind', level: 'Advanced', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', desc: 'Fast styling with utility classes' },
    { name: 'Git', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', desc: 'Managing code versions and collaboration' },
    { name: 'Node.js', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: 'Server-side JavaScript development' },
    { name: 'Python', level: 'Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'Learning backend logic and data processing' },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-surface scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            What I Know
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            These are the technologies I use to build websites and web apps
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card bg-white p-4 sm:p-6 rounded-xl card-shadow hover:card-shadow-hover transition-smooth cursor-pointer group">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-smooth">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-text-primary text-sm sm:text-base">{skill.name}</h3>
                  <div className="text-xs sm:text-sm text-text-secondary mt-1">{skill.level}</div>
                  <div className="hidden group-hover:block mt-2 text-xs text-text-tertiary">
                    {skill.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;