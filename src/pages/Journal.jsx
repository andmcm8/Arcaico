import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function Journal() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [emailError, setEmailError] = useState('');

    // Filter articles based on category, tag, and search query
    // We separate the featured article (always articles[0]) from the grid
    const featuredArticle = articles.length > 0 ? articles[0] : null;
    const initialGridArticles = articles.length > 1 ? articles.slice(1) : [];

    const filteredGridArticles = initialGridArticles.filter(article => {
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
        const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => article.tags && article.tags.includes(tag));
        const matchesSearch = !searchQuery ||
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesTags && matchesSearch;
    });

    const categories = ['All', ...new Set(initialGridArticles.map(a => a.category))];
    const popularTags = [...new Set(initialGridArticles.flatMap(a => a.tags || []))].slice(0, 8);

    const [visibleCount, setVisibleCount] = useState(() => {
        const saved = sessionStorage.getItem('journalVisibleCount');
        return saved ? parseInt(saved, 10) : 6;
    });

    // Reset pagination when filters change
    const resetPagination = () => {
        setVisibleCount(6);
        sessionStorage.setItem('journalVisibleCount', 6);
    };

    const handleCategoryClick = (cat) => {
        setSelectedCategory(cat);
        setSelectedTags([]);
        resetPagination();
    };

    const handleTagClick = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
        resetPagination();
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        resetPagination();
    };

    const loadMore = () => {
        setVisibleCount(prev => {
            const nextCount = Math.min(prev + 6, filteredGridArticles.length);
            sessionStorage.setItem('journalVisibleCount', nextCount);
            return nextCount;
        });
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }
        setEmailError('');
        setIsSubscribed(true);
    };

    if (!featuredArticle) return null;

    return (
        <div className="bg-[#1A1A1A] text-white antialiased selection:bg-primary selection:text-white pb-20">
            <main>
                <section className="relative h-[650px] w-full flex items-end">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt={featuredArticle.title}
                            className="w-full h-full object-cover opacity-80 grayscale-[30%]"
                            src={featuredArticle.image}
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(26,26,26,0) 0%, rgba(26,26,26,0.8) 70%, rgba(26,26,26,1) 100%)' }}></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
                        <div className="max-w-4xl">
                            <div className="flex items-center space-x-4 mb-6">
                                <span className="inline-block w-8 h-[1px] bg-primary"></span>
                                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Featured Article</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-none tracking-tight">
                                {featuredArticle.title.split(':').map((part, i, arr) => (
                                    <span key={i}>
                                        {part}{i < arr.length - 1 && ':'}
                                        {i < arr.length - 1 && <br />}
                                    </span>
                                ))}
                            </h1>
                            <p className="text-xl text-gray-300 mb-10 font-light max-w-2xl leading-relaxed">
                                {featuredArticle.excerpt}
                            </p>
                            <Link to={`/journal/${featuredArticle.slug}`} className="inline-flex items-center text-white text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors group">
                                Read Full Story
                                <span className="material-symbols-outlined ml-2 text-lg transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-3/4">
                            <div className="flex justify-between items-end mb-12 border-b border-[#333333] pb-4">
                                <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Latest Insights</h2>
                                <div className="text-xs font-mono text-[#A3A3A3]">
                                    {filteredGridArticles.length > 0 ? `01 — ${String(Math.min(visibleCount, filteredGridArticles.length)).padStart(2, '0')}` : '00 — 00'} / {String(filteredGridArticles.length).padStart(2, '0')}
                                </div>
                            </div>

                            {filteredGridArticles.length === 0 ? (
                                <div className="py-20 text-center border border-dashed border-[#333333]">
                                    <p className="text-[#A3A3A3] text-sm uppercase tracking-widest">No articles found matching your filters.</p>
                                    <button
                                        onClick={() => { setSelectedCategory('All'); setSelectedTags([]); setSearchQuery(''); resetPagination(); }}
                                        className="mt-6 text-primary text-xs font-bold uppercase tracking-widest hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                    {filteredGridArticles.slice(0, visibleCount).map((article, index) => (
                                        <Link key={index} to={`/journal/${article.slug}`} className="group flex flex-col h-full cursor-pointer">
                                            <div className="relative h-64 overflow-hidden bg-[#252525] mb-6">
                                                <img
                                                    alt={article.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                                    src={article.image}
                                                />
                                                <div className="absolute top-0 left-0 p-4">
                                                    <span className="px-3 py-1 text-[10px] font-bold bg-[#1A1A1A] text-white border border-[#333333] group-hover:border-primary group-hover:text-primary transition-colors uppercase tracking-widest">
                                                        {article.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-grow">
                                                <div className="flex justify-between items-center mb-3">
                                                    <div className="text-[10px] font-mono text-[#A3A3A3] uppercase tracking-wider">{article.date}</div>
                                                    <span className="w-4 h-[1px] bg-[#333333] group-hover:bg-primary transition-colors"></span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                                                <p className="text-[#A3A3A3] text-sm mb-6 leading-relaxed line-clamp-3">{article.excerpt}</p>
                                                <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors mt-auto">
                                                    Read Article
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {visibleCount < filteredGridArticles.length && (
                                <div className="flex justify-center mt-16 mb-8">
                                    <button
                                        onClick={loadMore}
                                        className="px-12 py-4 bg-[#252525] border border-[#333333] text-white hover:bg-primary hover:border-primary transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em] shadow-sm cursor-pointer"
                                    >
                                        Load More
                                    </button>
                                </div>
                            )}
                        </div>

                        <aside className="lg:w-1/4 space-y-16 pl-0 lg:pl-8 border-l border-[#333333] lg:border-l lg:border-t-0 border-t pt-12 lg:pt-0">
                            <div className="group">
                                <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest border-l-2 border-primary pl-4">Search</h3>
                                <div className="relative">
                                    <input
                                        className="w-full bg-[#252525] border border-[#333333] text-white px-4 py-3 pl-10 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-[#A3A3A3]"
                                        placeholder="Type keywords..."
                                        type="text"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                    <span className="material-symbols-outlined absolute left-3 top-3 text-[#A3A3A3] text-lg">search</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest border-l-2 border-primary pl-4">Categories</h3>
                                <ul className="space-y-4">
                                    {categories.map((cat, i) => (
                                        <li key={i}>
                                            <div
                                                onClick={() => handleCategoryClick(cat)}
                                                className={`flex justify-between items-center transition-colors group cursor-pointer ${selectedCategory === cat ? 'text-primary' : 'text-[#A3A3A3] hover:text-white'}`}
                                            >
                                                <span className="text-sm tracking-wide group-hover:translate-x-1 transition-transform">{cat}</span>
                                                <span className={`text-xs font-mono transition-colors ${selectedCategory === cat ? 'text-primary' : 'text-[#333333] group-hover:text-primary'}`}>
                                                    {String(initialGridArticles.filter(a => cat === 'All' || a.category === cat).length).padStart(2, '0')}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-[#252525] p-8 border border-[#333333]">
                                {isSubscribed ? (
                                    <div className="text-center py-4">
                                        <span className="material-symbols-outlined text-green-500 text-4xl mb-4">check_circle</span>
                                        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Subscription Confirmed</h3>
                                        <p className="text-[#A3A3A3] text-xs leading-relaxed">
                                            Thank you for subscribing! A confirmation email has been sent to {email}.
                                        </p>
                                        <button
                                            onClick={() => { setIsSubscribed(false); setEmail(''); }}
                                            className="mt-6 text-[10px] font-bold text-primary uppercase tracking-widest hover:underline"
                                        >
                                            Go Back
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex items-center mb-4">
                                            <span className="material-symbols-outlined text-primary text-2xl mr-3">mail</span>
                                            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Weekly Digest</h3>
                                        </div>
                                        <p className="text-[#A3A3A3] text-xs mb-6 leading-relaxed">Curated architectural insights delivered to your inbox. No spam, only substance.</p>
                                        <form onSubmit={handleSubscribe} className="space-y-4">
                                            <div className="relative">
                                                <input
                                                    className={`w-full bg-[#1A1A1A] border ${emailError ? 'border-red-500' : 'border-[#333333]'} px-4 py-3 text-sm text-white focus:border-primary focus:ring-0 placeholder-[#A3A3A3] transition-colors`}
                                                    placeholder="Email Address"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                {emailError && <p className="text-red-500 text-[10px] mt-1">{emailError}</p>}
                                            </div>
                                            <button
                                                className="w-full bg-white hover:bg-primary text-[#1A1A1A] hover:text-white text-xs font-bold py-3 transition-colors uppercase tracking-widest"
                                                type="submit"
                                            >
                                                Subscribe Now
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest border-l-2 border-primary pl-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-3">
                                    {popularTags.map((tag, i) => (
                                        <span
                                            key={i}
                                            onClick={() => handleTagClick(tag)}
                                            className={`px-3 py-1 border text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${selectedTags.includes(tag) ? 'bg-primary border-primary text-white' : 'bg-[#252525] border-[#333333] text-[#A3A3A3] hover:border-primary hover:text-white'}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
}
