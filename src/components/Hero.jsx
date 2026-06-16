import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const texts = ['Front-End Developer', 'React Specialist', 'Ready to Build Cool Stuff'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,Raj Rathod - Front-End Developer Resume';
    link.download = 'Raj_Rathod_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="pt-16 flex items-center bg-gradient-to-br from-primary-50 to-white overflow-x-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="text-primary font-inter font-medium text-base sm:text-lg">
                <span>{text}</span>
                <span className="animate-pulse">|</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-text-primary leading-tight">
                Hi, I'm Raj - 
                <span className="text-primary block sm:inline"> Web Developer</span> 
                <span className="block">Ready to Build Your Next Project</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
                I create modern websites and web apps with React, JavaScript, and other cool technologies. Let's build something awesome together!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:rathodraj2612@gmail.com?subject=Job Opportunity&body=Hi Raj," className="btn-primary inline-flex items-center justify-center text-center min-h-[48px]">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Send Email
              </a>
              <button onClick={downloadResume} className="bg-white border-2 border-primary text-primary font-poppins font-semibold px-6 py-3 rounded-lg transition-smooth hover:bg-primary hover:text-white inline-flex items-center justify-center text-center min-h-[48px]">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Download Resume
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Main Profile Image Container */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <img src="/images/profile.jpg" alt="Raj Rathod" className="w-full h-full object-cover" />
              </div>
              
              {/* Professional Floating Badges */}
              {/* React Badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-8 bg-white/90 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg border border-primary-50 z-20 animate-float-slow flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#61DAFB]"></div>
                <span className="font-poppins font-bold text-xs sm:text-sm text-text-primary">React</span>
              </div>

              {/* AI Badge */}
              <div className="absolute top-0 -left-6 sm:-top-2 sm:-left-10 bg-white/90 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg border border-primary-50 z-20 animate-float-light flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
                <span className="font-poppins font-bold text-xs sm:text-sm text-text-primary">AI</span>
              </div>

              {/* JS Badge */}
              <div className="absolute top-1/2 -left-12 sm:-left-16 transform -translate-y-1/2 bg-white/90 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg border border-primary-50 z-20 animate-float-medium flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#F7DF1E]"></div>
                <span className="font-poppins font-bold text-xs sm:text-sm text-text-primary">JavaScript</span>
              </div>

              {/* Gemini Badge */}
              <div className="absolute bottom-4 -left-6 sm:bottom-2 sm:-left-10 bg-white/90 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg border border-primary-50 z-20 animate-float-light flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#4285F4]"></div>
                <span className="font-poppins font-bold text-xs sm:text-sm text-text-primary">Gemini</span>
              </div>

              {/* Tailwind Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 bg-white/90 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg border border-primary-50 z-20 animate-float-fast flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#38B2AC]"></div>
                <span className="font-poppins font-bold text-xs sm:text-sm text-text-primary">Tailwind</span>
              </div>

              {/* Decorative Subtle Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary-100/50 rounded-full z-0 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;