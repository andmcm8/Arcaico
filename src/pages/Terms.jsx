import React, { useEffect } from 'react';

export default function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-charcoal text-text-white antialiased min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <header className="mb-20">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Institutional Standards</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-light mb-8">Terms of Engagement</h1>
                    <div className="h-px w-24 bg-primary/40"></div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none font-light text-gray-400 space-y-12">
                    <section>
                        <h2 className="text-white font-serif text-2xl mb-4">1. Digital Territory</h2>
                        <p>
                            By entering this digital domain managed by Arcaico Studio, you agree to respect the intellectual proportions of our work. All visual assets, CAD representations, and conceptual narratives are the exclusive property of the studio. Unauthorized replication or extraction is considered a breach of structural integrity.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-serif text-2xl mb-4">2. Professional Consultations</h2>
                        <p>
                            Engagements initiated through our "Start Project" platform constitute a preliminary dialogue. They do not represent a binding architectural contract until formal feasibility studies are completed and mutual signatures are rendered in physical space.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-serif text-2xl mb-4">3. Design Boundaries</h2>
                        <p>
                            Arcaico reserves the right to modify the digital presentation of our portfolio without prior notification. We strive for absolute accuracy, but conceptual renderings are subject to environmental variables and regulatory shifts during the actual construction process.
                        </p>
                    </section>

                    <section className="bg-surface-dark/30 border-l-2 border-primary p-8">
                        <p className="italic text-gray-300">
                            "The contract between architect and client is not merely legal; it is a shared commitment to a future reality."
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-serif text-2xl mb-4">4. Liability Limitation</h2>
                        <p>
                            While our digital infrastructure is designed to be as resilient as our skyscrapers, Arcaico is not responsible for temporal disturbances, browser-specific rendering issues, or signal interruptions that may occur during your exploration of our portfolio.
                        </p>
                    </section>
                </div>

                <footer className="mt-24 pt-12 border-t border-white/10 text-xs uppercase tracking-widest text-gray-600">
                    Regulatory Audit: February 2024
                </footer>
            </div>
        </div>
    );
}
