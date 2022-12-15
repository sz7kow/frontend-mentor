import Image from 'next/image';

import {useThemeContext} from './theme-context';

export const ThemeToggle: React.FC = () => {
  const {isDarkMode, toggleColorScheme} = useThemeContext();

  return (
    <label className="group flex min-w-fit cursor-pointer items-center gap-x-4 py-1">
      <Image alt="Light mode" height={20} src="/svgs/icon-sun.svg" width={20} />
      <input
        checked={isDarkMode !== undefined ? isDarkMode : false}
        className="peer sr-only"
        onChange={toggleColorScheme}
        type="checkbox"
        value=""
      />
      <span className="relative h-6 w-12 rounded-6 bg-white before:absolute before:left-1 before:top-1.25 before:h-3.5 before:w-3.5 before:rounded-1.75 before:bg-indigo-700 before:transition before:content group-hover:before:bg-indigo-500 peer-checked:before:translate-x-6.5" />
      <Image alt="Dark mode" height={12} src="/svgs/icon-moon.svg" width={12} />
    </label>
  );
};
