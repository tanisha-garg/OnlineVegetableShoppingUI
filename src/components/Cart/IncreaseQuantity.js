import { useState } from "react";
import { increaseQuantityRequest } from "../../Service/CartService";
import DisplayCart from "./DisplayCart";

const IncreaseQuantity = () => {
  const vegList = [
    { vegId: 1, vegName: "Potato" },
    { vegId: 2, vegName: "brinjal" },
    { vegId: 3, vegName: "cabbage" },
  ];
  const cart = {
    customerId: "1",
    firstName: "Sameer",
    items: [
      {
        Id: "4",
        Name: "onion",
        quantity:"10",
        type:"fresh",
        category:"underground",
        price:"20",
      },
      {
          id:"5",
          name:"brinjal",
          quantity:"11",
          type:"fresh",
          category:"GreenVegetable",
          price:"29",
      },
    ],
  };

  const [state, setState] = useState({ itemId: "", quantity: "" });

  const response = { cart: undefined, error: "" };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state });
  };

  return (
    <div className="container">
      <h2>IncreaseQuantity of Item</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Item Id</label>
          <select
            className="form-control"
            name="itemId"
            onChange={onHandleChange}
          >
            <option disabled selected>
              select Item
            </option>
            {vegList.map((veg) => (
              <option key={veg.vegId} value={veg.vegId}>
                {veg.vegName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            className="form-control"
            onChange={onHandleChange}
            min="0"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {response.cart ? <DisplayCart cart={response.cart} /> : ""}
      {response.error ? response.error : ""}
    </div>
  );
};

export default IncreaseQuantity;