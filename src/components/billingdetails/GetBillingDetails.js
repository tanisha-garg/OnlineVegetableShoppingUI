import React, { useState } from "react";
import DisplayBillingDetails from "./DisplayBillingDetails";

function GetBillingDetails(){

    let bill = {
        billingId: 1,
        transactionMode: "COD",
        transactionDate: "2021-04-20",
        transactionStatus: "Succesful",
        flatNo: "21",
        buildingName: "ABC",
        area: "Sector 2",
        city: "Chandigarh",
        state: "punjab",
        pincode: "123456",
    };
    let errMsg = "Cannot retrieve Bill Details Response";

    const billIdRef = React.createRef();

    const initialState = {billId:-1, bill:undefined, errMsg:undefined};

    let [state, setNewState] = useState(initialState);

    const setIdHandler = () => {
        const field = billIdRef.current;
        const fieldValue = field.value;
        const newState = {...state, billingId:fieldValue, bill:undefined, errMsg:undefined};
        setNewState(newState);
    } 

    const submitHandler = (event) => {
        event.preventDefault();
        const newState = {...state, bill:bill, errMsg:undefined};
        setNewState(newState);
    }

    return(
        <div>
            <h3>Fetch bill by Id</h3>
            <form onSubmit={submitHandler}>
                <label>Enter Id: </label>
                <input type="text" name="billingId" ref={billIdRef} onChange={()=>setIdHandler()} /><br />
                <button>Submit</button>
            </form>
            <span>Id is {state.billingId} </span>
            {state.bill ? (
                <div>
                    
      <h3>Billing Details Response</h3>
                    <DisplayBillingDetails bill={bill} />
                </div>
            ) : ("") }
            {state.errMsg ? (
                <div>
                    Request was not successsful <br /> {state.errMsg}
                </div>
            ) : ("")}
        </div>
    );

}

export default GetBillingDetails;