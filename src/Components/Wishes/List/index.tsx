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
          name={wish.name}
          description={wish.description}
          url={wish.url}
        />
      ))}
    </ul>
  )
}

export default WishList
