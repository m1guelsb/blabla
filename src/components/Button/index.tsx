import React, { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styleButton'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({ children, width, ...props }: ButtonProps) => {
  return (
    <ButtonContainer style={{ width }} {...props}>
      {children}
    </ButtonContainer>
  )
}
