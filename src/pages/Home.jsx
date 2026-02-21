import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-background-charcoal text-text-white transition-colors duration-300">
            <header className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0 z-0">
                    <img alt="Modern concrete and glass architecture at dusk" className="w-full h-full object-cover" src="/homepage-hero.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background-charcoal"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="h-px w-12 bg-primary"></div>
                            <span className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">Architecture &amp; Design</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8 font-serif">
                            Spatial <br />
                            <span className="font-bold">Innovation.</span>
                        </h1>
                        <p className="text-xl text-gray-200 font-light max-w-xl mb-10 leading-relaxed">
                            Designing spaces that breathe. Defining futures through sustainable luxury and minimalist precision.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-sm font-medium text-white bg-primary hover:bg-red-500 transition-all duration-300 uppercase tracking-widest group" to="/portfolio">
                                View Projects
                                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
                            </Link>
                            <Link className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:border-white text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 uppercase tracking-widest backdrop-blur-sm" to="/studio">
                                Our Philosophy
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 text-white/50 scroll-indicator">
                    <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
                    <span className="material-symbols-outlined">expand_more</span>
                </div>
            </header>

            <section className="py-20 bg-background-charcoal border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <div className="text-center md:text-left border-l-2 border-primary pl-6">
                            <div className="text-4xl font-serif font-bold text-white mb-2">150+</div>
                            <div className="text-xs uppercase tracking-widest text-text-muted">Completed Projects</div>
                        </div>
                        <div className="text-center md:text-left border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-300">
                            <div className="text-4xl font-serif font-bold text-white mb-2">18</div>
                            <div className="text-xs uppercase tracking-widest text-text-muted">Intl. Awards</div>
                        </div>
                        <div className="text-center md:text-left border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-300">
                            <div className="text-4xl font-serif font-bold text-white mb-2">12</div>
                            <div className="text-xs uppercase tracking-widest text-text-muted">Years Experience</div>
                        </div>
                        <div className="text-center md:text-left border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-300">
                            <div className="text-4xl font-serif font-bold text-white mb-2">4</div>
                            <div className="text-xs uppercase tracking-widest text-text-muted">Global Offices</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background-charcoal" id="projects">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-primary uppercase tracking-widest text-sm font-bold mb-3">Portfolio</h2>
                            <h3 className="text-3xl md:text-5xl font-light text-white font-serif">Selected Works</h3>
                        </div>
                        <Link className="hidden md:flex items-center text-sm uppercase tracking-widest font-semibold text-white hover:text-primary transition-colors group" to="/portfolio">
                            View All Projects
                            <span className="material-symbols-outlined ml-2 text-primary group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link to="/project/glass-pavilion" className="group cursor-pointer hover-reveal hover-scale">
                            <div className="relative overflow-hidden aspect-[4/5] bg-gray-800 mb-6">
                                <img alt="The Glass Pavilion" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjvUkLsFEdOLAodownW_zTxKNeBJzlTphAqzTrDwcKk50dgTX7MrNCHpv6VCaAvSLSRmYTWoKSu-UO2vCwNjQGHR_VfrdS2iXC3QM4tF0a134fGYFMI3Jc9Pfndez9GqmJii4awSvnCiGYJZVPBaHEBXGRmpm6gaY9CzpPPUeULAFJOM2YmAhe0vFJGGOBFIRsf3zudFV8xsPCkoVdXzWmUW7RMxebuAVJWbeBhO6IQefNLGnbsqAhL7MkPhOfYl-CT_AxmTaw63lK" />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">Residential</span>
                                </div>
                            </div>
                            <div className="reveal-content">
                                <h4 className="text-xl font-serif text-white mb-1">The Glass Pavilion</h4>
                                <p className="text-sm text-text-muted uppercase tracking-wide">Montecito, California</p>
                            </div>
                        </Link>
                        <Link to="/project/vertex-tower" className="group cursor-pointer hover-reveal hover-scale lg:mt-16">
                            <div className="relative overflow-hidden aspect-[4/5] bg-gray-800 mb-6">
                                <img alt="Vertex Tower" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3jeF8GtzhxQKphEsXa0V3f_GNLeRyQdYCYqBHDws-VRdLvxiMAhlXsH3fV5p7mh9VPFNVkvS3oxuP6664OU0FC-IQo_7GP-Mx3F5vZ8hedLg3jqpzHuBUkDXDOyNCDW9kpsFyBbtZV9Miwx2fAh8tFMPir_l5dKYuKEGY4qm42h8kQsHoL17rwzfVgibI46GmMvo0qTgMZNreGokRqKHIZkMeDLPKwiAld1-NxUZWXLdGAkIQpzktzO5LEWDCxk7T24UVNIX5KgLq" />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider px-2 py-1">Commercial</span>
                                </div>
                            </div>
                            <div className="reveal-content">
                                <h4 className="text-xl font-serif text-white mb-1">Vertex Tower</h4>
                                <p className="text-sm text-text-muted uppercase tracking-wide">Berlin, Germany</p>
                            </div>
                        </Link>
                        <Link to="/project/ossis-villa" className="group cursor-pointer hover-reveal hover-scale">
                            <div className="relative overflow-hidden aspect-[4/5] bg-gray-800 mb-6">
                                <img alt="Ossis Villa" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6U8J8wBPZdX7Qom8_pWABPxKHcsz5m7GZsIMWyFXgZeDRFTyj267C-U1k3iiBioSOVqHmbr_hqxhUlzPKrRrEBJhMf5I5nNWODBJrqCbnlhIv_h3DFW5iKh90T9q8Oe57tSJRj0coknfUdLBlMGAW0wUqcvp8icamGVLXL0r_fVIn7OU9GnBFPlJ9j6hoJ93qu2XF9ZAhQ5BVsrDLeUCqm3VlNcLdjOurcccsyBF5EbCjrqJJlklAtGUUH-BrqIoTLVVAhjNQRMNp" />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider px-2 py-1">Hospitality</span>
                                </div>
                            </div>
                            <div className="reveal-content">
                                <h4 className="text-xl font-serif text-white mb-1">Ossis Villa</h4>
                                <p className="text-sm text-text-muted uppercase tracking-wide">MALIBU, CA</p>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-12 text-center md:hidden">
                        <Link className="inline-flex items-center text-sm uppercase tracking-widest font-semibold text-white hover:text-primary transition-colors group" to="/portfolio">
                            View All Projects
                            <span className="material-symbols-outlined ml-2 text-primary">arrow_right_alt</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background-charcoal overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                                <img alt="Interior Architecture Detail" className="relative z-10 w-full rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrRvcXucums1iDqESZtQ4IDKBHmldtJEL1r8heN4c7kQp36aFj_1maOLHIJIZONooj3nBwguAmkDYAV6bK6BgZzTk5HI7l_d4cm2fMknylGERkEWbkaWea8lLmgYI8auxwve7jAatSsIudLhP2o-UZwTGnXR_uV2JbDnRlT3TtvAV9oVPXV_-fPT_iMTahJEyvvjdZcG94IlWbDwYKyaTnuBm9mfwQ-Yy6dN4c6-jfWLVcy7fjU8jB9-M6Rfz4LySWwUxDCXLfi_V4" />
                                <div className="absolute -bottom-10 -right-10 z-20 bg-surface-dark p-6 shadow-xl max-w-xs hidden md:block border-l-4 border-primary">
                                    <div className="flex items-center mb-4">
                                        <span className="material-symbols-outlined text-primary mr-2">verified</span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-white">Leed Platinum</span>
                                    </div>
                                    <p className="text-xs text-text-muted leading-relaxed">
                                        Our commitment to sustainability ensures that every project meets the highest environmental standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="h-px w-12 bg-primary"></div>
                                <span className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">Our Approach</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-8 font-serif">
                                Where Form Meets <br /><span className="font-bold italic">Functionality.</span>
                            </h2>
                            <p className="text-text-muted mb-8 leading-relaxed">
                                We believe space is not just occupied, but experienced. Our approach merges function with high-end spatial innovation, creating environments that inspire and endure. Minimalism isn't about absence; it's about the perfect amount of something.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors group">
                                    <span className="material-symbols-outlined text-3xl text-primary mb-4 group-hover:scale-110 transition-transform block">architecture</span>
                                    <h3 className="text-lg font-serif font-medium text-white mb-2">Architectural Design</h3>
                                    <p className="text-sm text-text-muted">Comprehensive planning and visualization for structural integrity.</p>
                                </div>
                                <div className="p-6 bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors group">
                                    <span className="material-symbols-outlined text-3xl text-primary mb-4 group-hover:scale-110 transition-transform block">grid_view</span>
                                    <h3 className="text-lg font-serif font-medium text-white mb-2">Interior Planning</h3>
                                    <p className="text-sm text-text-muted">Curated internal spaces that reflect personality and purpose.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background-charcoal">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-serif text-white">Latest Insights</h2>
                        <Link className="text-xs uppercase tracking-widest text-text-muted hover:text-primary transition-colors" to="/journal">View Archive</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col">
                            <div className="overflow-hidden aspect-[16/10] mb-4">
                                <img alt="Office Space" className="w-full h-full object-cover grayscale brightness-75 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOWVMp3MEZWAnVwVSDdf2aVY8daKftivNbdT_w7xNN41BmdzxOD0PEdwBEQlSO4tUWq83VJG4rYJbbCyD-iqPsKXblUa474P46ZW8BSLuD8KtAsVXUsp07myimMRF--9HF5u-yjpEhNXjmLzfB1s_wfOZBXWVAsehJgpwrNpRQt9Fwi6CgqGlC9AvX5L7IpStThP7bL0tQaFVfFmsLgFuvMc_je2ro4FC3IJNHMrgPwrjcgKpkSgnNNbW2ykjBUJzEEdeUDKRwWuk_" />
                            </div>
                            <div className="flex items-center text-xs text-primary/70 font-bold uppercase tracking-wider mb-2">
                                <span>Urban Design</span>
                                <span className="mx-2 text-gray-500">•</span>
                                <span>Oct 12, 2023</span>
                            </div>
                            <h3 className="text-xl font-medium text-white mb-2">Future of Urban Living</h3>
                            <p className="text-sm text-text-muted line-clamp-2">How micro-apartments are solving the density crisis in mega-cities while maintaining quality of life.</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="overflow-hidden aspect-[16/10] mb-4">
                                <img alt="Concrete Texture" className="w-full h-full object-cover grayscale brightness-75 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhuXxt7uGv7lSet8j3wCYds2L286LAI9YTgDsXLQ8JZ4LgVw_1y8EifO5HmKwOoHhNLaWx5WNbPpkz790gkOvWRYRg73kZIwuafMWxGWPgimRuidzltgaAGtlzgT5BsvxToNsD9vJo-RHeMz9WsWaOimLzZq7qgxa9kjkm-044E6mErEkxZj3WfaT9yyDxAnt5CIoFC80JXwnqLKZwMr2PLS1dtlXAKIRiipQZUGLPmBR_iVEl3I746XCxpQBTlq3rFIgPvF03FFU5" />
                            </div>
                            <div className="flex items-center text-xs text-primary/70 font-bold uppercase tracking-wider mb-2">
                                <span>Technology</span>
                                <span className="mx-2 text-gray-500">•</span>
                                <span>Sep 28, 2023</span>
                            </div>
                            <h3 className="text-xl font-medium text-white mb-2">Material Innovation: Self-Healing Concrete</h3>
                            <p className="text-sm text-text-muted line-clamp-2">Exploring the latest bio-materials that extend building lifecycles and reduce carbon footprints.</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="overflow-hidden aspect-[16/10] mb-4">
                                <img alt="Desert Architecture" className="w-full h-full object-cover grayscale brightness-75 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPj2uX6_XzkNq9T04RJr6teSvlTBnwbGT83XEEk5J0U-rgUBLTyLnc3tV2y6_YVmKrsA5Guu-reuwL4JymwY0Tp0aBN7nOZwzle3ATEaIAuKe6PS0SEtw82HWS6-pOIpQGKCV8ZB0-_vhlsgf5rp4VENCtoMI3IC6wHTWEyJqEJDgF_7UAqIEA78wP0aLCWFL58CzGW5jM3xmcWNuKLvaKpoB6rdQJ3bnslHGzi-lv57-txHzRx1HAcRSUhLa1ssxrxbN1ufc9jDz7" />
                            </div>
                            <div className="flex items-center text-xs text-primary/70 font-bold uppercase tracking-wider mb-2">
                                <span>Residential</span>
                                <span className="mx-2 text-gray-500">•</span>
                                <span>Aug 15, 2023</span>
                            </div>
                            <h3 className="text-xl font-medium text-white mb-2">Minimalism in the Desert</h3>
                            <p className="text-sm text-text-muted line-clamp-2">A case study on blending architecture with arid landscapes to create sustainable oases.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
