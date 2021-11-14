import React, { useState } from 'react'
import { Talks, TalkItem } from './style-Sidebar'
import Image from 'next/Image'

import userAvatar from '../../../assets/images/doge.png'
import { UserAvatar } from '../../../styles/pages/chat'

interface Props {}

export const Sidebar = (props: Props) => {
  return (
    <>
      <Talks>
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

        <TalkItem className="">
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

        <TalkItem className="">
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

        <TalkItem className="">
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

        <TalkItem className="">
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

        <TalkItem className="">
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

        <TalkItem className="">
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

        <TalkItem className="">
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
