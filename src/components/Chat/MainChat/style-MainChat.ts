import styled from 'styled-components'

export const MainChatHeader = styled.div`
  height: 5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  position: relative;

  padding: 0 ${props => props.theme.spacing.padding.M};
  border-radius: ${props => props.theme.spacing.border_radius.L};

  background-color: ${props => props.theme.colors['background-2']};

  @media (min-width: 768px) {
  }

  #name-lastactive {
    #chat-name {
      font-size: 1rem;
    }
  }
`

export const ChatScreen = styled.div`
  height: 80%;

  padding: ${props => props.theme.spacing.padding.M};

  border-radius: ${props => props.theme.spacing.border_radius.L};

  background: ${props => props.theme.colors['background-2']};
  z-index: 2;

  @media (min-width: 768px) {
    height: 100%;
  }
`

export const ChatContainer = styled.div``
