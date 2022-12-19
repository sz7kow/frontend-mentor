import PropTypes from 'prop-types';
import styled from 'styled-components';

import iconRemove from 'assets/svgs/icon-remove.svg';

export const Item = styled.li`
  position: relative;
  z-index: 0;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  transition: ${({theme}) => theme.transition.default};
  border-radius: 0.25rem;
  background-color: ${({theme}) => theme.palette.background.secondary};
  font: 700 0.8125rem/1.5rem ${({theme}) => theme.typography.fontFamily};
  letter-spacing: -0.00625rem;
  color: ${({theme}) => theme.palette.typography.defaultAlt};

  &[data-is-removable='false'] {
    &:hover {
      background-color: ${({theme}) => theme.palette.background.tertiary};
      color: ${({theme}) => theme.palette.typography.contrast};
    }
  }

  &[data-is-removable='true'] {
    &::after {
      content: '';
      transition: inherit;
      background: url(${iconRemove}) no-repeat center, ${({theme}) => theme.palette.background.tertiary};
      width: 2rem;
      height: 2rem;
    }

    &:hover::after {
      background-color: ${({theme}) => theme.palette.background.contrast};
    }
  }
`;

export const Content = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
`;

export const TagItem = ({onClick, isRemovable, value}) => (
  <Item data-is-removable={isRemovable} onClick={() => onClick(value)}>
    <Content>{value}</Content>
  </Item>
);

TagItem.propTypes = {
  isRemovable: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
};

TagItem.defaultProps = {
  isRemovable: false,
  onClick: () => {},
};
