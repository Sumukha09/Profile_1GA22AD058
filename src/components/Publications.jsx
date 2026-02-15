import React from 'react';

const Publications = () => {
    const publications = [
        {
            title: 'Assessment of Thyroid Disorder Prevalence using Fuzzy AHP & Fuzzy TOPSIS',
            venue: 'IC-AISMART 2025, JSSATE Bengaluru',
            desc: 'Research focused on applying fuzzy decision-making models to analyze thyroid disorder prevalence. Presented at AICTE-Sponsored International Conference.',

        }
    ];

    return (
        <section id="publications" className="relative w-full py-24 bg-background border-t border-white/5 content-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-0.5 bg-primary"></div>
                    <span className="text-sm font-bold uppercase tracking-widest text-primary/80">Research</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-primary mb-12">
                    Publications
                </h2>

                <ul className="grid grid-cols-1 gap-6">
                    {publications.map((pub, index) => (
                        <li key={index}>
                            <div className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-4 sm:p-8 bg-surface border border-white/10 rounded-lg md:rounded-none md:clip-corner shadow-sm hover:shadow-md transition-all hover:bg-white/5">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-primary uppercase mb-2 group-hover:text-accent transition-colors">
                                        {pub.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-primary/80 font-medium mb-4">
                                        <span className="uppercase tracking-wider text-accent">{pub.venue}</span>
                                    </div>
                                    <p className="text-primary/80 leading-relaxed max-w-3xl mb-4">
                                        {pub.desc}
                                    </p>
                                    <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 clip-corner">
                                        <p className="text-xs text-accent font-bold uppercase tracking-wider">
                                            Paper presented at conference; journal publication currently under process
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Publications;
