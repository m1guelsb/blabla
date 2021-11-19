import React from 'react'
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
import { currentFirestore, fireAuth, logout } from '../../services/firebase'
import Head from 'next/head'
import { useCreateUser } from '../hooks/useCreateUser'

import { serverTimestamp } from 'firebase/firestore'

import { useCreateChat } from '../hooks/useCreateChat'

import { getMatchChats } from '../hooks/getMatchChats'

export default function Chat() {
  const [user] = useAuthState(fireAuth)

  const userData = {
    email: user?.email,
    name: user?.displayName,
    lastSeen: serverTimestamp(),
    photoURL: user?.photoURL
  }
  if (user) {
    useCreateUser(userData)
  }

  const { createChat } = useCreateChat(user)

  const { chatsData } = getMatchChats(user)

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
          <Sidebar user={user} chatsData={chatsData} />
        </SideBarContainer>

        <MainChatContainer>
          <MainChat />
        </MainChatContainer>
      </ChatContainer>
    </>
  )
}
