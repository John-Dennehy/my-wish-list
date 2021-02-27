import firebase from "firebase/app"
import 'firebase/firestore'
// import 'firebase/auth'
import {firebaseConfig} from './firebaseConfig' //.gitIgnore

const fireBaseApp =  firebase.initializeApp(firebaseConfig)

export const db = fireBaseApp.firestore()
