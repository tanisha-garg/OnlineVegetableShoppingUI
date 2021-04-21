import React, { useState } from "react";
import DisplayVegetable from "./DisplayVegetable";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";

export default function UpdateVegetableQuantity() {
    const veg = {
        id: 1,
        name: "potato",
        category: "underground",
        type: "root",
        quantity: 20,
        price: 50,
      };
    
      const idRef = React.createRef();
      const quantityRef=React.createRef();
    
      let [state, setNewState] = useState({
        id: undefined,
        price:undefined,
        vegetable: veg,
        errMsg: undefined,
        formStatus: "",
        validations:{id:undefined,price:undefined}
      });
    
      const changeHandler = (ref) => {
        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        let validationMsg;
        if(ref===idRef){
            validationMsg=validateId(fieldValue)
        }
        if(ref===quantityRef){
            validationMsg=validateQuantity(fieldValue);
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
       * validating quantity is +ve
       */
        const validateQuantity = (quantity) => {
            if (quantity< 0) {
              return validationMessage.quantityLessThanZero;
            }
            return undefined;
          };
    
      const submitHandler = (event) => {
        event.preventDefault();
        setNewState({ ...state, formStatus: "vegetable updated successfully" });
      };
    
      return (
        <div>
          <form onSubmit={(event) => submitHandler(event)}>
            <div>
              <label>Enter veg id</label>
              <input
                name="id" type="number"
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
              <label>Enter Quantity</label>
              <input type="number"
                name="quantity"
                ref={quantityRef}
                onChange={() => changeHandler(quantityRef)}
              />
              {state.validations.quantity?(
                <div className={commonStyle.error}>
                  {state.validations.quantity}
                  </div>
              ):('')}
            </div>
            <button type="submit">Update Vegetable</button>
          </form>
          <h2>{state.formStatus}</h2>
          {state.vegetable ? (
            <div>
              <DisplayVegetable veg={state.vegetable} />
            </div>
          ) : (
            ""
          )}
          {state.errMsg ? (
            <div className={commonStyle.console.error}>
              Request was not successful <br />
              {state.errMsg}
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }