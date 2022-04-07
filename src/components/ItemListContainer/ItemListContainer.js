import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [show,setShow] = useState(false)

  const {categoryId} = useParams()

  useEffect(() => {

    if (categoryId) {
      getProductsByCategory(categoryId).then(items=>{
        setProducts(items)
        setShow(true)
      }).catch(err=>{
        console.log(err)
      })
    } else {
      getProducts().then((response) => {
        setProducts(response);
        setShow(true)
      })
    }
    return(()=>{
      setShow(false)
    })
  }, [categoryId]);

  if (show && products.length === 0) {
    return <h1 className="display-2">No hay productos de esta categoria</h1>
  }

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
