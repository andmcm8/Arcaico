import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="bg-[#1A1A1A] text-white min-h-screen flex flex-col antialiased">
                <main className="flex-grow flex items-center justify-center pt-20">
                    <div className="max-w-2xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex justify-center mb-8">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
                            </div>
                        </div>
                        <h2 className="text-4xl font-display uppercase tracking-widest text-white mb-6">Message Sent</h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
                            Thank you for reaching out to Arcaico. Our design team has received your inquiry and will review it carefully. We typically respond within 1-2 business days to discuss how we can bring your vision to life.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="inline-flex items-center text-primary text-sm font-bold uppercase tracking-widest hover:text-white transition-colors group"
                        >
                            Return to Form
                            <span className="material-symbols-outlined ml-2 text-lg transform group-hover:-translate-x-1 transition-transform rotate-180">arrow_forward</span>
                        </button>
                    </div>
                </main>
            </div>
        );
    }
    return (
        <div className="bg-[#1A1A1A] text-white min-h-screen flex flex-col antialiased">
            <main className="flex-grow pt-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
                    <div className="mb-16 lg:mb-20">
                        <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Let's build something timeless</p>
                        <h1 className="font-display font-light text-5xl lg:text-7xl uppercase tracking-wide leading-tight text-white">
                            Get In <span className="font-normal text-gray-400">Touch</span>
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                        <div className="space-y-10">
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="group relative">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-primary" htmlFor="name">Name</label>
                                    <input
                                        className="w-full bg-transparent border-b border-gray-800 focus:border-primary border-t-0 border-l-0 border-r-0 px-0 py-3 text-lg text-white placeholder-gray-700 outline-none focus:ring-0 transition-all duration-300"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="group relative">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-primary" htmlFor="email">Email</label>
                                    <input
                                        className="w-full bg-transparent border-b border-gray-800 focus:border-primary border-t-0 border-l-0 border-r-0 px-0 py-3 text-lg text-white placeholder-gray-700 outline-none focus:ring-0 transition-all duration-300"
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="group relative">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-primary" htmlFor="projectType">Project Type</label>
                                    <div className="relative">
                                        <select
                                            className="w-full bg-transparent border-b border-gray-800 focus:border-primary border-t-0 border-l-0 border-r-0 px-0 py-3 text-lg text-white outline-none focus:ring-0 transition-all duration-300 cursor-pointer appearance-none relative z-10"
                                            id="projectType"
                                            name="projectType"
                                            required
                                            value={formData.projectType}
                                            onChange={handleChange}
                                        >
                                            <option className="bg-[#1a1a1a] text-gray-500" value="">Select a type</option>
                                            <option className="bg-[#1a1a1a] text-white" value="Residential">Residential Design</option>
                                            <option className="bg-[#1a1a1a] text-white" value="Commercial">Commercial Architecture</option>
                                            <option className="bg-[#1a1a1a] text-white" value="Interior">Interior Renovation</option>
                                            <option className="bg-[#1a1a1a] text-white" value="Urban">Urban Planning</option>
                                        </select>
                                        <span className="absolute right-0 bottom-4 pointer-events-none text-gray-500 material-symbols-outlined text-sm z-0">expand_more</span>
                                    </div>
                                </div>
                                <div className="group relative">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-primary" htmlFor="message">Message</label>
                                    <textarea
                                        className="w-full bg-transparent border-b border-gray-800 focus:border-primary border-t-0 border-l-0 border-r-0 px-0 py-3 text-lg text-white placeholder-gray-700 outline-none focus:ring-0 transition-all duration-300 resize-none h-32"
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your vision..."
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="pt-6">
                                    <button
                                        disabled={isSubmitting}
                                        className={`w-full ${isSubmitting ? 'bg-gray-700' : 'bg-primary hover:bg-[#ff8585]'} text-white font-medium text-sm tracking-widest uppercase py-5 px-8 transition-all duration-500 flex items-center justify-center group relative overflow-hidden`}
                                        type="submit"
                                    >
                                        <span className={`flex items-center transition-all duration-300 ${isSubmitting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                                            <span>Send Message</span>
                                            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
                                        </span>
                                        {isSubmitting && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="flex flex-col h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                                <div>
                                    <h3 className="font-display text-xl uppercase tracking-wide mb-6 text-white border-l-2 border-primary pl-4">Visit Us</h3>
                                    <address className="not-italic text-gray-400 leading-relaxed font-light pl-4">
                                        123 Innovation Blvd,<br />
                                        Design District, NY 10012<br />
                                        United States
                                    </address>
                                </div>
                                <div>
                                    <h3 className="font-display text-xl uppercase tracking-wide mb-6 text-white border-l-2 border-primary pl-4">Contact</h3>
                                    <div className="flex flex-col space-y-3 text-gray-400 font-light pl-4">
                                        <a className="hover:text-primary transition-colors flex items-center gap-2" href="mailto:hello@arcadiastudio.com">
                                            <span className="material-symbols-outlined text-sm">mail</span>
                                            hello@arcadiastudio.com
                                        </a>
                                        <a className="hover:text-primary transition-colors flex items-center gap-2" href="tel:+15550192834">
                                            <span className="material-symbols-outlined text-sm">call</span>
                                            +1 (555) 019-2834
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full flex-grow bg-neutral-900 overflow-hidden group min-h-[300px]">
                                <div className="absolute inset-0 opacity-50 mix-blend-luminosity">
                                    <img alt="Dark stylized map of city streets" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-iRK-8dcq6fwzNQ0JGnUXpmItWfXw_WbPX6yGXuCXsOCqzRd_esvDVSAlb9K670_aD5G68SwMabtbk_wWaB_3d1cHtERl7QlMJ7-aGx-WkaGzcyj__f9oZak7ZCwPbnmbbjAbwG_gG4IGpAKoPJZfP-eGMBpb3fl92qrxnvLzjI7NWB8krvcgkj_KC02_tAsM2_DeuTisjKIjjCBbnyl9KNcDlzRS2zvSl509Sw2SdkmEhhcncdTtTlz81m-4XZbH7zCcXMUHUMhI" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80"></div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-primary/20 rounded-full animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="relative z-10 bg-[#1a1a1a] border border-primary text-primary p-3 rounded-full shadow-2xl">
                                            <span className="material-symbols-outlined text-2xl block">location_on</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 bg-[#1a1a1a]/90 border border-gray-600 px-5 py-3 text-xs font-bold uppercase tracking-widest shadow-lg text-white">
                                    Headquarters
                                </div>
                            </div>

                            <div className="pt-10 border-t border-gray-600 flex items-center justify-between mt-auto">
                                <span className="text-xs uppercase tracking-widest text-gray-400">Follow our journey</span>
                                <div className="flex space-x-6">
                                    <a className="text-gray-400 hover:text-white transition-colors" href="#">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                                    </a>
                                    <a className="text-gray-400 hover:text-white transition-colors" href="#">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path></svg>
                                    </a>
                                    <a className="text-gray-400 hover:text-white transition-colors" href="#">
                                        <span className="material-symbols-outlined text-xl">share</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
