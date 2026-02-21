import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: "Core Infrastructure",
            links: [
                { name: "Global Home", path: "/" },
                { name: "Portfolio Overview", path: "/portfolio" },
                { name: "Studio Intelligence", path: "/studio" },
                { name: "Sustainability Mission", path: "/sustainability" }
            ]
        },
        {
            title: "Knowledge Base",
            links: [
                { name: "Journal Feed", path: "/journal" },
                { name: "Recent Insights", path: "/journal" },
                { name: "Innovation Reports", path: "/sustainability" }
            ]
        },
        {
            title: "Project Development",
            links: [
                { name: "Start New Project", path: "/start-project" },
                { name: "Client Inquiries", path: "/contact" },
                { name: "Service Protocols", path: "/studio" }
            ]
        },
        {
            title: "Legal & Standards",
            links: [
                { name: "Privacy Protocol", path: "/privacy" },
                { name: "Terms of Engagement", path: "/terms" },
                { name: "Digital Sitemap", path: "/sitemap" }
            ]
        }
    ];

    return (
        <div className="bg-background-charcoal text-text-white antialiased min-h-screen pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <header className="mb-20 text-center">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Navigation Matrix</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 italic">Digital Structure</h1>
                    <div className="h-px w-24 bg-primary/40 mx-auto"></div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {sections.map((section, idx) => (section &&
                        <div key={idx} className="space-y-8">
                            <h3 className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] border-b border-primary/20 pb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-4">
                                {section.links.map((link, lIdx) => (link &&
                                    <li key={lIdx}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-white transition-colors text-sm font-light hover:pl-2 transition-all duration-300 block border-l border-transparent hover:border-primary/40"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-32 p-12 bg-surface-dark/20 border border-white/5 rounded-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-primary opacity-5 group-hover:opacity-20 transition-opacity duration-700">
                        <span className="material-symbols-outlined text-9xl">account_tree</span>
                    </div>
                    <div className="relative z-10">
                        <h4 className="text-white font-serif text-2xl mb-4 italic">Architectural Integrity</h4>
                        <p className="max-w-2xl text-gray-500 font-light text-sm leading-relaxed text-left inline-block">
                            Our digital sitemap reflects the same organized intent we bring to our physical projects. Every link is a corridor, every page a destination, meticulously designed to guide you through the Arcaico universe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

