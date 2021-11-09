import styled from 'styled-components'

export const MainChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 10%;

  padding: 1rem 1rem;

  border-radius: 2rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  background-color: ${props => props.theme.colors['background-2']};
  background: ${props => props.theme.colors['background-2']};
  box-shadow: 20px 20px 60px ${props => props.theme.colors['background-3']},
    -20px -20px 60px ${props => props.theme.colors['background-1']};

  z-index: 1;
`

export const ChatScreen = styled.div`
  height: 90%;
  width: 100%;

  padding: 1rem 1rem;

  border-radius: 2rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  background: ${props => props.theme.colors['background-2']};
  box-shadow: 20px 20px 60px ${props => props.theme.colors['background-3']},
    -20px -20px 60px ${props => props.theme.colors['background-1']};

  z-index: 2;
`
