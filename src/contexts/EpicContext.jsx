import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const EpicContext = createContext(null);

/**
 * Epic Context Provider
 * Manages Epic mode state and patient context for the entire application
 */
export function EpicProvider({ children }) {
  const [searchParams] = useSearchParams();
  const [currentPatient, setCurrentPatient] = useState(null);
  const [activeTab, setActiveTab] = useState('PRISM');

  // Detect Epic mode from URL parameters
  const isEpicMode = useMemo(() => {
    return searchParams.get('epicMode') === 'true' ||
           searchParams.get('epic') === '1';
  }, [searchParams]);

  // Log mode changes for debugging
  useEffect(() => {
    console.log('[Epic Mode]', isEpicMode ? 'ENABLED' : 'DISABLED');
  }, [isEpicMode]);

  // Context value
  const value = useMemo(() => ({
    isEpicMode,
    currentPatient,
    setCurrentPatient,
    activeTab,
    setActiveTab
  }), [isEpicMode, currentPatient, activeTab]);

  return (
    <EpicContext.Provider value={value}>
      {children}
    </EpicContext.Provider>
  );
}

/**
 * Hook to access Epic context
 * @throws {Error} If used outside EpicProvider
 */
export function useEpic() {
  const context = useContext(EpicContext);

  if (!context) {
    throw new Error('useEpic must be used within an EpicProvider');
  }

  return context;
}

// Export context for testing purposes
export { EpicContext };
