import styled from 'styled-components'

export const ChatContainer = styled.div`
  height: 100vh;
  padding: 1rem 1rem;

  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
  }
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
  gap: 0.5rem;
  margin-top: 6rem;

  @media (min-width: 425px) {
    margin-top: 0;
    max-width: 100%;
    height: 100%;
    width: 100%;

    position: relative;
  }
`
