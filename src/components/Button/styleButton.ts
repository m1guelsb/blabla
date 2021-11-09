import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 1rem 1rem;
  border-radius: 0.5rem;

  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 1.1rem;
  color: #e1e1e6;
  background-color: ${props => props.theme.colors.secondary};

  cursor: pointer;

  &:focus {
    outline: ${props => props.theme.colors.primary};
  }
`
