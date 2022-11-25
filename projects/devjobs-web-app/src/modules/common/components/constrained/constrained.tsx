import * as S from './constrained.styles';

interface Props extends React.ComponentProps<typeof S.Container> {
  size?: 'medium' | 'large';
}

export const Constrained: React.FC<Props> = ({size = 'medium', ...otherProps}) => (
  <S.Container {...otherProps} data-size={size} />
);
