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
  const [talkSelect, setTalkSelect] = useState('')

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
          <UserAvatar>
            <Image
              className="avatar"
              src={userAvatar}
              placeholder="empty"
              priority
              quality="100"
            />
          </UserAvatar>
          <div id="name-message">
            <span id="name">Doge</span>
            <p id="message">
              Bonk bonkbonk bonkbonkbonkbonkbonkbonkbonkbonkbon
            </p>
          </div>
          <div id="mTime-mNumber">
            <span id="time">00:24</span>
            <p id="unseenMessagesNumber">2</p>
          </div>
        </TalkItem>

        <TalkItem className="">
          <UserAvatar>
            <Image
              className="avatar"
              src={catjam}
              placeholder="empty"
              priority
              quality="100"
            />
          </UserAvatar>
          <div id="name-message">
            <span id="name">Catjam</span>
            <p id="message">
              Catjam catjam catjam catjam catjam catjam catjam catjam catjam cat
            </p>
          </div>
          <div id="mTime-mNumber">
            <span id="time">00:24</span>
            <p id="unseenMessagesNumber">2</p>
          </div>
        </TalkItem>
      </Talks>
    </>
  )
}
