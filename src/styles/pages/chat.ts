import styled from 'styled-components'

export const ChatContainer = styled.div`
  height: 100vh;
  padding: ${props => props.theme.spacing.padding.M};

  display: grid;

  @media (min-width: 768px) {
    height: 100vh;
    grid-template-columns: 1fr 3fr;
    gap: ${props => props.theme.spacing.padding.M};
  }

  background: ${props => props.theme.colors['background-3']};
`

export const SideBarContainer = styled.div`
  max-width: 384px;
  width: 100%;
  height: 96%;

  position: absolute;
  z-index: 4;
  top: 1rem;
  right: 100px;

  display: none;
  @media (max-width: 768px) {
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    z-index: 4;
    top: 1rem;
    right: 2%;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    top: 0;
    right: 0;
    height: 100%;
  }
`

export const MainChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 13vh;

  @media (min-width: 768px) {
    height: 100%;
    margin-top: 0;
  }
`
