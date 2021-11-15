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
import { fireAuth, logout, firestore } from '../../services/firebase'
import Head from 'next/head'
import useSetUsersData from '../hooks/useSetUsersData'

interface Props {}

export default function Chat(props: Props) {
  const [user, loading, error] = useAuthState(fireAuth)
  const userData = {
    email: user?.email,
    name: user?.displayName,
    lastSeen: firestore.serverTimestamp(),
    photoURL: user?.photoURL
  }

  useEffect(() => {
    if (user) {
      useSetUsersData(userData)
    }
  }, [user])

  return (
    <>
      <Head>
        <title>blablá | Chat</title>
      </Head>

      <ChatContainer>
        <HeaderContainer>
          <Header user={user} logout={logout} />
        </HeaderContainer>

        <SideBarContainer>
          <Sidebar />
        </SideBarContainer>

        <MainChatContainer>
          <MainChat />
        </MainChatContainer>
      </ChatContainer>
    </>
  )
}
