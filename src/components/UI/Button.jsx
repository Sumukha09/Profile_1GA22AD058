import React from 'react';

const Button = ({ children, className = '', variant = 'primary', ...props }) => {


    const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-bold uppercase tracking-wider transition-all duration-200 clip-corner select-none active:scale-95";

    const variants = {
        primary: "bg-accent text-black hover:bg-accent/80 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] border border-transparent",
        secondary: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white",
        outline: "bg-transparent border border-primary/20 text-primary hover:bg-accent hover:border-accent hover:text-white",
        ghost: "bg-transparent text-primary hover:bg-white/5"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
