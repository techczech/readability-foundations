import React, { createContext, useContext } from 'react';

interface NavigationContextType {
  onNavigate: (id: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider: React.FC<{ onNavigate: (id: string) => void; children: React.ReactNode }> = ({ onNavigate, children }) => {
  return (
    <NavigationContext.Provider value={{ onNavigate }}>
      {children}
    </NavigationContext.Provider>
  );
};