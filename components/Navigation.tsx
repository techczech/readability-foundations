import React, { useState, useMemo } from 'react';
import { NAV_GROUPS, NAV_SECTIONS } from '../types';
import { SEARCH_INDEX } from '../data/searchIndex';
import { usePreferences, TextSize } from '../context/PreferencesContext';
import { 
  Layout, 
  Eye, 
  Brain, 
  FileText, 
  Zap, 
  MonitorPlay, 
  Home, 
  ChevronRight, 
  Accessibility,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  X,
  PenTool,
  ClipboardList,
  CheckSquare,
  MessageSquare,
  BookOpen,
  Layers,
  Presentation,
  Scale,
  Type
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onGoHome: () => void;
  className?: string;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Eye,
  Brain,
  FileText,
  Zap,
  MonitorPlay,
  Accessibility,
  PenTool,
  ClipboardList,
  CheckSquare,
  MessageSquare,
  BookOpen,
  Layers,
  Presentation,
  Scale
};

export const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  onNavigate, 
  onGoHome, 
  className = '',
  isCollapsed = false,
  onToggleCollapse
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { textSize, setTextSize } = usePreferences();

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.content.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearchResultClick = (sectionId: string) => {
    onNavigate(sectionId);
    setSearchQuery('');
  };

  return (
    <nav className={`flex flex-col h-full bg-white border-r border-slate-200 transition-all duration-300 ${className}`}>
      <div className={`p-4 border-b border-slate-100 flex flex-col ${isCollapsed ? 'items-center' : ''}`}>
        <div className={`flex items-center ${isCollapsed ? 'justify-center mb-4' : 'justify-between mb-6'}`}>
          {!isCollapsed && (
             <button 
               onClick={onGoHome}
               className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors group"
             >
               <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center mr-3 group-hover:bg-indigo-50 transition-colors">
                 <Home className="w-4 h-4 text-slate-500 group-hover:text-indigo-600" />
               </div>
               <span className="font-semibold text-sm">Return Home</span>
             </button>
          )}
          
          {isCollapsed && (
             <button 
               onClick={onGoHome}
               className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 transition-colors mb-2"
               title="Return Home"
             >
               <Home className="w-5 h-5" />
             </button>
          )}

          {onToggleCollapse && (
            <button
              onClick={onToggleCollapse}
              className={`text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-colors ${isCollapsed ? '' : 'ml-2'}`}
              title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
            </button>
          )}
        </div>
        
        {/* Search Input */}
        {!isCollapsed ? (
          <div className="mb-4 relative">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-indigo-500 transition-colors" />
              <input 
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-200/50 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <button 
            onClick={onToggleCollapse}
            className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 transition-colors mb-4"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        )}
      </div>
      
      <div className={`flex-1 overflow-y-auto py-2 ${isCollapsed ? 'px-2' : 'px-4'}`}>
        {/* Search Results */}
        {searchQuery ? (
          <div className="space-y-1">
            <h1 className="text-xs font-bold text-slate-400 px-2 mb-2">Search Results</h1>
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => {
                const section = NAV_SECTIONS.find(s => s.id === result.sectionId);
                const Icon = section ? iconMap[section.iconName] : FileText;
                
                return (
                  <button
                    key={`${result.sectionId}-${index}`}
                    onClick={() => handleSearchResultClick(result.sectionId)}
                    className="w-full text-left rounded-xl text-sm transition-all duration-200 group px-3 py-3 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-start">
                      <Icon className="w-5 h-5 flex-shrink-0 mr-3 text-slate-400 mt-0.5 group-hover:text-indigo-500" />
                      <div>
                        <span className="block font-semibold text-slate-900 mb-0.5 group-hover:text-indigo-700">{result.title}</span>
                        <span className="block text-xs text-slate-500 mb-1">{result.category}</span>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {result.content}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="text-center py-8 px-4">
                <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 font-medium">No results found</p>
                <p className="text-xs text-slate-400 mt-1">Try a different keyword</p>
              </div>
            )}
          </div>
        ) : (
          // Standard Navigation Grouped
          <div className="space-y-6">
            {NAV_GROUPS.map((group, groupIndex) => (
              <div key={groupIndex}>
                {!isCollapsed && (
                  <h3 className="px-3 mb-2 text-xs font-bold text-slate-400">
                    {group.title}
                  </h3>
                )}
                {isCollapsed && (
                   <div className="h-px w-8 bg-slate-100 mx-auto my-3"></div>
                )}
                <div className="space-y-1">
                  {group.items.map((section) => {
                    const Icon = iconMap[section.iconName];
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => onNavigate(section.id)}
                        title={isCollapsed ? section.title : undefined}
                        className={`w-full text-left rounded-xl text-sm transition-all duration-200 group flex items-center ${
                          isCollapsed ? 'justify-center py-3 px-0' : 'px-3 py-2.5'
                        } ${
                          isActive
                            ? 'bg-indigo-50 text-indigo-700 font-semibold'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                        }`}
                      >
                        <Icon className={`w-5 h-5 flex-shrink-0 ${isCollapsed ? '' : 'mr-3'} ${isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-500'}`} />
                        
                        {!isCollapsed && (
                          <>
                            <div className="flex-1 truncate">
                              <span className="block truncate">{section.title}</span>
                            </div>
                            {isActive && (
                              <ChevronRight className="w-4 h-4 text-indigo-400 ml-2" />
                            )}
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Footer / Settings */}
      <div className={`p-4 border-t border-slate-100 bg-slate-50/50 ${isCollapsed ? 'flex justify-center' : ''}`}>
        {!isCollapsed ? (
          <div className="space-y-4">
            <div>
               <div className="flex items-center text-xs font-bold text-slate-400 mb-2">
                 <Type className="w-3 h-3 mr-1" /> Text Size
               </div>
               <div className="flex bg-slate-200/50 p-1 rounded-lg">
                 {(['standard', 'large', 'xl'] as TextSize[]).map((size) => (
                   <button
                     key={size}
                     onClick={() => setTextSize(size)}
                     className={`flex-1 px-2 py-1.5 text-xs font-medium rounded-md transition-all ${
                       textSize === size 
                         ? 'bg-white text-indigo-600 shadow-sm' 
                         : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                     }`}
                   >
                     {size === 'standard' ? 'Aa' : size === 'large' ? 'Aa+' : 'Aa++'}
                   </button>
                 ))}
               </div>
            </div>
            
            {!searchQuery && (
              <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-200/50">
                Based on Foundations of Readability<br/>
                <span className="text-slate-300">© Dominik Lukeš, CC BY</span>
              </p>
            )}
          </div>
        ) : (
          <button
             onClick={() => setTextSize(textSize === 'standard' ? 'large' : textSize === 'large' ? 'xl' : 'standard')}
             className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 shadow-sm"
             title="Toggle Text Size"
          >
            <Type className="w-5 h-5" />
          </button>
        )}
      </div>
    </nav>
  );
};