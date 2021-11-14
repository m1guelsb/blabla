import * as app from 'firebase/app'
import * as auth from 'firebase/auth'
import * as firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
}

const fireApp =
  app.getApps().length == 0 ? app.initializeApp(firebaseConfig) : app.getApp()
//login - logout
const fireAuth = auth.getAuth(fireApp)
const googleProvider = new auth.GoogleAuthProvider()
const signInWithGooglePopup = () =>
  auth.signInWithPopup(fireAuth, googleProvider)
const logout = () => auth.signOut(fireAuth)

const currentFirestore = firestore.getFirestore(fireApp)

export { fireAuth, logout, signInWithGooglePopup, currentFirestore, firestore }
