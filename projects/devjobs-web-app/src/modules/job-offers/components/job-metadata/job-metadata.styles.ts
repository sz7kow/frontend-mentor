import styled from 'styled-components';

export const Metadata = styled.div`
  &,
  & > *:not(:last-child) {
    display: flex;
    flex-direction: row;
    column-gap: 0.75rem;
    align-items: center;
  }

  & > *:not(:last-child)::after {
    content: '';
    position: static;
    transform: translateY(0.25rem);
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.palette.typography.default};
  }
`;
