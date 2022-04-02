import React, { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [show,setShow] = useState(false)
 
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
      setShow(true)
    });
  }, []);
  // console.log(products)
  return (
    <div className="container">
      <p className="display-6">{props.greeting}</p>
        {show?<ItemList items={products} />:<div className="d-flex justify-content-center mt-5">
  <div className="spinner-border" style={{width:"4rem",height:"4rem"}} role="status">
    
  </div>
</div>}
    </div>
  );
};

export default ItemListContainer;
