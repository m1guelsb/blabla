import React from 'react'
import {
  MainChatScreen,
  MainChatHeader,
  Messages,
  SenderMessage,
  UserMessage,
  SenderMessageContainer,
  UserMessageContainer,
  SendMessageInputContainer
} from './style-MainChat'
import Image from 'next/image'

import doge from '../../../assets/images/doge.png'
import { UserAvatar } from '../../../styles/pages/chat'
import { Input } from '../../Input'
import { Button } from '../../Button'

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
        <div id="name-active">
          <span className="chat-name">Doge</span>
          <p className="last-active">Last Seen 3 hours ago</p>
        </div>
      </MainChatHeader>
      <MainChatScreen>
        <Messages>
          <SenderMessageContainer>
            <SenderMessage>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                nobis vitae officiis aliquam fugit quasi atque aliquid suscipit
                praesentium? Nesciunt voluptas laborum molestiae libero ducimus
                ipsa beatae, dolorum incidunt nihil?
              </p>
            </SenderMessage>
          </SenderMessageContainer>
          <UserMessageContainer>
            <UserMessage>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate a vel, sunt ipsum aspernatur numquam sit ducimus vero
                iste debitis odio ipsa sint dolorum quam tenetur officia
                voluptatem laboriosam dolorem.
              </p>
            </UserMessage>
          </UserMessageContainer>
          <UserMessageContainer>
            <UserMessage>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam laborum ea aliquid eius, iusto voluptatem sapiente
                molestiae beatae, voluptas provident molestias cumque? Deserunt
                voluptatem voluptates sequi quibusdam quas ipsum non officia
                commodi laudantium, fugit ullam voluptate vel ut pariatur
                tenetur maiores mollitia ipsa perferendis! Aspernatur,
                cupiditate qui ipsa animi incidunt nihil molestiae minima
                adipisci fugit?
              </p>
            </UserMessage>
          </UserMessageContainer>

          <SenderMessageContainer>
            <SenderMessage>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo architecto aut ex quia impedit ipsum numquam odio
                animi magni magnam praesentium inventore aperiam quidem, tempore
                tenetur voluptatem eligendi assumenda tempora ut in nobis maxime
                corporis. Ipsam dolor, sed eveniet a magnam saepe, delectus
                quidem accusamus totam aliquid sapiente magni! Modi vel quaerat
                accusamus totam velit beatae nulla placeat, similique impedit
                maiores provident quis, est cum quam obcaecati dicta? Totam
                laudantium iste doloremque nostrum autem delectus quidem
                necessitatibus sint cumque, ratione doloribus nihil esse
                eligendi veniam consequuntur dicta cum voluptatibus saepe!
              </p>
            </SenderMessage>
          </SenderMessageContainer>

          <UserMessageContainer>
            <UserMessage>
              <p>oin</p>
            </UserMessage>
          </UserMessageContainer>
        </Messages>

        <SendMessageInputContainer>
          <Input
            className="send-message"
            name="send message input"
            placeholder="Write a message..."
          />
          <Button>Send</Button>
        </SendMessageInputContainer>
      </MainChatScreen>
    </>
  )
}
