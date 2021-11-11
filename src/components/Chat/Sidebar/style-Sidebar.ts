import styled from 'styled-components'
import { transparentize } from 'polished'

export const Header = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  padding: 0 ${props => props.theme.spacing.padding.M};
  border-radius: ${props => props.theme.spacing.border_radius.L};

  background: ${props => props.theme.colors['background-2']};

  z-index: 2;
`

export const UserAvatar = styled.div`
  position: relative;
  height: 3rem;
  width: 3rem;
  background: ${props =>
    transparentize(0.8, props.theme.colors['background-1'])};

  border-radius: 50%;

  .avatar {
    border-radius: 50%;
  }
`

export const ButtonIcon = styled.button`
  background: ${props => transparentize(0.8, props.theme.colors.tertiary)};

  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.2),
    -0.5px -0.5px 3px rgba(0, 0, 0, 0.2);

  height: 3rem;
  width: 3rem;

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
  height: 4rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0 ${props => props.theme.spacing.padding.S};
  border-radius: ${props => props.theme.spacing.border_radius.M};

  &.selected {
    background: ${props => props.theme.colors['background-3']};
  }
  #talkItem-message {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .name_message {
      display: flex;
      flex-direction: column;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .name {
        font-weight: ${props => props.theme.typography['fw-700']};
      }
      .message {
      }
    }

    .time_amount {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .time {
      }
      .amount {
        height: 1.2rem;
        min-width: 1.2rem;
        max-width: 2.5rem;
        padding: 0 0.3rem;

        border-radius: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${props => props.theme.colors.warning};

        white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
      }
    }
  }
`
