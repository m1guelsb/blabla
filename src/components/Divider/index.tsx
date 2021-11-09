import React from 'react'
import { DividerContainer } from './style-Divider'

interface DividerProps {
  maxWidth?: string
}

export const Divider = ({ maxWidth }: DividerProps) => {
  return <DividerContainer style={{ maxWidth }} />
}
