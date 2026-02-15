import React from 'react';
import Button from './UI/Button';

const Hero = () => {
    return (
        <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden bg-background">

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-6xl mx-auto px-4 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                </div>

                <h1 className="relative w-fit text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase text-primary leading-[0.9] tracking-tight mb-8">
                    <span>Gesix GeoAi Intern</span>


                </h1>

                <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                    AI-DS student focused on the building AI Driven Interactive Applications.
                    Currently building systems using React, Python, and computer vision
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button
                        variant="primary"
                        className="h-16 px-6 sm:px-10 text-lg shadow-xl shadow-primary/20"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Projects
                    </Button>

                </div>
            </div>
        </section>
    );
};

export default Hero;
