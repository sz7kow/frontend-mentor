import PropTypes from 'prop-types';
import {Fragment} from 'react';
import styled from 'styled-components';

import patternHeaderDesktop from 'assets/svgs/pattern-header-desktop.svg';
import patternHeaderMobile from 'assets/svgs/pattern-header-mobile.svg';
import {createBreakpoint} from 'utils/create-breakpoint';

export const Header = styled.header`
  height: 9.75rem;
  background-color: ${({theme}) => theme.palette.background.tertiary};
  background-image: url(${patternHeaderMobile});
  background-repeat: repeat-x;
  background-position: left center;

  ${createBreakpoint('desktop')} {
    background-image: url(${patternHeaderDesktop});
  }
`;

export const Content = styled.main`
  padding: 0 1.5rem 2.125rem;

  ${createBreakpoint('desktop')} {
    padding-bottom: 7.5rem;
  }
`;

export const ApplicationLayout = ({children}) => (
  <Fragment>
    <Header />
    <Content>{children}</Content>
  </Fragment>
);

ApplicationLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
