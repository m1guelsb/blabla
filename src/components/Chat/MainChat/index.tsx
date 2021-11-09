import React from 'react'
import { UserAvatar } from '../Sidebar/style-Sidebar'
import { ChatScreen, MainChatHeader } from './style-MainChat'
import Image from 'next/image'

import doge from '../../../assets/images/doge.png'
import avatar from '../../../assets/images/user-avatar.png'

interface Props {}

const myLoader = () => {
  return avatar
}

export const MainChat = (props: Props) => {
  return (
    <>
      <MainChatHeader>
        <UserAvatar>
          <Image
            className="avatar"
            src="/assets/images/doge.png"
            layout="fill"
            priority
            quality="100"
          />
        </UserAvatar>
      </MainChatHeader>
      <ChatScreen>{/* <ChatContainer></ChatContainer> */}</ChatScreen>
    </>
  )
}
