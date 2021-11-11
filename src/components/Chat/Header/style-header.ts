import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  padding: 0 ${props => props.theme.spacing.padding.M};
  border-radius: ${props => props.theme.spacing.border_radius.L};

  background: ${props => props.theme.colors['background-2']};

  z-index: 2;
`
