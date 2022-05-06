import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className="card item" style={{width: "15rem",border:"1px solid #d9f701"}}>
        <Link to={`/item/${item.id}`}>
        <img src={item.img} className="card-img-top " style={{minWidth:"214px",minHeight:"200px",maxWidth:"214px",maxHeight:"200px"}} alt="producto"/>
        </Link>
      
        <div className="card-body">
            <h5 className="card-title">${item.price}</h5>
            <p className="card-text m-0 p">{item.name}</p>
            <p className="card-text m-0 p">{item.description}</p>
            
                <Link to={`/item/${item.id}`} className="btn btn-outline-primary d-flex justify-content-center" style={{borderRadius: ".7em 0 .7em 0",
    border: "1px solid blue"}}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item