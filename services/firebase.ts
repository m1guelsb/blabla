import * as app from 'firebase/app'
import * as auth from 'firebase/auth'
import * as firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

const fireApp = !app.getApps().length
  ? app.initializeApp(firebaseConfig)
  : app.getApp()

const fireAuth = auth.getAuth(fireApp)
const fireFirestore = firestore.getFirestore(fireApp)

export { fireApp, auth, fireAuth, firestore, fireFirestore }
