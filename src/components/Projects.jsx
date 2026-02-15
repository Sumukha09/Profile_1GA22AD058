import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: '01',
            title: 'Appointment Booking Chatbot',
            desc: 'Built a chatbot to automate appointment scheduling through conversational interaction, reducing manual booking effort. Enables users to book, reschedule, and manage appointments in real time for faster and more efficient coordination.',
            link: 'https://github.com/Sumukha09/Appointment_Booking_Chatbot'
        },
        {
            id: '02',
            title: 'Smart Tourism Platform',
            desc: 'Created an AI-based travel platform that generates personalized and safety-focused trip recommendations. Helps users plan efficient itineraries using data-driven insights and intelligent destination suggestions.',
            link: 'https://github.com/Sumukha09/AI-Driven-Smart-Tourism-Platform-for-Safe-and-Personalise-Travel'
        },
        {
            id: '03',
            title: 'Face Recognition System',
            desc: 'Developed a real-time face recognition system to detect and identify individuals using computer vision techniques. Demonstrates automated identity verification for security, attendance, and access-control use cases.',
            link: 'https://github.com/Sumukha09/Face-Recognition/tree/main/face_recognition_project-main'
        },
        {
            id: '04',
            title: 'Fit Track',
            desc: 'Built a fitness tracking application to log workouts and monitor user health progress over time. Provides activity tracking and progress insights to help users maintain consistent fitness routines.',
            link: 'https://github.com/Sumukha09/Fit-Track'
        },
    ];

    return (
        <section id="projects" className="relative w-full py-32 bg-background overflow-hidden content-auto">
            {/* Background Text */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-transparent pointer-events-none select-none uppercase tracking-tighter leading-none z-0 whitespace-nowrap"
                style={{ WebkitTextStroke: '2px #333333' }} aria-hidden="true">
                Projects
            </div>

            <div className="relative z-10 w-full">
                <div className="text-center mb-20 px-4 sm:px-6">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-primary mb-4">Projects</h2>

                </div>

                <div className="flex w-full overflow-hidden select-none justify-center">
                    <ul className="flex flex-wrap justify-center gap-8 px-4">
                        {projects.map((project) => (
                            <li key={project.id}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col md:block w-full max-w-[350px] md:w-[400px] md:max-w-none group relative h-auto md:h-[600px] bg-surface border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-lg md:rounded-none md:clip-corner pointer-events-auto"
                                    aria-label={`View project: ${project.title}`}
                                >
                                    <div className="relative h-[250px] md:absolute md:inset-x-0 md:top-0 md:bottom-64 flex flex-col items-center justify-center bg-transparent group-hover:bg-accent/5 transition-colors p-4 sm:p-6">
                                        <div className="text-center">
                                            <span className="block text-8xl font-black text-white/5 mb-4 group-hover:text-accent/20 transition-colors">{project.id}</span>
                                            <div className="w-16 h-1 w- bg-white/10 mx-auto mb-4 group-hover:bg-accent transition-colors"></div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-auto md:absolute md:bottom-0 md:left-0 md:right-0 md:h-64 p-4 sm:p-6 bg-surface border-t border-white/5 flex flex-col justify-start group-hover:border-accent/50 transition-colors">
                                        <div className="text-xl font-bold text-primary uppercase mb-3 break-words">{project.title}</div>
                                        <div className="text-sm text-primary/80 mb-4 leading-relaxed font-medium text-left">{project.desc}</div>
                                        <p className="text-xs text-accent uppercase tracking-widest font-bold mt-4 md:mt-auto flex items-center gap-2">
                                            View Project <span className="text-lg">→</span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Projects;

