import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, TeamHistory, Hero, Navbar, StarsCanvas, Tech, Games } from './components';
import Sidebar from './components/Sidebar';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative bg-primary">
        {/* Background image - only in hero section */}
        <div className="relative">
          <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <Hero />
          </div>
          
          <About />
          <TeamHistory />
          <Tech />
          <Games />
          <Contact />
        </div>
        
        {/* Stars overlay with explicit pointer-events-none styling */}
        <div 
          className="fixed inset-0" 
          style={{ 
            zIndex: 50,
            pointerEvents: "none" // inline style to ensure it's applied
          }}
        >
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;