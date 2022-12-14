import {createContext, useContext} from 'react';

interface ContextValue {
  prefersDarkScheme?: boolean;
  toggleColorScheme: () => void;
}

export const colorSchemePreferenceContext = createContext<ContextValue>({
  prefersDarkScheme: false,
  toggleColorScheme: () => {},
});

export const useColorSchemePreferenceContext = () => useContext(colorSchemePreferenceContext);
