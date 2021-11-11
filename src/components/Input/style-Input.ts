import styled from 'styled-components'

export const InputContainer = styled.input`
  height: 4rem;
  padding: 0 ${props => props.theme.spacing.border_radius.M};

  border-radius: ${props => props.theme.spacing.border_radius.M};

  font: ${props => props.theme.typography['font-1']};
  color: ${props => props.theme.colors['text-1']};
  background-color: ${props => props.theme.colors['background-3']};

  &:focus {
    outline: ${props => props.theme.colors.primary};
  }
`
