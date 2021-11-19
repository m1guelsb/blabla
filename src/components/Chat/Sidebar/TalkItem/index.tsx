import React from 'react'
import { UserAvatar } from '../../../../styles/pages/chat'

import { TalkItemContainer } from './style-TalkItem'

import Image from 'next/image'

interface TalkItemProps {
  userAvatar: string | any
  chatName: string
}

export const TalkItem = ({ userAvatar, chatName }: TalkItemProps) => {
  const chatNameCleaned = chatName?.replace(/@.*$/, '')

  return (
    <TalkItemContainer className="selected">
      <div>
        <UserAvatar>
          <Image
            className="avatar"
            src={userAvatar}
            placeholder="empty"
            layout="fill"
            priority
            quality="100"
          />
        </UserAvatar>
      </div>
      <div id="talkItem-message">
        <div className="name_message">
          <span className="name">{chatNameCleaned}</span>
          <p className="message">*message*</p>
        </div>
        <div className="time_amount">
          <span className="time">00:24</span>
          <p className="amount">23</p>
        </div>
      </div>
    </TalkItemContainer>
  )
}