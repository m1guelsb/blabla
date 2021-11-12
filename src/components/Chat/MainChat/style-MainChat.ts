import styled from 'styled-components'

export const MainChatHeader = styled.div`
  min-height: 5rem;
  height: 5rem;
  padding: 0 ${props => props.theme.spacing.padding.M};

  display: flex;
  align-items: center;
  gap: 1rem;

  position: relative;

  border-radius: ${props => props.theme.spacing.border_radius.L};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  border-bottom: 2px solid ${props => props.theme.colors['primary-transparent']};

  @media (min-width: 768px) {
  }

  #name-active {
    .chat-name {
      font-size: 1.5rem;
      font-weight: ${props => props.theme.typography['fw-500']};
      text-transform: capitalize;
    }
    .last-active {
      color: ${props => props.theme.colors['text-2']};
    }
  }
`

export const MainChatScreen = styled.div`
  height: 100%;

  border-top-left-radius: 0;
  border-top-right-radius: 0;

  padding: 0 0 ${props => props.theme.spacing.padding.M};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  z-index: 2;
  overflow-y: auto;

  @media (min-width: 768px) {
  }
`

export const Messages = styled.div`
  padding: 0 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: auto;
`
export const ReceivedMessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ReceivedMessage = styled.div`
  padding: 1rem 1.5rem;
  max-width: 80%;
  border-radius: ${props => props.theme.spacing.border_radius.L};

  border: 1px solid ${props => props.theme.colors['primary-transparent']};
`

export const UserMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  & + .userMessage {
    div {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: -1rem;
    }
  }

  & ~ .userMessage {
    div {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`

export const UserMessage = styled.div`
  max-width: 80%;
  padding: 1rem 1.5rem;
  border-radius: ${props => props.theme.spacing.border_radius.L};
  color: #ffffff;

  background: ${props => props.theme.colors.primary};
`

export const SendMessageInputContainer = styled.div`
  display: flex;
  gap: 1rem;

  padding: 0 0.8rem;

  input {
    width: 100%;
  }
  button {
    width: 20%;
    transition: 0.2s;
    &:hover {
      transform: none;
    }
    &:active {
      transform: scale(98%);
    }
  }
`
