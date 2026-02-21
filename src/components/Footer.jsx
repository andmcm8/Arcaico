import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-surface-dark text-white pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light font-serif mb-6">Ready to build your <span className="text-primary italic">vision?</span></h2>
                        <p className="text-gray-400 max-w-md mb-8">Let's discuss your project and bring it to life with our team of expert architects and designers.</p>
                        <Link className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-background-charcoal transition-all duration-300" to="/start-project">
                            Start a Project
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Visit Us</h4>
                            <address className="not-italic text-gray-300 leading-relaxed">
                                123 Innovation Blvd,<br />
                                Design District, NY 10012<br />
                                United States
                            </address>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Contact</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li><a className="hover:text-primary transition-colors" href="mailto:hello@arcadiastudio.com">hello@arcadiastudio.com</a></li>
                                <li><a className="hover:text-primary transition-colors" href="tel:+15550192834">+1 (555) 019-2834</a></li>
                            </ul>
                            <div className="flex space-x-4 mt-6">
                                <a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="material-symbols-outlined">photo_camera</i></a>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="material-symbols-outlined">work</i></a>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="material-symbols-outlined">public</i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
                    <div className="mb-4 md:mb-0">
                        © 2024 Arcadia Studio. All rights reserved.
                    </div>
                    <div className="flex space-x-8">
                        <Link className="hover:text-white transition-colors" to="/privacy">Privacy</Link>
                        <Link className="hover:text-white transition-colors" to="/terms">Terms</Link>
                        <Link className="hover:text-white transition-colors" to="/sitemap">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
