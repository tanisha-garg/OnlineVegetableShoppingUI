import React, { useState } from "react";
import DisplayVegetable from "./DisplayVegetable";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getVegetableDetailsOnRequestAction } from "../../redux1/vegetable/getVegetableDetailsOnRequest/getVegetableDetailsOnRequestAction";

/**
 * 
 * Get Vegetable Component
 */

export default function GetVegetableDetailsOnRequest() {
    /*const veg = {
      id: 1,
      name: "potato",
      category: "underground",
      type: "root",
      quantity: 20,
      price: 30,
    };*/
  
    const idRef = React.createRef();
  
    let [currentState, setNewState] = useState({
      id: undefined,
      validations:{id:undefined}
    });

    const response=useSelector(state=>{
      return({
        vegetable:state.getVegetableDetailsOnRequest.vegetable,
        error:state.getVegetableDetailsOnRequest.error
      });
    });

    const dispatch=useDispatch();

/**
 * 
 * Set ID Handler Function
 */
  
    const setIdHandler = () => {
      const idValue=idRef.current.value;
      let ValidationsMsg=validateId(idValue);
      const newValidations={...currentState.validations,validations:ValidationsMsg};
      let newState = {
        ...currentState,
        id: idValue,
        vegetable: undefined,
        errMsg: undefined,
        validations:newValidations
      };
      setNewState(newState);
    };
    
/**
 * 
 * Submit Handler Function
 */
  
    const submitHandler = (event) => {
      event.preventDefault();
      const id=idRef.current.value;
      if(currentState.validations.id){
          return;
        }
        dispatch(getVegetableDetailsOnRequestAction(id));
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
  
    return (
      <div className="container">
        <h2>Get Vegetable Details</h2>
        <form onSubmit={submitHandler} className={commonStyle.content}>
          <div className="form-group">
            <label>Enter Veg Id</label>
            <input className="form-control"
              name="id"
              type="number" placeholder="Enter veg Id"
              ref={idRef}
              onChange={() => setIdHandler()}
            />
            {currentState.validations.id ? (
              <div className={commonStyle.error}>
                {currentState.validations.id}
              </div>
            ) : (
              ""
            )}
            </div>
          <button className="btn btn-primary">Get Vegetable </button>
        </form>
        {response.vegetable ? (
          <div>
            <h2>
              <i>Vegetable Details</i>
            </h2>
            <DisplayVegetable veg={response.vegetable} />
          </div>
        ) : (
          ""
        )}
        {response.error ? (
          <div className={commonStyle.error}>
            Request was not successful
            <br />
            {response.error}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
  