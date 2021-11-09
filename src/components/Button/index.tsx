import React, { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styleButton'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string
  backgroundColor?: string
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({
  children,
  width,
  backgroundColor,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer style={{ width, backgroundColor }} {...props}>
      {children}
    </ButtonContainer>
  )
}
