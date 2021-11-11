import React, { useState } from 'react'
import {
  Header,
  UserAvatar,
  ButtonIcon,
  Talks,
  TalkItem
} from './style-Sidebar'
import Image from 'next/image'

import userAvatar from '../../../assets/images/doge.png'
import catjam from '../../../assets/images/catjam.gif'
import pepo from '../../../assets/images/pepo.gif'
import { PlusCircledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'

interface Props {}

export const Sidebar = (props: Props) => {
  const [talksOpen, setTalksOpen] = useState('')

  function handleTalksOpen() {
    if (talksOpen === '') {
      setTalksOpen('open')
    } else {
      setTalksOpen('')
    }
  }

  return (
    <>
      <Header>
        <UserAvatar>
          <Image
            className="avatar"
            src={pepo}
            placeholder="empty"
            layout="fill"
            priority
            quality="100"
          />
        </UserAvatar>
        <ButtonIcon>
          <PlusCircledIcon color="#FFB800" height="32" width="32" />
        </ButtonIcon>
        <ButtonIcon onClick={handleTalksOpen}>
          <DotsVerticalIcon color="#FFB800" height="32" width="32" />
        </ButtonIcon>
      </Header>
      <Talks className={talksOpen}>
        <TalkItem className="selected">
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
              <span className="name">Doge</span>
              <p className="message">Bonk aaaaaaaaaaaaaaaaaaaaa</p>
            </div>
            <div className="time_amount">
              <span className="time">00:24</span>
              <p className="amount">23</p>
            </div>
          </div>
        </TalkItem>
      </Talks>
    </>
  )
}
