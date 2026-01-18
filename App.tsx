import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Content } from './components/Content';
import { Home } from './components/Home';
import { Menu, X } from 'lucide-react';
import { NavigationProvider } from './context/NavigationContext';
import { PreferencesProvider, usePreferences } from './context/PreferencesContext';

type ViewState = 'home' | 'guide';

const AppContent = () => {
  const [view, setView] = useState<ViewState>('home');
  const [activeSection, setActiveSection] = useState<string>('five-principles');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { textSize } = usePreferences();

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    setView('guide');
    setMobileMenuOpen(false);
    // Focus management handled in Content.tsx, scrolling handled here
    const mainContainer = document.getElementById('main-content-scroll');
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGoHome = () => {
    setView('home');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Map text size preference to CSS classes
  const textSizeClasses = {
    standard: '',
    large: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <NavigationProvider onNavigate={handleNavigate}>
      <div className={`min-h-screen bg-white font-sans text-slate-900 ${textSizeClasses[textSize]}`}>
        
        {/* Accessibility: Skip to Content Link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:font-bold focus:shadow-xl transition-all"
        >
          Skip to content
        </a>

        {view === 'home' ? (
          <Home onNavigate={handleNavigate} />
        ) : (
          <div className="flex h-screen overflow-hidden">
            {/* Desktop/Tablet Sidebar - Visible on md and up */}
            <aside className={`hidden md:flex flex-col fixed inset-y-0 z-50 bg-white transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-72'}`}>
              <Navigation 
                activeSection={activeSection} 
                onNavigate={handleNavigate} 
                onGoHome={handleGoHome}
                isCollapsed={isSidebarCollapsed}
                onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              />
            </aside>

            {/* Mobile Header - Hidden on md and up */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-40 flex items-center justify-between px-4 shadow-sm">
              <span className="font-bold text-slate-800 flex items-center text-sm">
                Foundations of Readability
              </span>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-md"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Drawer - Only for small screens */}
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-50 md:hidden">
                <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
                <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl overflow-y-auto">
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-4 right-4 text-slate-400 p-2 hover:text-slate-600"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <Navigation 
                    activeSection={activeSection} 
                    onNavigate={handleNavigate}
                    onGoHome={handleGoHome}
                    className="pt-12 border-none"
                  />
                </div>
              </div>
            )}

            {/* Main Content */}
            <main 
              id="main-content-scroll"
              className={`flex-1 pt-16 md:pt-0 overflow-y-auto h-full bg-white transition-all duration-300 ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-72'}`}
            >
               <div id="main-content" tabIndex={-1} className="outline-none">
                 <Content activeSection={activeSection} onNavigate={handleNavigate} />
               </div>
            </main>
          </div>
        )}
      </div>
    </NavigationProvider>
  );
};

export default function App() {
  return (
    <PreferencesProvider>
      <AppContent />
    </PreferencesProvider>
  );
}