import { getApps, initializeApp, getApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
}

const fireApp = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp()
//login - logout
const fireAuth = getAuth(fireApp)
const googleProvider = new GoogleAuthProvider()
const signInWithGooglePopup = () => signInWithPopup(fireAuth, googleProvider)
const logout = () => signOut(fireAuth)

const currentFirestore = getFirestore(fireApp)

export { fireAuth, logout, signInWithGooglePopup, currentFirestore }
