import React from 'react'
import { Header } from '../components/Chat/Header'
import { Sidebar } from '../components/Chat/Sidebar'
import { MainChat } from '../components/Chat/MainChat'

//STYLE
import {
  ChatContainer,
  SideBarContainer,
  MainChatContainer
} from '../styles/pages/chat'

interface Props {}

export default function Chat(props: Props) {
  return (
    <>
      <ChatContainer>
        <Header />
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
