import {
  collection,
  DocumentData,
  getDocs,
  onSnapshot,
  query,
  where
} from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { currentFirestore } from '../../services/firebase'
import { User } from '@firebase/auth'

export const getMatchChats = (user: User | null | undefined) => {
  const [chatsData, setChatsData] = useState<DocumentData[]>()

  const chatsCollRef = collection(currentFirestore, 'chats')

  useEffect(() => {
    const getChats = async () => {
      if (user) {
        const chatsQuery = query(
          chatsCollRef,
          where('chatUsers', 'array-contains', {
            email: user.email,
            name: user.displayName,
            photoURL: user.photoURL,
            uid: user.email
          })
        )

        const unsub = onSnapshot(chatsQuery, doc => {
          const data = doc.docs.map(chat => ({ ...chat.data(), id: chat.id }))
          setChatsData(data)
        })
      }
    }
    getChats()
  }, [user])

  return {
    chatsData
  }
}
