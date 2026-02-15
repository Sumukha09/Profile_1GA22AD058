import React from 'react';

const Techstack = () => {
    const proficientSkills = [
        "Python", "JavaScript", "HTML", "CSS", "Simple ML Models", "Simple DL Models", "C++"
    ];

    const familiarSkills = [
        "OpenCV", "Computer Vision", "Node.js", "Mongo DB", "React Native"
    ];

    const SkillCard = ({ skill }) => (
        <div className="group relative p-4 bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-accent/50 hover:bg-white/10 clip-corner">
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500"></div>
            <span className="relative z-10 text-lg font-bold text-primary group-hover:text-primary transition-colors uppercase tracking-wide">
                {skill}
            </span>
        </div>
    );

    return (
        <section id="techstack" className="relative w-full py-24 bg-background border-t border-white/5 scroll-mt-24 content-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-12 h-0.5 bg-primary"></div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary/80">Skills & Expertise</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Proficient Section */}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-3xl font-black uppercase text-primary mb-2">Proficient</h3>
                        </div>
                        <ul className="grid grid-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-3 gap-4">
                            {proficientSkills.map((skill) => (
                                <li key={skill}>
                                    <SkillCard skill={skill} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Familiar Section */}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-3xl font-black uppercase text-primary mb-2">Familiar</h3>
                        </div>
                        <ul className="grid grid-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-3 gap-4">
                            {familiarSkills.map((skill) => (
                                <li key={skill}>
                                    <SkillCard skill={skill} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Techstack;