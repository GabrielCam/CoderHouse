import React from 'react'

const ItemDetail = (prod) => {
  
  return (
    
    
  <div className='container'>
  <div className="row">
    <div className="col-12">
      <h1 style={{textAlign:'center',marginTop:"1em",marginBottom:"1em"}}>{prod.name}</h1>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-6 mb-4">
        <div className="product-img">
          <img src={prod.img} alt="producto" className="img-fluid"/>
        </div>
    </div>
    <div className="col-lg-6">
      <div className="form-horizontal bg-light p-4">
          <div className="form-group row">
            <label className="col-sm-3 col-md-3 form-control-label nopaddingtop">Precio:</label>
            <div className="col-sm-8 col-md-9">
              <span className="product-form-price">us$ {prod.price}</span>
            </div>
          </div>
          
          <div className="form-group row">
            <label className="col-sm-3 col-md-3 form-control-label">Stock:</label>
            <div className="col-sm-8 col-md-9">
              <span>{prod.stock}</span>
              
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-md-3 form-control-label">Descripcion:</label>
            <div className="col-sm-8 col-md-9 description">
              <p>{prod.description}</p>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-md-3 form-control-label">Categoria:</label>
            <div className="col-sm-9 col-md-9">
              <p>{prod.category}</p>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-9 col-md-9">
              <button className='btn btn-primary'>
                Comprar ahora!
              </button>
              
            </div>
          </div>
          

          




      </div>
      

    </div>
  </div>

  
  </div>


  )
}

export default ItemDetail
