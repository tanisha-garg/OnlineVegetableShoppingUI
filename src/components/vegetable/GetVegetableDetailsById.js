import React, { useEffect, useState } from "react";
import DisplayVegetable from "./DisplayVegetable";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getVegetableDetailsOnRequestAction } from "../../redux1/vegetable/getVegetableDetailsOnRequest/getVegetableDetailsOnRequestAction";

/**
 * 
 * Get Vegetable Component
 */

export default function GetVegetableDetailsById(props) {
    /*const veg = {
      id: 1,
      name: "potato",
      category: "underground",
      type: "root",
      quantity: 20,
      price: 30,
    };*/
  

    const response=useSelector(state=>{
      return({
        vegetable:state.getVegetableDetailsOnRequest.vegetable,
        error:state.getVegetableDetailsOnRequest.error
      });
    });

    const dispatch=useDispatch();


  
    const fetchVegetablOnRender=()=>{
        const vegId=props.match.params.id;
        dispatch(getVegetableDetailsOnRequestAction(vegId));
    };
  
    useEffect(fetchVegetablOnRender,[])
  
    return (
        <div>
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

  