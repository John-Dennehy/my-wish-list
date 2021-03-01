import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { AiOutlineAmazon } from 'react-icons/ai'
import './style.scss'
import { db } from '../../../config/firebase';

export interface WishProps {
  id: string
  data: {
    name: string
    description: string
    url?: string
  }
}

const Wish: React.FC<WishProps> = ({ id, data }) => {



  return (
    <li className="wish">
      <div className="wish--content">
        <span className="wish--name"> {data.name} </span>
        <span className="wish--description">{data.description}</span>

      </div>
      <span className="wish--buttons">
        {data.url && <a href={data.url}><AiOutlineAmazon /></a>}
        <button onClick={event => db.collection('wishes').doc(id).delete()}>  <IoCloseCircleOutline /> </button>
      </span>
    </li>
  )
}

export default Wish

