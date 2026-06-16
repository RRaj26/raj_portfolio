import React, { useState } from 'react';

const Education = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const items = [
    {
      type: 'education',
      title: 'Bachelor of Engineering (B.E.) in Information Technology',
      date: '2024 - 2027',
      org: 'Ahmedabad Institute of Technology - AIT',
      desc: 'Developed projects demonstrating problem-solving and full-stack development skills',
      bgColor: 'bg-primary',
      textColor: 'text-primary',
      hoverColor: 'hover:text-primary-600',
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      )
    },
    {
      type: 'cert',
      title: 'React & Redux',
      date: 'Sep 2025',
      org: (
        <span>
          KNOWLEDGE <span className="text-orange-400">GATE</span>
        </span>
      ),
      desc: 'Deep dive into React components, hooks, and state management with Redux.',
      bgColor: 'bg-accent',
      textColor: 'text-accent',
      hoverColor: 'hover:text-accent-600',
      image: '/certificates/React&Redux1.jpg',
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      )
    },
    {
      type: 'cert',
      title: 'Web Development Bootcamp',
      date: 'Feb 2024',
      org: 'Udemy',
      desc: 'Comprehensive full-stack development training covering frontend and backend technologies.',
      bgColor: 'bg-secondary',
      textColor: 'text-secondary',
      hoverColor: 'hover:text-secondary-600',
      image: '/certificates/UdemyRAJ.jpg',
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      )
    },
    {
      type: 'cert',
      title: 'HTML TO REACTJS',
      date: 'NOV 2024 - JAN 2025',
      org: 'CODE WITH RANDOM',
      desc: 'Mastered web development from basic HTML to advanced React.js concepts.',
      bgColor: 'bg-warning',
      textColor: 'text-warning',
      hoverColor: 'hover:text-orange-600',
      image: '/certificates/REACTJS.jpg',
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      )
    },
    {
      type: 'education',
      title: 'Diploma in Information Technology Engineering',
      date: '2021 - 2024',
      org: 'R. C. Technical Institute',
      desc: 'Learned programming basics, how to solve problems with code, and built several web projects.',
      bgColor: 'bg-primary',
      textColor: 'text-primary',
      hoverColor: 'hover:text-primary-600',
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      )
    }
  ];

  const closeCert = () => setSelectedCert(null);

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            My Education & Certificates
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Here's what I've learned through school and online courses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>
            
            {items.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 sm:mb-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 ${item.bgColor} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div className={`ml-12 sm:ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-4 sm:p-6 rounded-xl card-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-text-primary text-base sm:text-lg">{item.title}</h3>
                      <span className="text-xs sm:text-sm text-text-tertiary mt-1 sm:mt-0">{item.date}</span>
                    </div>
                    <p className="text-text-secondary mb-3 text-sm sm:text-base">{item.org}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs sm:text-sm text-text-tertiary flex-1">
                        {item.desc}
                      </p>
                      {item.type === 'cert' && (
                        <button 
                          onClick={() => setSelectedCert(item)}
                          className={`${item.textColor} ${item.hoverColor} transition-smooth ml-3 p-2 hover:bg-gray-50 rounded-full`}
                          title="View Certificate"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeCert}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-border flex justify-between items-center bg-white">
              <h3 className="font-poppins font-bold text-text-primary">{selectedCert.title}</h3>
              <button 
                onClick={closeCert}
                className="p-2 hover:bg-gray-100 rounded-full transition-smooth text-text-secondary hover:text-text-primary"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-gray-50 flex items-center justify-center min-h-[300px]">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="max-h-[70vh] w-auto object-contain rounded shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/800x600?text=Certificate+Image+Coming+Soon';
                }}
              />
            </div>
            <div className="p-4 bg-white text-center">
              <p className="text-text-secondary text-sm">Issued by {selectedCert.org} • {selectedCert.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;