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
import { fireAuth } from '../../services/firebase'

interface Props {}

export default function Chat(props: Props) {
  const [user, loading, error] = useAuthState(fireAuth)

  return (
    <>
      <ChatContainer>
        <HeaderContainer>
          <Header userAvatar={user?.photoURL} />
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
