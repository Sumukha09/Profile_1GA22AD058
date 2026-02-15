import React, { useState, useEffect } from 'react';
import Button from './UI/Button';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navLinks = ['Home', 'Techstack', 'Projects', 'Publications'];

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'} pointer-events-none`}>

            <a href="#home" className={`pointer-events-auto transition-all duration-300 ${isScrolled ? 'px-4 py-2 bg-primary/5 backdrop-blur-none md:backdrop-blur-md border border-white/10 shadow-sm clip-corner' : ''}`}>
                <div className="text-2xl font-black tracking-tighter text-primary uppercase">
                    Portfolio
                </div>
            </a>

            {/* Navigation Links - Centered Container */}
            <div className={`hidden md:flex pointer-events-auto items-center gap-1 p-2 transition-all duration-300 bg-primary/5 backdrop-blur-md border border-white/10 shadow-sm clip-corner`}>
                {navLinks.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-background hover:bg-primary transition-all rounded-sm"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
