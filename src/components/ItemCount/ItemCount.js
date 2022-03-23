import React, { useState, useEffect  } from "react";

const ItemCount = ({stk,initial,onAdd}) => {
  const [count, setCount] = useState(initial);
  const [stock, setStock] = useState(stk);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };
  useEffect(() => {
    console.log("stock actual",stock);
  }, [stock]);

  return (
    <>
      <div className="col-3 offset-1">
        <div className="card" style={{ width: "13rem" }}>
          <div className="card-header">Samsung S21</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-center">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  onClick={count > 0 ? decrement : null}
                  className="btn btn-outline-primary"
                >
                  -
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary disabled"
                >
                  {count}
                </button>
                <button
                  type="button"
                  onClick={
                    count <= stock
                      ? increment
                      : alert("La cantidad ingresada supera al stock actual") 
                  }
                  className="btn btn-outline-primary"
                >
                  +
                </button>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-center">
              <button
                type="button"
                onClick={() => {
                  stock >= count
                    ? setStock(onAdd(stock,count), setCount(0))
                    : alert("no se puede agregar");
                }}
                className="btn btn-outline-primary"
              >
                Agregar al carrito
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
