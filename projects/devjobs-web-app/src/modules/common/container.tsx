import clsx from 'clsx';

type DivProps = JSX.IntrinsicElements['div'];

interface Props extends DivProps {
  size?: 'tiny' | 'small' | 'medium' | 'large';
}

const sizeClassNames = {
  large: `max-w-184.25 tablet:px-10 tablet:max-w-297.5`,
  medium: `max-w-184.25 tablet:px-10 tablet:max-w-202.5`,
  small: `max-w-160`,
  tiny: `max-w-120`,
};

export const Container: React.FC<Props> = ({className, size = 'medium', ...props}) => (
  <div {...props} className={clsx(className, 'mx-auto w-full px-6', sizeClassNames[size])} />
);
