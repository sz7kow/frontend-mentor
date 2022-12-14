import {useEffect, useState} from 'react';

import {DARK_SCHEME_CLASS_NAME, PREFERS_DARK_SCHEME_KEY} from './color-scheme-preference-config';
import {colorSchemePreferenceContext} from './color-scheme-preference-context';

const {Provider} = colorSchemePreferenceContext;

interface Props {
  children?: React.ReactNode;
}

export const ColorSchemePreferenceProvider: React.FC<Props> = ({children}) => {
  const [prefersDarkScheme, setPrefersDarkScheme] = useState<boolean>();

  useEffect(() => {
    const htmlElement = document.querySelector('html') as HTMLHtmlElement;
    setPrefersDarkScheme(htmlElement.classList.contains(DARK_SCHEME_CLASS_NAME));
  }, []);

  const toggleColorScheme = () => {
    const htmlElement = document.querySelector('html') as HTMLHtmlElement;

    window.localStorage.setItem(PREFERS_DARK_SCHEME_KEY, String(!prefersDarkScheme));
    htmlElement.classList.toggle(DARK_SCHEME_CLASS_NAME);

    setPrefersDarkScheme(!prefersDarkScheme);
  };

  return <Provider value={{prefersDarkScheme, toggleColorScheme}}>{children}</Provider>;
};
