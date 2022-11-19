import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const Container = styled.div`
  max-width: 46.0625rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  &[data-size='medium'] {
    @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
      max-width: 50.625rem;
    }
  }

  &[data-size='large'] {
    @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
      max-width: 74.375rem;
    }
  }
`;

/* -------------------------------------------------------------------------- */
/*                                 Constrained                                */
/* -------------------------------------------------------------------------- */
interface Props extends React.ComponentProps<typeof Container> {
  size?: 'medium' | 'large';
}

export const Constrained: React.FC<Props> = ({size = 'medium', ...otherProps}) => <Container {...otherProps} data-size={size} />;
