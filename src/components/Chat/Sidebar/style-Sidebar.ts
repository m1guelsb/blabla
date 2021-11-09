import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  height: 10%;

  padding: 1rem 1rem;
  border-radius: 2rem;

  background-color: ${props => props.theme.colors['background-2']};
  background: ${props => props.theme.colors['background-2']};
  box-shadow: 20px 20px 60px ${props => props.theme.colors['background-3']},
    -20px -20px 60px ${props => props.theme.colors['background-1']};

  z-index: 2;
`

export const UserAvatar = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  padding: 0.1rem 0.1rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 2px 2px 6px ${props => props.theme.colors['background-3']},
    -2px -2px 6px ${props => props.theme.colors['background-1']};

  .avatar {
    border-radius: 50%;
  }
`

export const ButtonIcon = styled.button`
  background: none ${props => props.theme.colors['background-2']};

  background: ${props => props.theme.colors['background-2']};
  box-shadow: 2px 2px 6px ${props => props.theme.colors['background-3']},
    -2px -2px 6px ${props => props.theme.colors['background-1']};

  height: 48px;
  width: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  align-items: center;

  border-radius: 50%;

  transition: ease-in-out 0, 5s;

  &:hover {
    transform: none;
  }
  &:active {
    box-shadow: inset 2px 2px 6px ${props => props.theme.colors['background-3']},
      inset -2px -2px 6px ${props => props.theme.colors['background-1']};
  }
`

export const Talks = styled.div`
  height: 90%;
  width: 100%;

  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 2rem;

  display: none;

  transition: 0.2s ease;
  @media (max-width: 768px) {
    &.open {
      width: 96%;
      height: 80%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: absolute;
      z-index: 4;
      top: 6rem;
      right: 2%;
    }
  }

  @media (min-width: 768px) {
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 4;
    right: 2%;
    width: 100%;
  }

  background: ${props => props.theme.colors['background-2']};
  box-shadow: 20px 20px 60px ${props => props.theme.colors['background-3']},
    -20px -20px 60px ${props => props.theme.colors['background-1']};

  z-index: 1;
`
export const TalkItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  height: 5rem;

  padding: 1rem 1rem;
  border-radius: 2rem;

  background-color: ${props => props.theme.colors['background-1']};

  z-index: 3;

  .avatar {
    width: 5rem;
    border-radius: 50%;
  }

  div#name-message {
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;

    #name {
      font-size: 1.5rem;
    }
    #message {
    }
  }

  #mTime-mNumber {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;

    #unseenMessagesNumber {
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: clip;
      border-radius: 1rem;
      min-width: 1.5rem;
      max-width: 3.5rem;
      height: 1.5rem;
      padding: 0 0.2rem;
      background-color: #ff5722;
    }
  }
`
