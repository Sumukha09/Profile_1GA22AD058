import React, { Suspense, lazy, useState, useEffect } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-primary selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      {isLoaded && (
        <Suspense fallback={<div className="py-20 text-center text-primary/40">Loading...</div>}>
          <Techstack />
          <Projects />
          <Publications />
          <Footer />
        </Suspense>
      )}
    </div>
  );
}

export default App;
