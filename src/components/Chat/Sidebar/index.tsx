import React, { useState } from 'react'
import { Talks } from './style-Sidebar'
import Image from 'next/image'

import userAvatar from '../../../assets/images/doge.png'
import { UserAvatar } from '../../../styles/pages/chat'
import { TalkItem } from './TalkItem'

interface Props {
  chatsData: [emails: string | any] | any
}

export const Sidebar = ({ chatsData }: Props) => {
  // console.log(chatsData?.map(chat => chat[1]))

  return (
    <>
      <Talks>
        {chatsData?.map((chat: string) => (
          <TalkItem key={chat[1]} userAvatar={userAvatar} chatEmail={chat[1]} />
        ))}
      </Talks>
    </>
  )
}
