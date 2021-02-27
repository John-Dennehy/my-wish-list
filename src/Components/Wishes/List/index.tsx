import React from 'react'
import Wish from '../Wish'
import { WishProps } from '../Wish/index';

interface WishListProps {
  wishes: Array<WishProps>
}

const WishList: React.FC<WishListProps> = ({ wishes }) => {
  return (
    <ul>
      {wishes.map(wish => (
        <Wish
          id={wish.id}
          data={wish.data}
        />
      ))}
    </ul>
  )
}

export default WishList
