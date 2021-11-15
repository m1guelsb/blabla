import { collection, doc, setDoc, query, where } from '@firebase/firestore'
import { currentFirestore, firestore } from '../../services/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

interface CreateChatProps {
  userEmail: string | any
  inputEmail: string | null
}

const chatsCollRef = collection(currentFirestore, 'chats')

export default async function useCreateChat({
  userEmail,
  inputEmail
}: CreateChatProps) {
  const chatUsers = `${userEmail + ' & ' + inputEmail}`
  await setDoc(doc(chatsCollRef, chatUsers), {
    users: [userEmail, inputEmail]
  })
}
