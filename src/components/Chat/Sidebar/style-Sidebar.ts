import { transparentize } from 'polished'
import styled from 'styled-components'

export const Talks = styled.div`
  height: 100%;

  padding: 0 ${props => props.theme.spacing.padding.M};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: auto;
  direction: rtl;

  border-radius: 2rem;

  transition: 0.2s ease;

  z-index: 1;
`
export const TalkItem = styled.div`
  min-height: 5rem;

  direction: ltr;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0 ${props => props.theme.spacing.padding.M};
  border-radius: ${props => props.theme.spacing.border_radius.M};

  position: relative;

  & + div::after {
    content: '';
    height: 2px;
    width: 100%;

    position: absolute;
    bottom: -6px;
    left: 0;
    background: ${props => props.theme.colors['primary-transparent']};
  }
  &.selected {
    background: ${props => props.theme.colors['primary-transparent']};
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
      }
      .message {
        color: ${props => props.theme.colors['text-2']};
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
