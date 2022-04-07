import React from "react";

const ItemDetail = (prod) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1
          className="display-5"
            style={{
              textAlign: "center",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            {prod.name}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="product-img">
            <img src={prod.img} alt="producto" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-horizontal bg-light p-3 border rounded">
            <div className="bg-white p-3 ">

            <div className="form-group row">
              <label className="col form-control-label nopaddingtop">
                Precio:
              </label>
              <div className="col">
                <span className="product-form-price">us$ {prod.price}</span>
              </div>
            </div>

            <div className="form-group row">
              <label className="col form-control-label">
                Stock:
              </label>
              <div className="col">
                <span>{prod.stock}</span>
              </div>
            </div>

            <div className="form-group row">
              <label className="col form-control-label">
                Descripcion:
              </label>
              <div className="col description">
                <p>{prod.description}</p>
              </div>
            </div>

            <div className="form-group row">
              <label className="col form-control-label">
                Categoria:
              </label>
              <div className="col">
                <p>{prod.categoryId}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <label htmlFor="clasif">Clasificacion</label>
              </div>
              <div className="col">
              <p className="clasificacion" name='clasif'>
                <input id="radio1" type="radio" name="estrellas" value="5" />
                <label className="lbl" htmlFor="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4" />
                <label className="lbl" htmlFor="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3" />
                <label className="lbl" htmlFor="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2" />
                <label className="lbl" htmlFor="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1" />
                <label className="lbl" htmlFor="radio5">★</label>
              </p>
              </div>
              
              
            </div>
            <div className="form-group row">
              <div className="col-sm-9 col-md-9">
                <button className="btn btn-primary">Comprar ahora!</button>
              </div>
            </div>
          </div>
        </div>
            </div>
      </div>
    </div>
  );
};

export default ItemDetail;
