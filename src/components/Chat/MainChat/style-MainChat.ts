import { transparentize } from 'polished'
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

  border-bottom: 2px solid
    ${props => transparentize(0.9, props.theme.colors.primary)};

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

export const ChatScreen = styled.div`
  height: 100%;
  padding: ${props => props.theme.spacing.padding.M};

  border-radius: ${props => props.theme.spacing.border_radius.L};
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  z-index: 2;

  @media (min-width: 768px) {
  }
`

export const ChatContainer = styled.div``
