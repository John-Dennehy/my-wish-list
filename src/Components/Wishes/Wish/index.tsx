import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { AiOutlineAmazon } from 'react-icons/ai'
import './style.scss'

export interface WishProps {
  name: string
  description: string
  url?: string
}

const Wish: React.FC<WishProps> = ({ name, description, url }) => {
  return (
    <li className="wish">
      <div className="wish--content">
        <span className="wish--name"> {name} </span>
        <span className="wish--description">{description}</span>

      </div>
      <span className="wish--buttons">
        {url && <a href={url}><AiOutlineAmazon /></a>}
        <button>  <IoCloseCircleOutline /> </button>
      </span>
    </li>
  )
}

export default Wish

