import React, { useState  } from "react";

const ItemCount = ({stock,onAdd}) => {
  const [count, setCount] = useState(1);


  const increment = () => {
    if(stock>count){
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if(count>1){
      setCount(count - 1);
    }
  };
  
  return (
    <>
      <div className="" style={{ width: "13rem" }}>
        <div className="" >
          
          <ul className="list-group list-group-flush">
            <li className="d-flex justify-content-center">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  onClick={decrement}
                  className="btn btn-outline-primary"
                >
                  -
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary disabled border-0 bg-dark"
                >
                    <span className="display-6" style={{color:"#d9f701",fontWeight:"bolder"}}>
                       {count}
                    </span> 
                </button>
                <button
                  type="button"
                  onClick={increment}
                  className="btn btn-outline-primary"
                >
                  +
                </button>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-center">
              <button
                type="button"
                onClick={()=>{onAdd(count)}}
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
