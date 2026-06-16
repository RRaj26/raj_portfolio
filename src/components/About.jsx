import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-surface scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-text-primary">
              About Me
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              <p>
                I'm a web developer who loves building websites and web apps. I
                started coding because I was curious about how websites work,
                and now it's my passion.
              </p>
              <p>
                I like learning new things and keeping up with the latest web
                development trends. I don't just copy code - I understand how it
                works, which helps me solve problems and build better apps.
              </p>
              <p>
                I focus on making websites that are fast, easy to use, and work
                well on all devices. Every project I work on is built with care
                and attention to detail.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl card-shadow">
              <h3 className="font-poppins font-semibold text-text-primary mb-4">
                How I Got Here
              </h3>
              <div className="space-y-3">
                {[
                  "Completed IT Diploma and CS Degree at GTU",
                  "Mastered Full-Stack basics through Udemy Bootcamp",
                  "Specialized in React & Redux state management",
                  "Earned multiple certifications from freeCodeCamp and Knowledge Gate",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-text-secondary text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl card-shadow">
              <h3 className="font-poppins font-semibold text-text-primary mb-4 flex items-center text-base sm:text-lg">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                  />
                </svg>
                What I Want to Do
              </h3>
              <ul className="space-y-3 text-text-secondary">
                {[
                  "Work with a great team where I can help out right away",
                  "Build useful websites and apps that people actually want to use",
                  "Keep learning new technologies and get even better at coding",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl card-shadow">
              <h3 className="font-poppins font-semibold text-text-primary mb-4 flex items-center text-base sm:text-lg">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-secondary mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                How I Solve Problems
              </h3>
              <div className="space-y-3 text-text-secondary">
                {[
                  "First, I understand what the user needs",
                  "Then I research the best way to solve it",
                  "I write clean code that's easy to understand",
                  "Finally, I test it thoroughly and get feedback",
                ].map((step, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <span className="text-secondary font-semibold flex-shrink-0">
                      {i + 1}.
                    </span>
                    <span className="text-sm sm:text-base">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
