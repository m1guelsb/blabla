import React, { useEffect } from 'react'
import * as EmailValidator from 'email-validator'
import { DotsVerticalIcon, PlusCircledIcon } from '@radix-ui/react-icons'

import { HeaderContainer } from './style-header'

import Image from 'next/image'
import pepo from '../../../assets/images/pepo.gif'
import { ButtonIcon, UserAvatar } from '../../../styles/pages/chat'
import Router from 'next/router'
import { User } from '@firebase/auth'
import useCreateChat from '../../../hooks/useCreateChat'
import { collection, doc, query, where } from '@firebase/firestore'

import { currentFirestore } from '../../../../services/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

interface HeaderProps {
  user?: User | null
  logout: () => Promise<void> | null
}

export const Header = ({ user, logout }: HeaderProps) => {
  const chatsCollRef = collection(currentFirestore, 'chats')

  let chatQuery
  if (user) {
    chatQuery = query(
      chatsCollRef,
      where('users', 'array-contains', user?.email)
    )
  }

  const [snapshot, loading, error] = useCollection(chatQuery)
  // const chatAlreadyExists = (emailToCheck: string) => {
  //   !!snapshot?.docs.find(
  //     chat =>
  //       chat.data().users.find(user => user === emailToCheck)?.lenght > 0
  //   )
  // }

  const dados = snapshot?.docs.map(chat => chat.data().users)

  const checkIfChatExists = (stringEmail: string) => {
    return (
      dados?.find(email => {
        return email.find((i: string) => i === stringEmail)
      }) && true
    )
  }

  // find(users => users === 'miguewsb@gmail.com'

  // console.log('use collection data', snapshot)

  const createChat = () => {
    const input = prompt(
      'Enter a email adress for the user that you want to chat'
    )

    if (!input) return null
    const userAndInputEmail = {
      userEmail: user?.email,
      inputEmail: input
    }
    if (EmailValidator.validate(input) && input !== user?.email) {
      const chatCheckExists = checkIfChatExists(input)
      if (chatCheckExists === true) {
        window.alert('ja criou um chat com esse email')
      } else {
        useCreateChat(userAndInputEmail)
      }
    } else {
      window.alert('vai conversa com vc memo? ta ficano doido')
    }
  }

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
