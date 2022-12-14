/* eslint-disable react/button-has-type */
import clsx from 'clsx';

type ButtonProps = JSX.IntrinsicElements['button'];

interface Props extends ButtonProps {
  isLoading?: boolean;
  size?: 'square' | 'tiny' | 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'contrast' | 'transparent';
}

const sizeClassName = {
  large: 'px-8.75',
  medium: 'px-7',
  small: 'px-5',
  square: 'min-w-12 max-w-12 overflow-hidden',
  tiny: 'px-3.5',
};

const variantClassName = {
  contrast: `bg-indigo-700/10 text-indigo-700 tablet:hover:bg-indigo-700/[35%] dark:tablet:bg-white/10 dark:tablet:text-white dark:tablet:hover:bg-white/25`,
  default: 'bg-indigo-700 text-white hover:bg-indigo-500',
  transparent: 'bg-transparent',
};

export const Button: React.FC<Props> = ({
  className,
  children,
  isLoading = false,
  size = 'medium',
  type = 'button',
  variant = 'default',
  ...props
}) => (
  <button
    {...props}
    className={clsx(
      className,
      'relative rounded-1.25 text-button transition',
      sizeClassName[size],
      variantClassName[variant]
    )}
    type={type}
  >
    <span className="inline-flex h-12 items-center justify-center">
      <span className={clsx({invisible: isLoading})}>{children}</span>
      {isLoading && (
        <span className="absolute top-1/2 left-1/2 h-5 w-5 -translate-y-2/4 -translate-x-2/4">
          <svg
            className="mr-3 h-5 w-5 animate-spin text-white"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            />
          </svg>
        </span>
      )}
    </span>
  </button>
);
