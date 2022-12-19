import PropTypes from 'prop-types';
import styled from 'styled-components';

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  padding: 0.375rem 0.5rem 0.25rem;
  font: 700 0.6875rem/0.875rem ${({theme}) => theme.typography.fontFamily};
  text-transform: uppercase;
  letter-spacing: -0.005rem;
  color: ${({theme}) => theme.palette.typography.contrast};

  &[data-variant='default'] {
    background-color: ${({theme}) => theme.palette.background.tertiary};
  }

  &[data-variant='contrast'] {
    background-color: ${({theme}) => theme.palette.background.contrast};
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

export const Badge = ({children, variant}) => <BadgeContainer data-variant={variant}>{children}</BadgeContainer>;

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'contrast']),
};

Badge.defaultProps = {
  variant: 'default',
};
