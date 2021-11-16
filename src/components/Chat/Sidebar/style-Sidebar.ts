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
