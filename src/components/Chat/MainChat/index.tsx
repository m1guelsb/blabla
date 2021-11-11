import React from 'react'
import { ChatScreen, MainChatHeader } from './style-MainChat'
import Image from 'next/image'

import doge from '../../../assets/images/doge.png'
import { UserAvatar } from '../../../styles/pages/chat'

interface Props {}

export const MainChat = (props: Props) => {
  return (
    <>
      <MainChatHeader>
        <UserAvatar>
          <Image
            className="avatar"
            src={doge}
            layout="fill"
            priority
            quality="100"
          />
        </UserAvatar>
        <div id="name-lastactive">
          <span id="chat-name">Doge</span>
          <p id="last-active">Last Seen 3 hours ago</p>
        </div>
      </MainChatHeader>
      <ChatScreen>{/* <ChatContainer></ChatContainer> */}</ChatScreen>
    </>
  )
}
