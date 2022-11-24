import Link from 'next/link';
import styled from 'styled-components';

import {createTypographyStyles} from '~theming/utils/create-typography-styles';

export const Cell = styled.li`
  position: relative;
  border-radius: 0.375rem;
  padding: 46px 2rem 35px;
  background-color: ${({theme}) => theme.palette.background.secondary};
`;

export const CellInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const EmployerLogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 2rem;
  transform: translateY(-50%);
`;

export const EmployerCompany = styled.p`
  line-height: ${({theme}) => theme.typography.body.lineHeightAlt};
`;

export const JobPositionLink = styled(Link)`
  ${createTypographyStyles('h3')};
  display: inline-block;
  margin-top: 11px;
  margin-bottom: 14px;
  color: ${({theme}) => theme.palette.typography.title};
  :hover {
    color: ${({theme}) => theme.palette.typography.default};
  }
`;
