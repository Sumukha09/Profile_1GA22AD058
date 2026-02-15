import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-8 bg-surface border-t border-white/5 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-2xl font-black uppercase text-primary mb-4 tracking-tight">Sumukha PB</h2>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 text-sm text-primary/80 font-medium tracking-wide">
                    <a href="https://github.com/Sumukha09" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
                    <span className="text-white/20">|</span>
                    <a href="https://www.linkedin.com/in/sumukha-pb-17149031a/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                    <span className="text-white/20">|</span>
                    <a href="mailto:sumukhapb2004@gmail.com" className="hover:text-accent transition-colors">Email</a>
                </div>

                <div className="text-xs text-primary/80 uppercase tracking-widest font-bold">
                    © 2026
                </div>
            </div>
        </footer>
    );
};

export default Footer;
