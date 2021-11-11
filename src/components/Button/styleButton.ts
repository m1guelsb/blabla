import { transparentize } from 'polished'
import styled from 'styled-components'

export const ButtonContainer = styled.button`
  height: 4rem;
  padding: 0 ${props => props.theme.spacing.border_radius.M};
  border-radius: ${props => props.theme.spacing.border_radius.M};

  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font: ${props => props.theme.typography['font-1']};

  font-size: 1.1rem;
  color: #ffffff;
  background-color: ${props => props.theme.colors.primary};

  &.secondary {
    color: ${props => props.theme.colors.primary};
    background-color: ${props =>
      transparentize(0.8, props.theme.colors.primary)};
    border-radius: ${props => props.theme.spacing.border_radius.S};
  }
`
