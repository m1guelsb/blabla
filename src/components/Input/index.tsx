import React, { InputHTMLAttributes } from 'react'

import { InputContainer } from './style-Input'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
}

export const Input = ({ name, placeholder, ...props }: InputProps) => {
  return (
    <InputContainer
      name={name}
      placeholder={placeholder}
      // icon
      {...props}
    />
  )
}
