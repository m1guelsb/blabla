import React from 'react'
import { ChatScreen, MainChatHeader } from './style-MainChat'

interface Props {}

export const MainChat = (props: Props) => {
  return (
    <>
      <MainChatHeader />
      <ChatScreen />
    </>
  )
}
