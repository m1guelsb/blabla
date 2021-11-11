import { transparentize } from 'polished'
import styled from 'styled-components'

export const ChatContainer = styled.div`
  height: 100vh;

  padding: ${props => props.theme.spacing.padding.M};

  @media (min-width: 768px) {
  }

  background: ${props => props.theme.colors['background-3']};
`

export const SideBarContainer = styled.div``

export const MainChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
  }
`

export const UserAvatar = styled.div`
  position: relative;
  height: 3rem;
  width: 3rem;
  background: ${props =>
    transparentize(0.8, props.theme.colors['background-1'])};

  border-radius: 50%;

  .avatar {
    border-radius: 50%;
  }
`

export const ButtonIcon = styled.button`
  background: ${props => transparentize(0.8, props.theme.colors.tertiary)};

  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.2),
    -0.5px -0.5px 3px rgba(0, 0, 0, 0.2);

  height: 3rem;
  width: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  align-items: center;

  border-radius: ${props => props.theme.spacing.border_radius.M};
`
