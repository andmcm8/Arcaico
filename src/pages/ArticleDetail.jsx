import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function ArticleDetail() {
    const { slug } = useParams();
    // Default to the first article if not found
    const article = articles.find(a => a.slug === slug) || articles[0];

    // Get next and previous articles
    const articleIndex = articles.findIndex(a => a.slug === article.slug);
    const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : articles[articles.length - 1];
    const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : articles[0];

    // Get 3 random related articles for the bottom section
    const relatedArticles = articles.filter(a => a.slug !== article.slug).slice(0, 3);

    return (
        <div className="bg-background-charcoal text-text-white antialiased selection:bg-primary selection:text-white">
            <main className="pt-20">
                <section className="relative h-[85vh] w-full flex items-end">
                    <div className="absolute inset-0 z-0">
                        <img alt={article.title} className="w-full h-full object-cover opacity-80" src={article.image} />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(26,26,26,0) 0%, rgba(26,26,26,0.6) 70%, rgba(26,26,26,1) 100%)' }}></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
                        <Link to="/journal" className="absolute top-0 left-4 sm:left-6 lg:left-8 inline-flex items-center text-primary text-xs font-bold tracking-[0.2em] uppercase group/back bg-background-charcoal/40 backdrop-blur-md px-4 py-2 border border-white/5 rounded-sm hover:bg-primary hover:text-white transition-all duration-300">
                            <span className="material-symbols-outlined text-sm mr-2 transition-transform group-hover/back:-translate-x-1">arrow_back</span>
                            Back to Journal
                        </Link>
                        <div className="max-w-4xl pt-12">
                            <div className="flex items-center space-x-4 mb-8">
                                <span className="inline-block w-12 h-[2px] bg-primary"></span>
                                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{article.category}</span>
                                <span className="text-gray-700 mx-2">|</span>
                                <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">{article.date}</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-none tracking-tight">{article.title.split(' ').slice(0, 3).join(' ')}<br />{article.title.split(' ').slice(3).join(' ')}</h1>
                            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed border-l-4 border-gray-700 pl-6">
                                {article.excerpt}
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <aside className="lg:col-span-3 space-y-12">
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-800 pb-2">Article Data</h3>
                                <dl className="space-y-6">
                                    <div>
                                        <dt className="text-[10px] uppercase tracking-wider text-primary mb-1">Written By</dt>
                                        <dd className="text-sm font-medium text-white">{article.author}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-[10px] uppercase tracking-wider text-primary mb-1">Est. Read Time</dt>
                                        <dd className="text-sm font-medium text-white">{article.readTime}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-[10px] uppercase tracking-wider text-primary mb-1">Keywords</dt>
                                        <dd className="text-sm font-medium text-white flex flex-wrap gap-2 mt-2">
                                            <span className="bg-surface-dark px-2 py-1 text-xs text-gray-400">{article.category}</span>
                                            <span className="bg-surface-dark px-2 py-1 text-xs text-gray-400">Architecture</span>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="pt-8 border-t border-gray-800">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-800 pb-2">Share</h3>
                                <div className="flex space-x-4">
                                    <button type="button" className="text-white hover:text-primary transition-colors"><span className="material-symbols-outlined">share</span></button>
                                    <button type="button" className="text-white hover:text-primary transition-colors"><span className="material-symbols-outlined">bookmark</span></button>
                                    <button type="button" className="text-white hover:text-primary transition-colors"><span className="material-symbols-outlined">print</span></button>
                                </div>
                            </div>
                        </aside>

                        <div className="lg:col-span-9">
                            <article className="prose prose-invert prose-lg max-w-none">
                                <div className="text-gray-400 font-light leading-relaxed space-y-8 text-lg whitespace-pre-line">
                                    <p>
                                        {article.content}
                                    </p>
                                </div>

                                <div className="my-16 relative py-12">
                                    <span className="absolute top-0 left-0 text-9xl text-gray-800 opacity-20 font-serif leading-none">“</span>
                                    <blockquote className="relative z-10 border-l-4 border-primary pl-8 py-2">
                                        <p className="text-2xl md:text-3xl font-serif italic text-white leading-tight">
                                            The true luxury of the future city is not private space, but seamless friction-free living where architecture anticipates human needs.
                                        </p>
                                        <footer className="mt-6 text-sm font-bold text-primary uppercase tracking-widest not-italic">— {article.author}</footer>
                                    </blockquote>
                                </div>

                                <div className="my-20">
                                    <div className="flex items-center space-x-4 mb-8">
                                        <span className="h-[1px] w-8 bg-primary"></span>
                                        <h3 className="text-sm font-bold text-white uppercase tracking-widest">Visual Documentation</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="group relative aspect-[4/5] overflow-hidden bg-surface-dark">
                                            <img alt="Project rendering 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src={articles[(articleIndex + 2) % articles.length].image} />
                                        </div>
                                        <div className="group relative aspect-[4/5] overflow-hidden bg-surface-dark">
                                            <img alt="Project rendering 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src={articles[(articleIndex + 4) % articles.length].image} />
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="mt-24 pt-12 border-t border-gray-800 flex justify-between items-center">
                                <Link to={`/journal/${prevArticle.slug}`} className="group flex flex-col items-start w-1/3">
                                    <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">Previous Article</span>
                                    <span className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{prevArticle.title}</span>
                                </Link>
                                <Link to={`/journal/${nextArticle.slug}`} className="group flex flex-col items-end text-right w-1/3">
                                    <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">Next Article</span>
                                    <span className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{nextArticle.title}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-surface-dark border-y border-gray-800 py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Related Insights</h2>
                            <Link to="/journal" className="text-xs font-bold text-primary uppercase tracking-widest hover:text-white transition-colors">View All News</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedArticles.map((relArticle, i) => (
                                <Link to={`/journal/${relArticle.slug}`} key={i} className="group cursor-pointer block">
                                    <div className="relative h-64 overflow-hidden mb-6">
                                        <img alt={relArticle.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" src={relArticle.image} />
                                        <div className="absolute top-0 left-0 p-4">
                                            <span className="px-3 py-1 text-[10px] font-bold bg-background-charcoal text-white border border-gray-700 uppercase tracking-widest">{relArticle.category}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-2">{relArticle.title}</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{relArticle.excerpt}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
