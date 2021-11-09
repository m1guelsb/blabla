import styled from 'styled-components'

export const MainChatHeader = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: space-between;

  position: relative;

  padding: 0 ${props => props.theme.spacing.padding.M};
  border-radius: ${props => props.theme.spacing.border_radius.L};

  background-color: ${props => props.theme.colors['background-2']};

  @media (min-width: 768px) {
    height: 20%;
  }

  z-index: 1;
`

export const ChatScreen = styled.div`
  height: 80%;

  padding: ${props => props.theme.spacing.padding.M};

  border-radius: ${props => props.theme.spacing.border_radius.L};

  background: ${props => props.theme.colors['background-2']};
  z-index: 2;

  @media (min-width: 768px) {
    height: 80%;
  }
`

export const ChatContainer = styled.div``
