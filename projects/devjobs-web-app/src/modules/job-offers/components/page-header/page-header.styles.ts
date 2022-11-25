import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: -2.5rem;
  padding-top: 2rem;
  padding-bottom: 4.5rem;
  background-color: ${({theme}) => theme.palette.success.primary};

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding-top: 2.625rem;
    padding-bottom: 5.375rem;
    border-bottom-left-radius: 6.25rem;
  }
`;

export const HeaderInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 7.1875rem;
  height: 2rem;
  color: ${({theme}) => theme.palette.success.contrast};
`;
