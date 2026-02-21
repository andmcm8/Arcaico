import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function CaseStudy() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="bg-[#1A1A1A] text-white min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
                    <Link to="/portfolio" className="text-primary hover:underline uppercase tracking-widest text-sm">Back to Portfolio</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#1A1A1A] text-white antialiased selection:bg-primary selection:text-white transition-colors duration-300">
            <header className="relative w-full h-screen min-h-[700px] flex items-end">
                <div className="absolute inset-0 z-0">
                    <img alt={project.title} className="w-full h-full object-cover object-center brightness-50 grayscale-[20%]" src={project.heroImage} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-8">
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">Featured</span>
                            <span className="px-3 py-1 border border-white/30 text-[10px] font-bold uppercase tracking-widest rounded-sm text-gray-300">{project.category}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-6 text-white">
                            {project.title.split(' ').map((word, i) => (
                                <span key={i}>{word} {i === 1 && project.title.split(' ').length > 2 ? <br /> : ''}</span>
                            ))}
                        </h1>
                        <div className="flex items-center text-sm tracking-wide text-gray-300 space-x-2">
                            <span className="material-symbols-outlined text-lg">location_on</span>
                            <span>{project.location}</span>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="bg-[#262626]/95 backdrop-blur-sm p-8 shadow-2xl border border-white/5 rounded-sm">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-white/10 pb-4">Project Data</h3>
                            <div className="grid grid-cols-3 gap-6 text-center">
                                <div>
                                    <span className="material-symbols-outlined text-primary mb-2">square_foot</span>
                                    <div className="text-2xl font-serif font-semibold text-white">{project.area.split(' ')[0]}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-gray-500">SQFT</div>
                                </div>
                                <div>
                                    <span className="material-symbols-outlined text-primary mb-2">attach_money</span>
                                    <div className="text-2xl font-serif font-semibold text-white">{project.budget}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-gray-500">Budget</div>
                                </div>
                                <div>
                                    <span className="material-symbols-outlined text-primary mb-2">check_circle</span>
                                    <div className="text-2xl font-serif font-semibold text-white">{project.year}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-gray-500">Done</div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Location</span>
                                    <span className="font-medium text-gray-200">{project.location}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm mt-3">
                                    <span className="text-gray-500">Type</span>
                                    <span className="font-medium text-gray-200">{project.category}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-32 bg-[#1A1A1A]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
                    <div className="lg:col-span-7">
                        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Project Narrative</span>
                        <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-snug text-white">
                            {project.subtitle}
                        </h2>
                        <div className="prose prose-lg prose-invert font-light text-gray-400">
                            {project.longDescription.split('\n\n').map((para, i) => (
                                <p key={i} className="mb-6">{para}</p>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block"></div>
                        <div className="sticky top-32">
                            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 block">Design Philosophy</span>
                            <blockquote className="text-xl italic font-serif text-gray-200 mb-8 border-l-4 border-primary pl-6">
                                "{project.philosophy}"
                            </blockquote>
                            <ul className="space-y-6">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="material-symbols-outlined text-primary mr-4 mt-1">{feature.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-sm uppercase mb-1 text-white">{feature.title}</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-12">
                                <button className="w-full group flex items-center justify-between p-4 bg-[#262626] rounded-sm hover:bg-primary hover:text-white transition-all duration-300 border border-white/5 hover:border-primary">
                                    <span className="flex items-center gap-3">
                                        <span className="material-symbols-outlined">picture_as_pdf</span>
                                        <span className="text-sm font-bold uppercase tracking-wide text-white group-hover:text-white">Download Project PDF</span>
                                    </span>
                                    <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="mb-32">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Visual Documentation</span>
                            <h3 className="text-3xl font-serif text-white">Gallery</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-[#141414] p-1 border border-white/5">
                        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
                            <img alt={project.gallery[0].caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src={project.gallery[0].url} />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-sm font-bold uppercase tracking-widest drop-shadow-md">{project.gallery[0].caption}</p>
                            </div>
                        </div>

                        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden">
                            <img alt={project.gallery[1].caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src={project.gallery[1].url} />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-sm font-bold uppercase tracking-widest drop-shadow-md">{project.gallery[1].caption}</p>
                            </div>
                        </div>

                        <div className="md:col-span-1 relative group overflow-hidden min-h-[300px]">
                            <img alt={project.gallery[2].caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src={project.gallery[2].url} />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-sm font-bold uppercase tracking-widest drop-shadow-md">{project.gallery[2].caption}</p>
                            </div>
                        </div>

                        <div className="md:col-span-2 relative group overflow-hidden">
                            <img alt={project.gallery[3].caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src={project.gallery[3].url} />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-sm font-bold uppercase tracking-widest drop-shadow-md">{project.gallery[3].caption}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-t border-white/10 pt-20 pb-10">
                    <Link className="flex flex-col md:flex-row justify-between items-center gap-10 group/explore" to="/portfolio">
                        <div className="text-center md:text-left">
                            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2 block group-hover/explore:text-primary transition-colors">Back to Portfolio</span>
                            <h4 className="text-2xl font-serif text-white group-hover/explore:text-primary transition-colors">Explore More Projects</h4>
                        </div>
                        <div className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold uppercase tracking-widest text-white bg-[#262626] border border-white/10 group-hover/explore:bg-primary group-hover/explore:border-primary transition-all rounded-sm shadow-lg">
                            View Portfolio
                        </div>
                    </Link>
                </section>
            </main>
        </div>
    );
}

