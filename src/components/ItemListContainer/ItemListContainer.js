import React, { useEffect, useState } from "react";
// import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDB } from "../../services/firebase";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(
          collection(firestoreDB, "products"),
          where("category", "==", categoryId)
        )
      : collection(firestoreDB, "products");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setShow(true);
      });

    return () => {
      setShow(false);
    };
  }, [categoryId]);

  if (show && products.length === 0) {
    return <h1 className="display-2">No hay productos de esta categoria</h1>;
  }

  return (
    <div className="container">
      <p className="display-6">{props.greeting}</p>
      {show ? (
          <ItemList items={products} />
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <div
            className="spinner-border"
            style={{ width: "4rem", height: "4rem" }}
            role="status"
          ></div>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
