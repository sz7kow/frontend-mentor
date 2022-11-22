import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const ButtonBase = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  border-radius: 0.3125rem;
  border: none;
  cursor: pointer;

  &[data-spacing='small'] {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  &[data-spacing='medium'] {
    padding-left: 1.875rem;
    padding-right: 1.875rem;
  }

  &[data-spacing='large'] {
    padding-left: 2.21875rem;
    padding-right: 2.21875rem;
  }

  &[data-variant='default'] {
    background-color: ${({theme}) => theme.palette.success.primary};
    color: ${({theme}) => theme.palette.success.contrast};
    &:hover {
      background-color: ${({theme}) => theme.palette.success.secondary};
    }
  }

  &[data-variant='subtile'] {
    position: relative;
    color: ${({theme}) => theme.palette.success.contrast};
    background: transparent;
    overflow: hidden;

    ::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: ${({theme}) => theme.palette.success.contrast};
      opacity: 0.1;
    }

    :hover::before {
      opacity: 0.25;
    }
  }
`;

/* -------------------------------------------------------------------------- */
/*                                   Button                                   */
/* -------------------------------------------------------------------------- */
interface Props extends React.ComponentProps<typeof ButtonBase> {
  type?: 'button' | 'submit' | 'reset';
  spacing?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'subtile';
}

export const Button: React.FC<Props> = ({type = 'button', spacing = 'medium', variant = 'default', ...otherProps}) => (
  <ButtonBase {...otherProps} data-spacing={spacing} data-variant={variant} type={type} />
);
