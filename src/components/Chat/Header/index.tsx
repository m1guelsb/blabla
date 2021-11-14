import React, { useEffect } from 'react'
import * as EmailValidator from 'email-validator'
import { DotsVerticalIcon, PlusCircledIcon } from '@radix-ui/react-icons'

import { HeaderContainer } from './style-header'

import Image from 'next/image'
import pepo from '../../../assets/images/pepo.gif'
import { ButtonIcon, UserAvatar } from '../../../styles/pages/chat'
import Router from 'next/router'
import { User } from '@firebase/auth'

interface HeaderProps {
  user?: User | null
  logout: () => Promise<void> | null
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

  async function handleLogout() {
    const confirmLogout = window.confirm('Sure that you want to leave?')
    if (confirmLogout === true) {
      props.logout()
      await Router.push('/')
    }
  }

  useEffect(() => {
    if (props.user === null) {
      Router.push('/')
    }
  })

  return (
    <HeaderContainer>
      <UserAvatar>
        <Image
          className="avatar"
          src={props.user?.photoURL ? props.user?.photoURL : pepo}
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
      <ButtonIcon onClick={handleLogout}>
        <DotsVerticalIcon color="#6545DE" height="32" width="32" />
      </ButtonIcon>
    </HeaderContainer>
  )
}
