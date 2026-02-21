import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background-charcoal/90 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link className="text-2xl font-light tracking-widest uppercase font-display text-white" to="/">
              ARCADIA<span className="text-primary font-bold">.</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-12 items-center">
            <Link className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors" to="/portfolio">Portfolio</Link>
            <Link className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors" to="/studio">Studio</Link>
            <Link className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors" to="/sustainability">Sustainability</Link>
            <Link className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors" to="/journal">Journal</Link>
            <Link className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors" to="/contact">Contact</Link>
            <Link className="bg-primary text-white px-6 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-red-500 transition-colors" to="/start-project">
              Start Project
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-300 hover:text-primary focus:outline-none"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background-charcoal border-b border-white/10 absolute w-full left-0 top-20 shadow-2xl pb-6 pt-2">
          <div className="flex flex-col space-y-4 px-6">
            <Link className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors" to="/portfolio">Portfolio</Link>
            <Link className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors" to="/studio">Studio</Link>
            <Link className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors" to="/sustainability">Sustainability</Link>
            <Link className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors" to="/journal">Journal</Link>
            <Link className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors" to="/contact">Contact</Link>
            <Link className="bg-primary text-white px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest hover:bg-red-500 transition-colors mt-4" to="/start-project">
              Start Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
