import styled from 'styled-components'

export const HeaderContainer = styled.div`
  min-height: 5rem;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  padding: 0 ${props => props.theme.spacing.padding.M};
  border-radius: ${props => props.theme.spacing.border_radius.L};

  background: none;

  z-index: 2;
`
