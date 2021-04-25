import React, { useState } from "react";
import DisplayVegetable from "./DisplayVegetable";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import {updateVegetablePrice} from "../../redux/vegetable/updateVegetablePrice/updateVegetablePriceAction"


/**
 * 
 * Update Vegetable Price Component
 */

export default function UpdateVegetablePrice() {
  /*const veg = {
    id: 1,
    name: "potato",
    category: "underground",
    type: "root",
    quantity: 20,
    price: 50,
  };*/

  const idRef = React.createRef();
  const priceRef=React.createRef();

  let [currentState, setNewState] = useState({
    id: undefined,
    price:undefined,
    validations:{id:undefined,price:undefined}
  });

  const response=useSelector(state=>{
    return({
      vegetable:state.updateVegetablePrice.vegetable,
      error:state.updateVegetablePrice.error
    });
  });

  const dispatch=useDispatch();

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
    const newValidations={...currentState.validations,[fieldName]:validationMsg};
    const newState = {
      ...currentState,
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
    console.log("inside submit Handler of update price");
    event.preventDefault();
    if(currentState.validations.id || currentState.validations.price){
      return ;
    }
    let data={...currentState};
    dispatch(updateVegetablePrice(data));
  };

  return (
    <div className="container">
       <h2>Update Vegetable Price</h2>
      <form onSubmit={submitHandler} className={commonStyle.content}>
        <div className="form-group">
          <label>Enter veg id</label>
          <input className="form-control"
            name="id" type="number" placeholder="Enter veg Id" required
            ref={idRef}
            onChange={() => changeHandler(idRef)}
          />
          {currentState.validations.id?(
            <div className={commonStyle.error}>
              {currentState.validations.id}
              </div>
          ):('')}
        </div>
        <div className="form-group">
          <label>Enter price</label>
          <input type="number" className="form-control"
            name="price" placeholder="Enter price"  required
            ref={priceRef}
            onChange={() => changeHandler(priceRef)}
          />
          {currentState.validations.price?(
            <div className={commonStyle.error}>
              {currentState.validations.price}
              </div>
          ):('')}
        </div>
        <button  className="btn btn-primary">Update Vegetable</button>
      </form>
      <h2>{currentState.formStatus}</h2>
      {response.vegetable ? (
        <div>
          <DisplayVegetable veg={response.vegetable} />
        </div>
      ) : (
        ""
      )}
      {response.error ? (
        <div className={commonStyle.error}>
          Request was not successful <br />
          {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}