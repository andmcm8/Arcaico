import { Link } from 'react-router-dom';

export default function Sustainability() {
    return (
        <div className="bg-background-dark text-text-light antialiased selection:bg-primary selection:text-white">
            <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[var(--surface-darker)]">
                <div className="absolute inset-0 z-0">
                    <img alt="Green architecture facade with vertical gardens" className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVRqfKXu024nWDBe0XbY35Zsu4fJKxT9JtbAjAiZ1ps0pB3TtcEUBGLuwz6dp8JJpak3Rd61GgfraBQvJIy-ykbGA7BFaECN0F23EXWUZbtnzT5apliNLO4MY4SXKBngaZEtRp_oL3AnlchQr9CUcYhUNMxmJE5vae8Xe9kJsjUzATBOLsnWwdYdgh5uAmw2yXpYRYGOln4eYn_qOHKF1fyTwfVXuk-pYAaD6-QTVHcmZc4QBzdikp_bp2SLgINCaPfOJ9crSiNKvD" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-2 text-primary mb-6">
                            <span className="material-symbols-outlined text-sm">eco</span>
                            <span className="text-sm font-bold tracking-widest uppercase">Sustainability First</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-serif font-light mb-8 leading-tight text-white">
                            Designing for <br />
                            <span className="italic text-primary">Tomorrow.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-text-muted leading-relaxed max-w-2xl border-l-2 border-primary pl-6">
                            We integrate LEED Platinum standards with biophilic luxury to create spaces that breathe, adapt, and sustain. Architecture is not just about shelter; it's about coexistence with our environment.
                        </p>
                    </div>
                </div>
            </header>

            <section className="py-16 bg-surface-dark border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        <div className="p-4">
                            <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">42%</h3>
                            <p className="text-sm uppercase tracking-wider text-text-muted">Less Energy Consumption</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">100%</h3>
                            <p className="text-sm uppercase tracking-wider text-text-muted">Net Zero Ready</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">LEED</h3>
                            <p className="text-sm uppercase tracking-wider text-text-muted">Platinum Certified</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">0</h3>
                            <p className="text-sm uppercase tracking-wider text-text-muted">Net Emissions</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background-dark">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-serif mb-4 text-white">Core Commitments</h2>
                        <p className="text-text-muted max-w-md">Our approach relies on passive strategies that reduce reliance on mechanical systems.</p>
                    </div>
                    <div className="hidden lg:block">
                        <span className="text-xs font-mono text-primary border border-primary px-3 py-1 rounded-full">PROTOCOL V.2</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <Link className="relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl bg-[var(--surface-darker)] border border-white/10 block" to="/sustainability/passive-ventilation">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
                        <img alt="Sunlight entering modern atrium" className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRTETA2jM8l9tBk-xCKHV38eYZdpcOn88KefThygYZ9pensxdAoRIBc-hHhEfYcJLQNbrK-niLd_sM1ysgsmMq07KFFftTezwDEmmKF-GfPrfBFvsEYydncDEEziXPeJv_kvCCBZUfLkOX7I-RE8oVREFqtn7ARKnMkkhpoAi6I0XhafW2fpkhHgpK4oj11NO7U5YtgDQsAnVDKT47UrEpI45BZBC1BZj81QJMH9zaQJM4Sm9PtIMqa4Ogve-_TfjxfZRfKl5RrEx1" />
                        <div className="absolute top-8 right-8 z-20">
                            <div className="w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center animate-pulse">
                                <span className="material-symbols-outlined text-primary text-3xl">air</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className="text-xs font-mono text-primary mb-2 block tracking-widest">FIGURE 1.2: AIR EXCHANGE</span>
                                    <h3 className="text-2xl font-bold text-white mb-2">Passive Ventilation</h3>
                                    <p className="text-gray-300 text-sm max-w-sm">Cross-ventilation schematics for optimal airflow, utilizing natural pressure differentials.</p>
                                </div>
                                <div className="bg-primary hover:bg-white hover:text-black text-white p-3 rounded-full transition-colors shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined">arrow_outward</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="space-y-10 pl-0 lg:pl-12">
                        <div className="flex gap-6 group">
                            <div className="flex-shrink-0 w-14 h-14 bg-surface-dark rounded-full flex items-center justify-center border border-white/10 text-primary group-hover:border-primary transition-colors">
                                <span className="material-symbols-outlined">wb_sunny</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-white">Solar Orientation</h4>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Every structure is positioned to maximize winter solar gain while minimizing summer heat load, reducing HVAC dependency by up to 35%.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 group">
                            <div className="flex-shrink-0 w-14 h-14 bg-surface-dark rounded-full flex items-center justify-center border border-white/10 text-primary group-hover:border-primary transition-colors">
                                <span className="material-symbols-outlined">water_drop</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-white">Water Conservation</h4>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Integrated greywater recycling systems and rainwater harvesting infrastructure come standard in our large-scale residential projects.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 group">
                            <div className="flex-shrink-0 w-14 h-14 bg-surface-dark rounded-full flex items-center justify-center border border-white/10 text-primary group-hover:border-primary transition-colors">
                                <span className="material-symbols-outlined">park</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-white">Biophilic Integration</h4>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Bringing nature indoors isn't just aesthetic. We use living walls to purify air and regulate indoor humidity naturally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-24">
                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                        <h3 className="text-2xl font-serif text-white">Material Innovation</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group relative overflow-hidden rounded-lg bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors duration-300">
                            <div className="aspect-w-4 aspect-h-3 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                                <img alt="Cross Laminated Timber texture" className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAncuIWXUWdQpTmmH8tUGGzG_tL6p8cC3CANnWxZMlGVS_Hnuv0TU5BzsnlrrQcCeLfe4I4R6ydnEvZkbqOdQPoqWwNSTYXr6tFXLsVzcdUyTTjTaZiwHKdK44Cl2m0iHnJLsgKqKA9oehKuycX4mrMKdKQvK-EF_nzJmMBM2AD8xoH_nUlkUZ9LLQ4c-5IBZrixTsdkQr6mHYGK8UFopI-ykZgYao5XhLM6ZPePmanrn509Id9A6a46gYoqt2X1EZXRcpll3cIjZKA" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-mono text-primary uppercase mb-2 block">Structure</span>
                                <h4 className="text-lg font-bold mb-2 text-white">Cross-Laminated Timber</h4>
                                <p className="text-sm text-text-muted">Replacing steel with sustainably sourced engineered wood to sequester carbon.</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors duration-300">
                            <div className="aspect-w-4 aspect-h-3 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                                <img alt="Recycled concrete texture" className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1SdH2GvS5-yBHdkh4JCPMFerisMXvTOid-ta4OHKmP_HHHoyip-yhDGdyu4lv7dyscd4a7XqVTTq_FbeuhnfuFa_uAFM8Mj0334cyfxl4V6MX04YP3VqWDcPj-yQJ-kxORfL_SNVPVdmPzSoNEXQHs_IbtMQHx5CHL88q0PqJiTa1i4kbUNMsDJ2u7ZDNHm5fUv9G6aQyYLC1WIEN5FzNMTVNq40HY1-fqWmdL2abkMsB7uOgAqro4x5VAuIhWZW4fpMsmjSyi5y8" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-mono text-primary uppercase mb-2 block">Foundation</span>
                                <h4 className="text-lg font-bold mb-2 text-white">Recycled Concrete</h4>
                                <p className="text-sm text-text-muted">Aggregates sourced from demolition sites to close the construction loop.</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors duration-300">
                            <div className="aspect-w-4 aspect-h-3 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                                <img alt="Photovoltaic glass on building" className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTctrv020nhTOibvsG-M1J3F6DIiDuCaJbU3DBN-dv89BaDMGBO6syX8qiLcphoc38VBlB8NOU-QW6pVb-33p-PykPb0LVjs_MgQii68bupB2pxojIksefQ8gMd7Yd8EiOvymvZpPgs6dcZUXPhCGfgEpGtzMGMXkAMCTK9azNFbokwSWLAtXimVQigQF-mN5m9_mlaL8HVB1vfCRIxewphqgtYDforxeINekaalziVkAhZZSfGn6c3kyXILH-l8b4zbdVdQBWLtI6" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-mono text-primary uppercase mb-2 block">Energy</span>
                                <h4 className="text-lg font-bold mb-2 text-white">Photovoltaic Glass</h4>
                                <p className="text-sm text-text-muted">Transparent solar panels that generate energy while allowing light transmission.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[var(--surface-darker)] text-white relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#FF6B6B 1px, transparent 1px), linear-gradient(90deg, #FF6B6B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded uppercase shadow-lg shadow-primary/20">Featured</span>
                                <span className="text-xs font-mono text-gray-400">MILAN, ITALY</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight">The Vertical Forest: <br /><span className="text-gray-400">Redefining Skyline Ecology</span></h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Exploring how incorporating vegetation into high-rise architecture is changing the urban heat island effect. This project features over 900 trees and 20,000 plants integrated directly into the facade.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-10 border-t border-white/10 pt-8">
                                <div>
                                    <span className="block text-2xl font-bold text-white mb-1">9,000 m²</span>
                                    <span className="text-xs text-primary/80 uppercase tracking-widest">Green Coverage</span>
                                </div>
                                <div>
                                    <span className="block text-2xl font-bold text-white mb-1">30 Tons</span>
                                    <span className="text-xs text-primary/80 uppercase tracking-widest">CO2 Absorbed / Yr</span>
                                </div>
                            </div>
                            <Link className="inline-flex items-center text-white border-b border-primary pb-1 hover:text-primary transition-colors group" to="/project/vertical-forest">
                                Read Case Study
                                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform text-sm text-primary">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 group">
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                                <img alt="Vertical Forest building in Milan" className="w-full h-[600px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7wyMKpYS2Jp5lQ1Ffi_NYkU8pF91_aA94JVYGpV2TiYXSrbtZYvzRgt-CNSa7cF-DqzQs26QeQoejo5W9FmEIgrwrTgdQPlGFxgEqsOBY-GKCc3b2EZPOHw3H9PmR2t3s5fKNRfkSl6__XdR5b7Loka9ralAXifsAp4i9HgpyfK1Eh5yK32mKlrXDVRVoYX5SsHfNfRAk8YGdrTT_rNx0KHM97HyFfhuMvrOo0pS-mE_F28sbUBFebNOApH_paiM34yVCuQEk0Moh" />
                                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded text-xs text-white border border-white/20 z-20">
                                    Photo: Bosco Verticale
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background-dark">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-surface-dark p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-colors">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <span className="material-symbols-outlined text-4xl text-primary mb-4">description</span>
                        <h3 className="text-2xl font-bold mb-3 text-white">Transparency Report 2024</h3>
                        <p className="text-text-muted mb-8 max-w-lg mx-auto">
                            Download our full sustainability report detailing our material sourcing, carbon offset initiatives, and 5-year environmental roadmap.
                        </p>
                        <a
                            href="/transparency-report-2024.pdf"
                            download="Arcaico-Transparency-Report-2024.pdf"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-primary/40 transition-all cursor-pointer"
                        >
                            <span className="material-symbols-outlined mr-2">download</span>
                            Download PDF Report
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
