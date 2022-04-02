import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
console.log(items)

  return (
    <div className='row row-cols-4'>
        {
            items.map(prod=><Item key={prod.id} className="col" item={prod}/>)
        }
        
    </div>
  )
}

export default ItemList