import * as S from './button.styles';

interface Props extends React.ComponentProps<typeof S.Button> {
  type?: 'button' | 'submit' | 'reset';
  spacing?: 'square' | 'tiny' | 'small' | 'medium' | 'large';
  variant?: 'default' | 'contrast';
}

export const Button: React.FC<Props> = ({type = 'button', spacing = 'medium', variant = 'default', ...otherProps}) => (
  <S.Button {...otherProps} data-variant={variant} data-spacing={spacing} type={type} />
);
