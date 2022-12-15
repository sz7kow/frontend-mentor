import {createContext, useContext} from 'react';

interface ContextValue {
  isDarkMode?: boolean;
  toggleColorScheme: () => void;
}

export const themeContext = createContext<ContextValue>({
  isDarkMode: false,
  toggleColorScheme: () => {},
});

export const useThemeContext = () => useContext(themeContext);
