import React from 'react'
import * as EmailValidator from 'email-validator'
import { DotsVerticalIcon, PlusCircledIcon } from '@radix-ui/react-icons'

import { HeaderContainer } from './style-header'

import Image from 'next/Image'
import pepo from '../../../assets/images/pepo.gif'
import { ButtonIcon, UserAvatar } from '../../../styles/pages/chat'

interface HeaderProps {
  userAvatar?: string | null
}

export const Header = (props: HeaderProps) => {
  // const createChat = () => {
  //   const input = prompt(
  //     'Enter a email adress for the user that you want to chat'
  //   )

  //   if (!input) return null

  //   if (EmailValidator.validate(input)) {
  //     //add the chat in db chats collection
  //   }
  // }

  return (
    <HeaderContainer>
      <UserAvatar>
        <Image
          className="avatar"
          src={props.userAvatar ? props.userAvatar : pepo}
          placeholder="empty"
          layout="fill"
          priority
          quality="100"
        />
      </UserAvatar>
      <ButtonIcon>
        <PlusCircledIcon
          // onClick={createChat}
          color="#6545DE"
          height="32"
          width="32"
        />
      </ButtonIcon>
      <ButtonIcon>
        <DotsVerticalIcon color="#6545DE" height="32" width="32" />
      </ButtonIcon>
    </HeaderContainer>
  )
}
