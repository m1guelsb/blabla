import { collection, doc, setDoc, Timestamp } from '@firebase/firestore'
import React from 'react'

import { currentFirestore, firestore } from '../../services/firebase'

interface UsersDataProps {
  email: string | any
  name: string | undefined | null
  lastSeen?: firestore.FieldValue | undefined | null
  photoURL: string | undefined | null
}
const usersCollRef = collection(currentFirestore, 'users')

export default async function useSetUsersData({
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
