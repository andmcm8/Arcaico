import React, { useEffect } from 'react';

export default function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-charcoal text-text-white antialiased min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <header className="mb-20">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Legal Framework</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-light mb-8">Privacy Protocol</h1>
                    <div className="h-px w-24 bg-primary/40"></div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none font-light text-gray-400 space-y-12">
                    <section>
                        <h2 className="text-white font-serif text-2xl mb-4">I. Data Architecture</h2>
                        <p>
                            Arcaico Studio operates on a foundation of digital integrity. Our data collection methodologies are as precise as our architectural blueprints. We analyze interaction nodes to optimize the user experience within our digital environments, ensuring every pixel serves a purpose.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-serif text-2xl mb-4">II. Information Encapsulation</h2>
                        <p>
                            Client confidentiality is the cornerstone of our practice. Any information transmitted via our project inquiry systems is stored within highly secure, encrypted spatial databases. We do not distribute, sell, or trade personal identifiers to third-party entities. Your data is your property, held in trust by our studio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-serif text-2xl mb-4">III. Temporal Persistence</h2>
                        <p>
                            Records of project engagements and digital correspondence are maintained for the duration of the architectural lifecycle. Should you wish to exercise your rights to data erasure or structural audit, our legal team is available for consultation via our contact protocols.
                        </p>
                    </section>

                    <section className="bg-surface-dark/30 border-l-2 border-primary p-8">
                        <p className="italic text-gray-300">
                            "Architecture is the art of how we waste space; privacy is the art of how we protect it."
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-serif text-2xl mb-4">IV. Cookie Matrix</h2>
                        <p>
                            We employ subtle tracking mechanisms to understand spatial flow across our website. These small data fragments allow us to remember your preferences and provide a seamless transition between project portfolios and institutional updates.
                        </p>
                    </section>
                </div>

                <footer className="mt-24 pt-12 border-t border-white/10 text-xs uppercase tracking-widest text-gray-600">
                    Last Structural Update: February 2024
                </footer>
            </div>
        </div>
    );
}
