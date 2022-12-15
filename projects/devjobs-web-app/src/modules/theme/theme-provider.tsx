import {useEffect, useState} from 'react';

import {DARK_MODE_CLASS_NAME, IS_DARK_MODE_KEY} from './theme-config';
import {themeContext} from './theme-context';

const {Provider} = themeContext;

interface Props {
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({children}) => {
  const [isDarkMode, setPrefersDarkScheme] = useState<boolean>();

  useEffect(() => {
    const htmlElement = document.querySelector('html') as HTMLHtmlElement;
    setPrefersDarkScheme(htmlElement.classList.contains(DARK_MODE_CLASS_NAME));
  }, []);

  const toggleColorScheme = () => {
    const htmlElement = document.querySelector('html') as HTMLHtmlElement;

    window.localStorage.setItem(IS_DARK_MODE_KEY, String(!isDarkMode));
    htmlElement.classList.toggle(DARK_MODE_CLASS_NAME);

    setPrefersDarkScheme(!isDarkMode);
  };

  return <Provider value={{isDarkMode, toggleColorScheme}}>{children}</Provider>;
};
