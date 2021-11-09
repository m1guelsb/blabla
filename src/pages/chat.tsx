import React, { useState } from 'react'
import { MainChat } from '../components/Chat/MainChat'
import { Sidebar } from '../components/Chat/Sidebar'
import {
  ChatContainer,
  MainChatContainer,
  SideBarContainer
} from '../styles/pages/chat'

interface Props {}

export default function Chat(props: Props) {
  return (
    <>
      <ChatContainer>
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
