import { Link } from 'react-router-dom';

export default function SustainabilityCommitment() {
    return (
        <div className="bg-background-dark text-text-light font-sans antialiased selection:bg-primary selection:text-white">
            <header className="relative h-[70vh] w-full overflow-hidden bg-surface-darker flex items-end pb-24">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Minimalist building interior showing a lightwell and natural air movement"
                        className="w-full h-full object-cover opacity-60"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRTETA2jM8l9tBk-xCKHV38eYZdpcOn88KefThygYZ9pensxdAoRIBc-hHhEfYcJLQNbrK-niLd_sM1ysgsmMq07KFFftTezwDEmmKF-GfPrfBFvsEYydncDEEziXPeJv_kvCCBZUfLkOX7I-RE8oVREFqtn7ARKnMkkhpoAi6I0XhafW2fpkhHgpK4oj11NO7U5YtgDQsAnVDKT47UrEpI45BZBC1BZj81QJMH9zaQJM4Sm9PtIMqa4Ogve-_TfjxfZRfKl5RrEx1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-8">
                        <div>
                            <div className="flex items-center space-x-2 text-primary mb-4">
                                <span className="text-xs font-mono tracking-widest uppercase border border-primary px-2 py-1 rounded">Tech Spec V1</span>
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-serif font-light mb-2 leading-none text-white">
                                Passive<br />Ventilation
                            </h1>
                            <p className="text-2xl font-light text-primary mt-4 font-serif italic">Natural Airflow Systems</p>
                        </div>
                        <div className="hidden md:block text-right">
                            <span className="block text-sm text-text-muted uppercase tracking-wider mb-1">Project ID</span>
                            <span className="font-mono text-white">ARC-SUS-24-01</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-16">
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-px w-12 bg-primary"></span>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-text-muted">System Overview</h2>
                            </div>
                            <div className="prose prose-lg prose-invert text-text-muted max-w-none">
                                <p className="text-xl text-white font-light leading-relaxed mb-6">
                                    Our passive ventilation strategy harnesses natural pressure differentials and thermal buoyancy to circulate fresh air without mechanical intervention. By aligning building orientation with prevailing winds, we achieve a consistent air exchange rate that significantly lowers energy consumption.
                                </p>
                                <p className="leading-relaxed">
                                    The core mechanism relies on the stack effect within central atria. As air warms, it rises through vertical voids, pulling cool, fresh air in from lower operable facades. This continuous cycle effectively flushes out stale air and pollutants. Coupled with high-thermal-mass concrete floors, the system absorbs heat during the day and releases it at night, flattening the temperature curve and reducing the peak load on auxiliary cooling systems.
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-px w-12 bg-primary"></span>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-text-muted">Visual Documentation</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group relative overflow-hidden rounded-sm bg-surface-dark border border-white/5">
                                    <div className="aspect-w-4 aspect-h-3 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10"></div>
                                        <img
                                            alt="Technical diagram of air currents and pressure differentials"
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTctrv020nhTOibvsG-M1J3F6DIiDuCaJbU3DBN-dv89BaDMGBO6syX8qiLcphoc38VBlB8NOU-QW6pVb-33p-PykPb0LVjs_MgQii68bupB2pxojIksefQ8gMd7Yd8EiOvymvZpPgs6dcZUXPhCGfgEpGtzMGMXkAMCTK9azNFbokwSWLAtXimVQigQF-mN5m9_mlaL8HVB1vfCRIxewphqgtYDforxeINekaalziVkAhZZSfGn6c3kyXILH-l8b4zbdVdQBWLtI6"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="bg-black/80 backdrop-blur text-xs font-mono text-primary px-2 py-1">FIG 1.1: FLOW DYNAMICS</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden rounded-sm bg-surface-dark border border-white/5">
                                    <div className="aspect-w-4 aspect-h-3 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10"></div>
                                        <img
                                            alt="Detail shot of operable facade louvers"
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7wyMKpYS2Jp5lQ1Ffi_NYkU8pF91_aA94JVYGpV2TiYXSrbtZYvzRgt-CNSa7cF-DqzQs26QeQoejo5W9FmEIgrwrTgdQPlGFxgEqsOBY-GKCc3b2EZPOHw3H9PmR2t3s5fKNRfkSl6__XdR5b7Loka9ralAXifsAp4i9HgpyfK1Eh5yK32mKlrXDVRVoYX5SsHfNfRAk8YGdrTT_rNx0KHM97HyFfhuMvrOo0pS-mE_F28sbUBFebNOApH_paiM34yVCuQEk0Moh"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="bg-black/80 backdrop-blur text-xs font-mono text-primary px-2 py-1">FIG 1.2: OPERABLE LOUVERS</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden rounded-sm bg-surface-dark border border-white/5 md:col-span-2">
                                    <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10"></div>
                                        <img
                                            alt="Render of interior void showing light and air space"
                                            className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-700"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVRqfKXu024nWDBe0XbY35Zsu4fJKxT9JtbAjAiZ1ps0pB3TtcEUBGLuwz6dp8JJpak3Rd61GgfraBQvJIy-ykbGA7BFaECN0F23EXWUZbtnzT5apliNLO4MY4SXKBngaZEtRp_oL3AnlchQr9CUcYhUNMxmJE5vae8Xe9kJsjUzATBOLsnWwdYdgh5uAmw2yXpYRYGOln4eYn_qOHKF1fyTwfVXuk-pYAaD6-QTVHcmZc4QBzdikp_bp2SLgINCaPfOJ9crSiNKvD"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="bg-black/80 backdrop-blur text-xs font-mono text-primary px-2 py-1">FIG 1.3: THERMAL CHIMNEY VOID</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 space-y-12 lg:pl-8 lg:border-l lg:border-white/10">
                        <div className="bg-surface-dark p-8 rounded-sm border border-white/5 shadow-2xl">
                            <h3 className="text-lg font-serif font-semibold text-white mb-6 pb-4 border-b border-white/10">Technical Data</h3>
                            <ul className="space-y-6">
                                <li>
                                    <div className="flex items-end justify-between mb-1">
                                        <span className="text-4xl font-bold text-primary">35%</span>
                                        <span className="material-symbols-outlined text-text-muted">hvac</span>
                                    </div>
                                    <span className="text-xs uppercase tracking-widest text-text-muted">HVAC Energy Reduction</span>
                                </li>
                                <li>
                                    <div className="flex items-end justify-between mb-1">
                                        <span className="text-4xl font-bold text-primary">100%</span>
                                        <span className="material-symbols-outlined text-text-muted">air</span>
                                    </div>
                                    <span className="text-xs uppercase tracking-widest text-text-muted">Fresh Air Circulation</span>
                                </li>
                                <li>
                                    <div className="flex items-end justify-between mb-1">
                                        <span className="text-xl font-bold text-white">Platinum</span>
                                        <span className="material-symbols-outlined text-text-muted">workspace_premium</span>
                                    </div>
                                    <span className="text-xs uppercase tracking-widest text-text-muted">LEED Compliance</span>
                                </li>
                            </ul>
                        </div>

                        <div className="relative pt-8">
                            <span className="material-symbols-outlined text-6xl text-white/5 absolute top-0 left-0 -z-10 transform -translate-y-4">format_quote</span>
                            <blockquote className="text-lg font-serif italic text-white leading-relaxed mb-4">
                                "A building should breathe as naturally as the people inside it. By removing the barrier between interior climate and exterior atmosphere, we reconnect with the rhythm of the day."
                            </blockquote>
                            <cite className="not-italic flex items-center gap-3">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-xs font-bold uppercase tracking-wider text-text-muted">Elena Corvo, Lead Architect</span>
                            </cite>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6">Related Specifications</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link className="group flex items-center justify-between p-4 bg-surface-dark hover:bg-white/5 border border-white/5 rounded-sm transition-all" to="#">
                                        <span className="text-sm text-gray-300 group-hover:text-primary transition-colors">Thermal Mass Flooring</span>
                                        <span className="material-symbols-outlined text-sm text-gray-500 group-hover:text-primary">arrow_forward</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="group flex items-center justify-between p-4 bg-surface-dark hover:bg-white/5 border border-white/5 rounded-sm transition-all" to="#">
                                        <span className="text-sm text-gray-300 group-hover:text-primary transition-colors">Smart Glazing Systems</span>
                                        <span className="material-symbols-outlined text-sm text-gray-500 group-hover:text-primary">arrow_forward</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="group flex items-center justify-between p-4 bg-surface-dark hover:bg-white/5 border border-white/5 rounded-sm transition-all" to="#">
                                        <span className="text-sm text-gray-300 group-hover:text-primary transition-colors">Rainwater Harvesting</span>
                                        <span className="material-symbols-outlined text-sm text-gray-500 group-hover:text-primary">arrow_forward</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-white/10 text-center">
                    <Link className="inline-flex items-center text-primary hover:text-white transition-colors group" to="/sustainability">
                        <span className="material-symbols-outlined mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Sustainability
                    </Link>
                </div>
            </main>
        </div>
    );
}
