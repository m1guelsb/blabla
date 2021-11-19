import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where
} from '@firebase/firestore'
import { currentFirestore } from '../../services/firebase'
import * as EmailValidator from 'email-validator'
import { User } from '@firebase/auth'
import { getMatchChats } from './getMatchChats'

const chatsCollRef = collection(currentFirestore, 'chats')
const usersCollRef = collection(currentFirestore, 'users')

export function useCreateChat(user: User | undefined | null) {
  const { chatsData } = getMatchChats(user)

  const createChat = async () => {
    const input = prompt(
      'Enter a email adress for the user that you want to chat'
    )
    if (!input) return

    //procura usuario no banco por email
    const userQuery = query(usersCollRef, where('email', '==', input))
    const querySnapshot = await getDocs(userQuery)

    if (querySnapshot?.docs.length === 0)
      return window.alert('User not founded')

    //CHECKS IF ALREADY HAVE A CHAT WITH THIS USER(input)
    const chatUsers = chatsData?.map(i => i.chatUsers).flat()
    const checkChatExist = chatUsers
      ?.map(user => user.email)
      .find(email => email === input)
    if (checkChatExist !== undefined)
      return window.alert('You alredy have a chat with this user')

    const currentUser = {
      uid: user?.email,
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL
    }
    const receiverData = querySnapshot?.docs[0]?.data()
    const inputUser = {
      uid: receiverData?.email,
      name: receiverData?.name,
      email: receiverData?.email,
      photoURL: receiverData?.photoURL
    }

    if (EmailValidator.validate(input) && input !== user?.email) {
      const docRef = doc(chatsCollRef)
      const payload = {
        chatUsers: [currentUser, inputUser]
      }

      await setDoc(docRef, payload)
    } else {
      window.alert('You cant create a chat with yourself')
    }
  }

  return {
    createChat
  }
}
