import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className="card m-1 pt-2" style={{width: "15rem",border:"1px solid #d9f701"}}>
        <img src={item.img} className="card-img-top" style={{width:"214px",height:"142px"}} alt="producto"/>
        <div className="card-body">
            <h5 className="card-title">${item.price}</h5>
            <p className="card-text">{item.name}</p>
            <p className="card-text">{item.description}</p>
            
                <Link to={`/item/${item.id}`} className="btn btn-outline-primary d-flex justify-content-center" style={{borderRadius: ".7em 0 .7em 0",
    border: "1px solid blue"}}>Ver más</Link>

            
        </div>
    </div>
  )
}

export default Item