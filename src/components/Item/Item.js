import React from 'react'

const Item = ({item}) => {
  return (
    <div className="card m-1" style={{width: "18rem"}}>
        <img src={item.img} className="card-img-top" alt="producto"/>
        <div className="card-body">
            <h5 className="card-title">{item.price}</h5>
            <p className="card-text">{item.name}</p>
            <p className="card-text">{item.description}</p>
            <a href="/#" className="btn btn-primary">Ver más</a>
        </div>
    </div>
  )
}

export default Item