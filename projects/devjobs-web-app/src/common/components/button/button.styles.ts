import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.3125rem;
  height: 3rem;
  line-height: ${({theme}) => theme.typography.body.lineHeightAlt};
  cursor: pointer;

  &[data-spacing='square'] {
    overflow: hidden;
    width: 3rem;
    max-width: 3rem;
  }
  &[data-spacing='tiny'] {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }
  &[data-spacing='small'] {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  &[data-spacing='medium'] {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }
  &[data-spacing='large'] {
    padding-left: 1.875rem;
    padding-right: 1.875rem;
  }

  &[data-variant='default'] {
    background-color: ${({theme}) => theme.palette.success.primary};
    color: ${({theme}) => theme.palette.success.contrast};
    &:hover {
      background-color: ${({theme}) => theme.palette.success.secondary};
    }
  }
  &[data-variant='contrast'] {
    position: relative;
    overflow: hidden;
    color: ${({theme}) => theme.palette.success.contrast};
    ::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.1;
      background-color: ${({theme}) => theme.palette.success.contrast};
    }
    :hover::before {
      opacity: 0.25;
    }
  }
`;
