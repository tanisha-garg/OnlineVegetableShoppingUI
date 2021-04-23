import  React,{ useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetails";
import validationMessage from './validationMessage';
import commonStyle from "./commonStyle.module.css";

export default function UpdateCustomerDetails(){

    const customer = {
    customerId: 4,
    name: "Ayesha",
    mobileNumber: "987654321",
    emailId: "abc@gmail.com",
    flatNo: "1",
    buildingName: "abc enclave",
    area: "lakshmi nagar",
    city: "mumbai",
    state: "maharashtra",
    pincode: "123456",
  };


const idRef = React.createRef();
const mobileNumberRef = React.createRef();

const initialState = {
    idRef : undefined,
    mobileNumberRef : undefined,
    formstatus : "",
    validations : {customerId : undefined, mobileNumber:undefined}
};

const response = {customer: customer, errMsg: undefined};
const [state, setNewState] = useState(initialState);

const submitHandler = (event) => {
  event.preventDefault();
  setNewState({ ...state, formstatus: "Form is submitted Successfully" });
};

const changeHandler = (ref) => {
    const field = ref.current;
    const fieldName = field.name;
    const fieldValue = field.value;
    let validationMsg;
    if (ref === idRef) {
      validationMsg = validateCustomerId(fieldValue);
    }
    if (ref === mobileNumberRef) {
        validationMsg = validateMobileNumber(fieldValue);
    }

    const newValidations = { ...state.validations, [fieldName]: validationMsg };
    const newState = {
      ...state,
      [fieldName]: fieldValue,
      customer: undefined,
      errMsg: undefined,
      validations: newValidations
    };

    setNewState(newState);
   
  };
  /*
   * validation method for customer id
   */
  const validateCustomerId = (customerId) => {
    if (customerId < 1) {
      return validationMessage.idSmallerThanOne;
    }
    return undefined;
  }
  /*
   * validation method for mobile number
   */

  const validateMobileNumber = (mobileNumber) => {
    if (mobileNumber.length < 10 || mobileNumber.length > 10) {
      return validationMessage.mobileNumberSmallerThanLengthTen;
    }
    return undefined;
  };
  
  return(
    <div>
    <h3> Change Customer Details</h3>
    <br/>
  <form onSubmit = {(event) => submitHandler(event)}>
  
  <div className="form-group">
    <label>Id</label>
    <input name="id" type = "number"  ref={idRef} onChange={()=> changeHandler(idRef) }className="form-control" /><br/>
    </div>
  
  
  <div className="form-group">
  <label>New  Mobile Number</label>
  <input name="mobileNumber" type = "text" ref={mobileNumberRef} onChange={()=> changeHandler(mobileNumberRef) }className="form-control" />
  
  {state.validations.mobileNumberSmallerThanLengthTen ? (
    <div className={commonStyle.error}>
      {state.validations.mobileNumberSmallerThanLengthTen} 
    </div>
  ) : (
    ""
  )}
</div>
<button className= "btn btn-primary" >Change</button>
</form>
<h2>{state.formstatus}</h2>
<br />
{response.customer ? (
  <div>
    <h3>Customer Mobile Number updated Successfully</h3>
    <br/>
    <DisplayCustomerDetails customer={ response.customer} />
  </div>
) : (
  ""
)}
{response.errMsg ? (
  <div>
    <h3> Customer Mobile Number not updated Successfully</h3>
    <br />
    {response.errMsg}
  </div>
) : (
  ""
)}
   </div>
 );
}