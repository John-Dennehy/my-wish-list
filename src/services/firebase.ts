import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {firebaseConfig} from '../config/firebaseConfig' //.gitIgnore


  

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;
const db = firebase.firestore()

export { firebase, FieldValue, db };



// export async function doesUsernameExist(username) {
//   const result = await firebase
//     .firestore()
//     .collection('users')
//     .where('username', '==', username)
//     .get();

//   return result.docs.map((user) => user.data().length > 0);
// }

