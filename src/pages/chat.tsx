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
import { fireAuth, logout } from '../../services/firebase'
import Head from 'next/head'

interface Props {}

export default function Chat(props: Props) {
  const [user, loading, error] = useAuthState(fireAuth)

  return (
    <>
      <Head>
        <title>blablá | Login</title>
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
