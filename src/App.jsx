import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components to improve initial load time
const Techstack = lazy(() => import('./components/Techstack'));
const Projects = lazy(() => import('./components/Projects'));
const Publications = lazy(() => import('./components/Publications'));
const Footer = lazy(() => import('./components/Footer'));


const PageLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-background">
    <div className="w-12 h-12 border-4 border-primary/10 border-t-accent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-primary selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<PageLoader />}>
        <Techstack />
        <Projects />
        <Publications />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
