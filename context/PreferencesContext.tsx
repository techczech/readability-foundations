import React, { createContext, useContext, useState, useEffect } from 'react';

export type TextSize = 'standard' | 'large' | 'xl';

interface PreferencesContextType {
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
};

export const PreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [textSize, setTextSize] = useState<TextSize>('standard');

  return (
    <PreferencesContext.Provider value={{ textSize, setTextSize }}>
      {children}
    </PreferencesContext.Provider>
  );
};