import * as app from 'firebase/app'
import * as auth from 'firebase/auth'
import * as firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAm-3Qd3RyD7Y2L9qNoZhpNt-bTVjY8dKU',
  authDomain: 'blabla-38fc9.firebaseapp.com',
  projectId: 'blabla-38fc9',
  storageBucket: 'blabla-38fc9.appspot.com',
  messagingSenderId: '356546218597',
  appId: '1:356546218597:web:8ba9aa53cae79e279ad48c'
}

const fireApp = !app.getApps().length
  ? app.initializeApp(firebaseConfig)
  : app.getApp()

const fireAuth = auth.getAuth(fireApp)
const fireFirestore = firestore.getFirestore(fireApp)

export { fireApp, auth, fireAuth, firestore, fireFirestore }
