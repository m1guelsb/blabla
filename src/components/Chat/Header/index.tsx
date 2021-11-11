import React from 'react'
import { DotsVerticalIcon, PlusCircledIcon } from '@radix-ui/react-icons'

import { HeaderContainer } from './style-header'

import Image from 'next/image'
import pepo from '../../../assets/images/pepo.gif'
import { ButtonIcon, UserAvatar } from '../../../styles/pages/chat'

interface Props {}

export const Header = (props: Props) => {
  return (
    <HeaderContainer>
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
        <PlusCircledIcon color="#6545DE" height="32" width="32" />
      </ButtonIcon>
      <ButtonIcon>
        <DotsVerticalIcon color="#6545DE" height="32" width="32" />
      </ButtonIcon>
    </HeaderContainer>
  )
}
