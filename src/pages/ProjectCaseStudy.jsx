import { Link, useParams } from 'react-router-dom';
import './ProjectCaseStudy.css';

const projectData = {
    'glass-pavilion': {
        title: 'The Glass Pavilion',
        subtitle: 'A seamless integration of indoor and outdoor living',
        category: 'Residential',
        year: '2023',
        location: 'Malibu, California',
        area: '4,200 sq ft',
        heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
        description: 'This pavilion challenges the boundaries of traditional residential architecture. Designed to blur the line between interior and exterior, every element—from the floor-to-ceiling glass walls to the cantilevered roof—serves to immerse the inhabitant in the natural landscape.',
        features: ['Floor-to-ceiling glass walls', 'Cantilevered infinity roof', 'Passive solar heating', 'Reclaimed oak flooring', 'Integrated smart home systems', 'Rainwater harvesting'],
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
        ]
    },
    'urban-retreat': {
        title: 'Urban Retreat',
        subtitle: 'A sanctuary in the heart of the city',
        category: 'Commercial',
        year: '2022',
        location: 'New York, NY',
        area: '12,800 sq ft',
        heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
        description: 'Transforming a derelict warehouse into a modern co-working sanctuary. The design preserves industrial character while introducing biophilic elements and state-of-the-art sustainability systems.',
        features: ['Adaptive reuse of 1920s warehouse', 'Living green walls', 'Acoustic zoning', 'Geothermal heating', 'Carbon-negative materials', 'Community rooftop garden'],
        gallery: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        ]
    },
    'coastal-residence': {
        title: 'Coastal Residence',
        subtitle: 'Where ocean meets architecture',
        category: 'Residential',
        year: '2023',
        location: 'Miami, FL',
        area: '6,500 sq ft',
        heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
        description: 'A beachfront residence designed to harness the coastal environment. Hurricane-resistant construction meets luxurious minimalism, with every room offering panoramic ocean views.',
        features: ['Hurricane-resistant glass', 'Infinity pool integration', 'Natural ventilation corridors', 'Coral-safe foundation', 'Solar panel roofing', 'Sea-level adaptive design'],
        gallery: [
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
            'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
        ]
    },
};

// Default project for any unlisted slug
const defaultProject = {
    title: 'Skyline Tower',
    subtitle: 'Redefining the commercial skyline',
    category: 'Commercial',
    year: '2024',
    location: 'London, UK',
    area: '85,000 sq ft',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    description: 'A 40-story commercial tower that sets new standards for sustainable high-rise design. The twisted form maximizes natural light while minimizing solar gain, reducing energy consumption by 45% compared to conventional towers.',
    features: ['Twisted aerodynamic form', 'Triple-pane smart glass', 'Vertical gardens on every floor', 'Net-zero energy target', 'Wind turbine integration', 'Community sky gardens'],
    gallery: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    ]
};

export default function ProjectCaseStudy() {
    const { slug } = useParams();
    const project = projectData[slug] || defaultProject;

    const relatedSlugs = Object.keys(projectData).filter(s => s !== slug).slice(0, 3);

    return (
        <div className="case-study-page">
            {/* Hero */}
            <section className="case-hero">
                <div className="case-hero__bg">
                    <img src={project.heroImage} alt={project.title} />
                    <div className="case-hero__overlay"></div>
                </div>
                <div className="container case-hero__content">
                    <Link to="/portfolio" className="case-hero__back">
                        <span className="material-icons">arrow_back</span> Back to Portfolio
                    </Link>
                    <span className="section-label">{project.category}</span>
                    <h1>{project.title}</h1>
                    <p className="case-hero__subtitle">{project.subtitle}</p>
                </div>
            </section>

            {/* Project Details */}
            <section className="section">
                <div className="container">
                    <div className="case-details">
                        <div className="case-meta-grid">
                            <div className="case-meta-item">
                                <span className="case-meta-label">Location</span>
                                <span className="case-meta-value">{project.location}</span>
                            </div>
                            <div className="case-meta-item">
                                <span className="case-meta-label">Year</span>
                                <span className="case-meta-value">{project.year}</span>
                            </div>
                            <div className="case-meta-item">
                                <span className="case-meta-label">Area</span>
                                <span className="case-meta-value">{project.area}</span>
                            </div>
                            <div className="case-meta-item">
                                <span className="case-meta-label">Type</span>
                                <span className="case-meta-value">{project.category}</span>
                            </div>
                        </div>

                        <div className="case-description">
                            <h2>Project Overview</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="section gallery-section">
                <div className="container">
                    <span className="section-label">Visual Story</span>
                    <h2>Gallery</h2>
                    <div className="case-gallery">
                        {project.gallery.map((img, i) => (
                            <div className={`case-gallery__item ${i === 0 ? 'case-gallery__item--large' : ''} img-hover`} key={i}>
                                <img src={img} alt={`${project.title} gallery ${i + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="section">
                <div className="container">
                    <span className="section-label">Highlights</span>
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        {project.features.map((feature, i) => (
                            <div className="feature-item" key={i}>
                                <span className="material-icons">check_circle</span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            <section className="section related-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Explore More</span>
                        <div className="section-header__row">
                            <h2>Related Projects</h2>
                            <Link to="/portfolio" className="btn btn-ghost">
                                View All <span className="material-icons">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                    <div className="related-grid">
                        {relatedSlugs.map(s => {
                            const p = projectData[s];
                            return (
                                <Link to={`/project/${s}`} key={s} className="related-card">
                                    <div className="related-card__image img-hover">
                                        <img src={p.heroImage} alt={p.title} loading="lazy" />
                                    </div>
                                    <h3>{p.title}</h3>
                                    <span className="related-card__meta">{p.category} · {p.year}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Inspired by this project?</h2>
                        <p>Let's create something extraordinary for you.</p>
                        <div className="cta-actions">
                            <Link to="/start-project" className="btn btn-primary">
                                Start Your Project <span className="material-icons">arrow_forward</span>
                            </Link>
                            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
