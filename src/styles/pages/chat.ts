import { transparentize } from 'polished'
import styled from 'styled-components'

export const ChatContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-auto-columns: 360px 1fr;
    grid-template-rows: 5rem 1fr;
  }

  background: ${props => props.theme.colors['background-3']};
`
export const HeaderContainer = styled.div`
  @media (min-width: 768px) {
    grid-column: 1;
  }
`

export const SideBarContainer = styled.div`
  height: 100%;
  display: flex;
  /* display: none; */

  flex-direction: column;

  white-space: nowrap;
  overflow: hidden;

  background: ${props => props.theme.colors['background-3']};

  @media (min-width: 768px) {
    grid-column: 1;
  }
`
export const MainChatContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow: hidden;

  @media (min-width: 768px) {
    display: flex;
    grid-row: 1;
    grid-row-end: 3;
    grid-column: 2;
  }
`

export const UserAvatar = styled.div`
  position: relative;
  height: 3rem;
  width: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors['primary-transparent']};

  border-radius: 50%;

  .avatar {
    border-radius: 50%;
  }
`

export const ButtonIcon = styled.button`
  background: ${props => props.theme.colors['primary-transparent']};

  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.2),
    -0.5px -0.5px 3px rgba(0, 0, 0, 0.2);

  height: 3rem;
  width: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: ${props => props.theme.spacing.border_radius.M};
`
