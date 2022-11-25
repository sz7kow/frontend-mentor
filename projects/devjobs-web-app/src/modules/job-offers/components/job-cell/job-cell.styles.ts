import Link from 'next/link';
import styled from 'styled-components';

import {createTypographyStyles} from 'themes/utils/create-typography-styles';

export const Cell = styled.li`
  position: relative;
  border-radius: 0.375rem;
  padding: 2.875rem 2rem 2.1875rem;
  background-color: ${({theme}) => theme.palette.background.secondary};
`;

export const CellInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`;

export const EmployerLogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 2rem;
  transform: translateY(-50%);
`;

export const JobPositionLink = styled(Link)`
  ${createTypographyStyles('h3')};
  display: inline-block;
  margin-top: 0.6875rem;
  margin-bottom: 0.875rem;
  color: ${({theme}) => theme.palette.typography.title};
  :hover {
    color: ${({theme}) => theme.palette.typography.default};
  }
`;
