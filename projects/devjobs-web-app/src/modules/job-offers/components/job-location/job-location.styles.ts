import styled from 'styled-components';

import {createTypographyStyles} from 'themes/utils/create-typography-styles';

export const Location = styled.p`
  ${createTypographyStyles('h4')};
  color: ${({theme}) => theme.palette.success.primary};
`;
