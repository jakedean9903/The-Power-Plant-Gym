import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import AboutUs from './components/AboutUs';
import Membership from './components/Membership';
import GallerySection from './components/GallerySection';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { GraffitiSidebarLeft, GraffitiSidebarRight } from './components/GraffitiSidebar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 font-sans selection:bg-neon-cyan selection:text-black overflow-x-hidden">
      <Navbar />
      
      <main className="relative">
        {/* Fixed decorative sidebars */}
        <GraffitiSidebarLeft />
        <GraffitiSidebarRight />
        
        <Hero />
        
        <div className="relative bg-grid-pattern bg-[length:40px_40px]">
           <Highlights />
           <AboutUs />
           <Membership />
           <GallerySection />
           <Reviews />
           <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;