import {DARK_MODE_CLASS_NAME, IS_DARK_MODE_KEY} from './theme-config';

export const themeInjectingScript = `
  const htmlElement = document.querySelector('html');

  const prefersDarkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const persistedPrefersDarkScheme = window.localStorage.getItem('${IS_DARK_MODE_KEY}');
  const hasPersistedPrefersDarkScheme = persistedPrefersDarkScheme !== null;
  const prefersDarkScheme = persistedPrefersDarkScheme === 'true';

  if (prefersDarkScheme || (!hasPersistedPrefersDarkScheme && prefersDarkSchemeQuery.matches)) {
    htmlElement.classList.add('${DARK_MODE_CLASS_NAME}');
    window.localStorage.setItem('${IS_DARK_MODE_KEY}', 'true');
  }
`;
