import React, { useState } from "react";
import DisplayVegetable from "./DisplayVegetable";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";

/**
 * 
 * Update Vegetable Price Component
 */

export default function UpdateVegetablePrice() {
  const veg = {
    id: 1,
    name: "potato",
    category: "underground",
    type: "root",
    quantity: 20,
    price: 50,
  };

  const idRef = React.createRef();
  const priceRef=React.createRef();

  let [state, setNewState] = useState({
    id: undefined,
    price:undefined,
    formStatus: "",
    validations:{id:undefined,price:undefined}
  });

  const response={ vegetable: undefined,
    errMsg: undefined}
  /**
   * 
   * Change Handler Function
   */

  const changeHandler = (ref) => {
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    let validationMsg;
    if(ref===idRef){
        validationMsg=validateId(fieldValue)
    }
    if(ref===priceRef){
        validationMsg=validatePrice(fieldValue);
      }
    const newValidations={...state.validations,[fieldName]:validationMsg};
    const newState = {
      ...state,
      [fieldName]: fieldValue,
      vegetable: undefined,
      errMsg: undefined,
      validations:newValidations,
    };
    setNewState(newState);
  };
  /**
 *  validating id is positive
 */
   const validateId = (id) => {
    if (id<0) {
      return validationMessage.idSmallerThanZero;
    }
    return undefined;
  }
   /**
   * validating price is +ve
   */
    const validatePrice = (price) => {
        if (price < 0) {
          return validationMessage.priceSmallThanZero
        }
        return undefined;
      };

      /**
       * 
       * submit Handler Function 
       */

  const submitHandler = (event) => {
    event.preventDefault();
    setNewState({ ...state, formStatus: "vegetable updated successfully" });
  };

  return (
    <div>
       <h2>Update Vegetable Price</h2>
      <form onSubmit={(event) => submitHandler(event)}>
        <div>
          <label>Enter veg id</label>
          <input
            name="id" type="number" placeholder="Enter veg Id" required
            ref={idRef}
            onChange={() => changeHandler(idRef)}
          />
          {state.validations.id?(
            <div className={commonStyle.error}>
              {state.validations.id}
              </div>
          ):('')}
        </div>
        <div>
          <label>Enter price</label>
          <input type="number"
            name="price" placeholder="Enter price"  required
            ref={priceRef}
            onChange={() => changeHandler(priceRef)}
          />
          {state.validations.price?(
            <div className={commonStyle.error}>
              {state.validations.price}
              </div>
          ):('')}
        </div>
        <button type="submit">Update Vegetable</button>
      </form>
      <h2>{state.formStatus}</h2>
      {response.vegetable ? (
        <div>
          <DisplayVegetable veg={response.vegetable} />
        </div>
      ) : (
        ""
      )}
      {response.errMsg ? (
        <div className={commonStyle.error}>
          Request was not successful <br />
          {state.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}