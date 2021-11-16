import React, { useEffect } from 'react'
import { Header } from '../components/Chat/Header'
import { Sidebar } from '../components/Chat/Sidebar'
import { MainChat } from '../components/Chat/MainChat'

//STYLE
import {
  ChatContainer,
  SideBarContainer,
  MainChatContainer,
  HeaderContainer
} from '../styles/pages/chat'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  fireAuth,
  logout,
  firestore,
  currentFirestore
} from '../../services/firebase'
import Head from 'next/head'
import useSetUsersData from '../hooks/useSetUsersData'
import { collection, query, where } from '@firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import * as EmailValidator from 'email-validator'
import useCreateChat from '../hooks/useCreateChat'

interface Props {}

export default function Chat(props: Props) {
  const [user] = useAuthState(fireAuth)
  const userData = {
    email: user?.email,
    name: user?.displayName,
    lastSeen: firestore.serverTimestamp(),
    photoURL: user?.photoURL
  }

  useEffect(() => {
    let isMounted = true
    function saveUser() {
      if (user) {
        if (isMounted) useSetUsersData(userData)
      }
    }
    return () => {
      isMounted = false
    }
  }, [user])

  //CHECK IF CHAT EXIST AND CREATE
  const chatsCollRef = collection(currentFirestore, 'chats')

  let chatQuery
  if (user) {
    chatQuery = query(
      chatsCollRef,
      where('users', 'array-contains', user?.email)
    )
  }

  const [snapshot] = useCollection(chatQuery)

  const chatsData = snapshot?.docs.map(chat => chat.data().users)

  // console.log(chatsData?.map(chat => chat[1]))

  const checkIfChatExists = (stringEmail: string) => {
    return (
      chatsData?.find(email => {
        return email.find((i: string) => i === stringEmail)
      }) && true
    )
  }

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
      const chatCheck = checkIfChatExists(input)
      if (chatCheck === true) {
        window.alert('You already have a chat with this email')
      } else {
        useCreateChat(userAndInputEmail)
      }
    } else {
      window.alert('You cant create a chat with yourself')
    }
  }

  return (
    <>
      <Head>
        <title>blablá | Chat</title>
      </Head>

      <ChatContainer>
        <HeaderContainer>
          <Header user={user} logout={logout} createChat={createChat} />
        </HeaderContainer>

        <SideBarContainer>
          <Sidebar chatsData={chatsData} />
        </SideBarContainer>

        <MainChatContainer>
          <MainChat />
        </MainChatContainer>
      </ChatContainer>
    </>
  )
}
