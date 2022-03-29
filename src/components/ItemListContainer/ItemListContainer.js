import React, { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  // console.log(products)
  return (
    <>
      <p className="display-6">{props.greeting}</p>

      <div className="row row-cols-2">
        <ItemList items={products} />
      </div>
      
    </>
  );
};

export default ItemListContainer;
