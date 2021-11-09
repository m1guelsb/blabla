import styled from 'styled-components'

export const InputContainer = styled.input`
  height: 3rem;
  padding: 2rem 1.5rem;

  border-radius: 0.5rem;

  font: ${props => props.theme.typography['font-1']};
  color: ${props => props.theme.colors['text-1']};
  background-color: ${props => props.theme.colors['background-3']};

  &:focus {
    outline: ${props => props.theme.colors.primary};
  }
`
