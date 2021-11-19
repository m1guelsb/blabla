import React from 'react'
import { Talks } from './style-Sidebar'

import avatar from '../../../assets/images/user-avatar.svg'
import { TalkItem } from './TalkItem'

import { DocumentData } from '@firebase/firestore'
import { User } from '@firebase/auth'

interface Props {
  chatsData: DocumentData[] | undefined
  user: User | undefined | null
}

export const Sidebar = ({ chatsData, user }: Props) => {
  //transform the object that comes from the prop in an array
  const chatArray = Object.values(chatsData ? chatsData : '')
  //flat the array
  const talksData = chatArray.flat()
  const chatUsers = talksData.map(chat =>
    chat.chatUsers.map((user: User) => user)
  )
  const whoTalkingWith = chatUsers.map(u =>
    u.find((find: any) => find.email !== user?.email)
  )

  return (
    <>
      <Talks>
        {talksData.length > 0 ? (
          whoTalkingWith?.map(data => (
            <TalkItem
              key={data?.email}
              userAvatar={data?.photoURL || avatar}
              chatName={data?.email || 'User Name'}
            />
          ))
        ) : (
          <div>
            <h1 style={{ textAlign: 'center' }}>^</h1>
            <h1 style={{ textAlign: 'center' }}>Create a chat</h1>
          </div>
        )}
      </Talks>
    </>
  )
}
