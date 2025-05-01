import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.jsx';
export const ModeContext = createContext();

export function ModeContextProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('eng', true);
  const [mode, setMode] = useLocalStorage('light', true);
  const changeLanguage = () => {
    setLanguage(!language);
  };

  const changeMode = () => {
    setMode(!mode);
  };


  return (
    <ModeContext.Provider value={{ language, mode, changeLanguage, changeMode }}>
      {children}
    </ModeContext.Provider>
  );
}
