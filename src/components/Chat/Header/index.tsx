import React, { useEffect } from 'react'
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
  createChat: () => void
}

export const Header = ({ user, createChat, logout }: HeaderProps) => {
  async function handleLogout() {
    const confirmLogout = window.confirm('Sure that you want to leave?')
    if (confirmLogout === true) {
      logout()
      await Router.push('/')
    }
  }

  useEffect(() => {
    if (user === null) {
      Router.push('/')
    }
  })

  return (
    <HeaderContainer>
      <UserAvatar>
        <Image
          className="avatar"
          src={user?.photoURL ? user?.photoURL : pepo}
          placeholder="empty"
          layout="fill"
          priority
          quality="100"
        />
      </UserAvatar>
      <ButtonIcon>
        <PlusCircledIcon
          onClick={createChat}
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
