import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

// Lazy load all pages for performance
const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Studio = lazy(() => import('./pages/Studio'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const Journal = lazy(() => import('./pages/Journal'));
const Contact = lazy(() => import('./pages/Contact'));
const StartProject = lazy(() => import('./pages/StartProject'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const SustainabilityCommitment = lazy(() => import('./pages/SustainabilityCommitment'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

function LoadingFallback() {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <span>Loading</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="studio" element={<Studio />} />
            <Route path="sustainability" element={<Sustainability />} />
            <Route path="sustainability/passive-ventilation" element={<SustainabilityCommitment />} />
            <Route path="journal" element={<Journal />} />
            <Route path="journal/:slug" element={<ArticleDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="start-project" element={<StartProject />} />
            <Route path="project/:slug" element={<CaseStudy />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="sitemap" element={<Sitemap />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
