import React from 'react';

import * as S from './constrained.styles';

interface Props extends React.ComponentProps<typeof S.Constrained> {
  size?: 'medium' | 'large';
}

const Constrained: React.FC<Props> = props => {
  const {size = 'medium', ...otherProps} = props;

  return <S.Constrained {...otherProps} data-size={size} />;
};

export {Constrained};
