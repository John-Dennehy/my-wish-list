import React, { MouseEvent, ChangeEvent, useState, useEffect } from 'react';
import './styles/App.css'
import WishList from './components/Wishes/List';
import { db } from './config/firebase';
import { WishProps } from './components/Wishes/Wish';
import firebase from 'firebase/app';


function App() {

  const [wishes, setWishes] = useState<WishProps[]>([])
  const [inputValue, setInputValue] = useState('')
  const wishCollection = db.collection('wishes').orderBy('timestamp', 'desc')

  useEffect(() => {
    wishCollection.onSnapshot(snapshot => {
        const wishDoc = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })) as WishProps[]
        setWishes(wishDoc)
      }
      )

  }, [])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  const addWish = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()

    db.collection('wishes').add({
      name: inputValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInputValue('')
  }

  return (
    <div className="App">
      <h1>My Wish List</h1>
      <form>
        <input value={inputValue} onChange={handleInputChange} />
        <button type='submit' onClick={addWish}>Add New Wish</button>
      </form>
      <WishList wishes={wishes} />
    </div>
  );
}

export default App;
