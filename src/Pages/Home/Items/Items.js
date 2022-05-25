import React, { useEffect, useState } from "react";
import Item from "./Item";

const Items = () => {
  const [products, setProducts] = useState()
  useEffect(()=>{
  fetch(`https://fathomless-depths-99133.herokuapp.com/product?count=6`)
    .then(res =>res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <div className="container py-5">
      <h1 className="fw-bolder text-center color-hotpink shadow-lg p-2 rounded ">Inventory Items</h1>

      <div className="mt-md-5 mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-md-5 g-4">
          {
            products?.map(product => <Item 
            key={product._id}
            data={product}
            ></Item>)
          }
        </div>
      </div>
    </div>
  );
};

export default Items;
