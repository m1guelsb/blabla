import styled from 'styled-components'
import { transparentize } from 'polished'

export const Header = styled.div`
  display: flex;
  height: 12%;
  align-items: center;
  justify-content: space-between;

  position: relative;

  padding: 0 ${props => props.theme.spacing.padding.M};
  border-radius: ${props => props.theme.spacing.border_radius.L};

  background: ${props => props.theme.colors['background-2']};

  z-index: 2;

  @media (min-width: 768px) {
    height: 15%;
  }
`

export const UserAvatar = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  background: ${props =>
    transparentize(0.8, props.theme.colors['background-1'])};

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  .avatar {
    border-radius: 50%;
  }
`

export const ButtonIcon = styled.button`
  background: ${props => transparentize(0.8, props.theme.colors.tertiary)};

  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.2),
    -0.5px -0.5px 3px rgba(0, 0, 0, 0.2);

  height: 48px;
  width: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  align-items: center;

  border-radius: ${props => props.theme.spacing.border_radius.M};
`

export const Talks = styled.div`
  height: 90%;
  width: 100%;

  padding: ${props => props.theme.spacing.padding.M};

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

  z-index: 1;
`
export const TalkItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  height: 5rem;

  padding: ${props => props.theme.spacing.padding.S};
  border-radius: ${props => props.theme.spacing.border_radius.M};

  z-index: 3;

  &.selected {
    background: ${props => props.theme.colors['background-3']};
  }
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
