import { collection, doc, setDoc } from '@firebase/firestore'
import { currentFirestore } from '../../services/firebase'

import { FieldValue } from 'firebase/firestore'

interface UsersDataProps {
  email: string | any
  name: string | undefined | null
  lastSeen?: FieldValue
  photoURL: string | undefined | null
}
const usersCollRef = collection(currentFirestore, 'users')

export async function useCreateUser({
  email,
  name,
  lastSeen,
  photoURL
}: UsersDataProps) {
  await setDoc(
    doc(usersCollRef, email),
    {
      name: name,
      email: email,
      lastSeen: lastSeen,
      photoURL: photoURL
    },
    { merge: true }
  )
}
