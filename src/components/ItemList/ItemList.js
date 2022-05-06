import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {

  return (
    <div className='itemList'>
        {
            items.map(prod=><Item key={prod.id} item={prod}/>)
        }
    </div>
  )
}

export default ItemList