import React, { MouseEvent, ChangeEvent, useState, useEffect } from 'react';
import './style/App.css'
import WishList from './Components/Wishes/List';
import { db } from './config/firebase';
import { WishProps } from './Components/Wishes/Wish';
import firebase from 'firebase/app';


function App() {

  const [wishes, setWishes] = useState<WishProps[]>([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    db.collection('wishes').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      const wishDoc = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })) as WishProps[]
      setWishes(wishDoc)
    })
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
