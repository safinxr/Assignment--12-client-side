import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ data }) => {
  const { img, name, price, description, quantity, supplier, _id } = data;
  const navigate = useNavigate()

  const updateBtn = (id) => {
    navigate(`/update/${id}`)
  };

  return (
    <div className="col">
      <div className="card h-100 border-0 shadow-lg hover-effect">
        <img src={img} className="card-img-top w-50 my-4 mx-auto" alt="..." />
        <div className="card-body py-1">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-justify">
            <small>{description}</small>
          </p>
          <div>
            <p className="mb-1">Price: ${price}</p>
            <p className="mb-1">Quantity: {quantity}</p>
            <p className="mb-1">Supplier: {supplier}</p>
          </div>
        </div>
        <div className="card-footer bg-white border-top-0 pb-4">
          <button
            onClick={() => updateBtn(_id)}
            className="btn btn-info mx-auto w-100"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
