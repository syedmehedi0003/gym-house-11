import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useServices from "../../hooks/useServices";
import "./Service.css";

const Service = ({ service, services, setServices }) => {
  const { _id, name, img, amount, quantity, supplier, description } = service;

  // const [services, setServices] = useServices();
  // const navigate = useNavigate();
  // // const navigateToServiceDetail = id => {

  // //     navigate(`/service/ ${id}. ${name}`)

  // // }
  const id = _id;

  const handleDelivered = () => {
    const url = `https://gym-server.onrender.com/deliver/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify(updateItem)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    setServices(
      services.map((service) =>
        service._id === id
          ? { ...service, quantity: service.quantity - 1 }
          : service
      )
    );
  };

  return (
    <div className="service p-1 mb-3 card shadow-lg p-3 mb-5 bg-body">
      <div className="w-100 d-flex justify-content-center align-items-center">
        <img className="w-50 " src={img} alt="" />
      </div>

      <div className="service-text card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <b>Price:</b> {amount}
        </p>
        <p>
          <b>Quantity: </b>
          {quantity}
        </p>
        <p>
          <b>Brand:</b> {supplier}
        </p>
        <p>
          <small className="card-text">{description}</small>{" "}
        </p>
        <Link className="btn btn-info mx-2" to={`/updateproduct/${_id}`}>
          Update{" "}
        </Link>
        <button className="btn btn-secondary" onClick={() => handleDelivered()}>
          Delivered{" "}
        </button>
      </div>
    </div>
  );
};

export default Service;
