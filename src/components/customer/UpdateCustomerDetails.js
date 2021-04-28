import  React,{ useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetails";
import validationMessage from './customerValidationMessage';
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerThunk } from "../../redux/updateCustomer/updateCustomerAction";

const UpdateCustomerDetails=()=>{
  
    const dispatch = useDispatch();
    const response = useSelector((state) => {
      return {
        customer: state.updateCustomer.customer,
        error: state.updateCustomer.error,
      };
    });

const idRef = React.createRef();
const nameRef = React.createRef();
const mobileNumberRef = React.createRef();
const emailIdRef = React.createRef();

const initialState = {
    customerId : undefined,
    name: undefined,
    mobileNumber : undefined,
    emailId:undefined,
    //formstatus : "",
    validations : {customerId : undefined, mobileNumber:undefined}
};

//const response = {customer: customer, errMsg: undefined};
const [state, setNewState] = useState(initialState);

const submitHandler = (event) => {
  event.preventDefault();
  dispatch(updateCustomerThunk(state));
  //setNewState({ ...state, formstatus: "Form is submitted Successfully" });
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
      //customer: undefined,
      //errMsg: undefined,
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
    <input name="customerId" type = "number"  ref={idRef} onChange={()=> changeHandler(idRef) }className="form-control" /><br/>
    </div>

    <div className="form-group">
    <label>Name</label>
    <input name="name"   ref={nameRef} onChange={()=> changeHandler(nameRef) }className="form-control" /><br/>
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
<div className="form-group">
    <label>Email Id:</label>
    <input name="emailId"  type="email" ref={emailIdRef} onChange={()=> changeHandler(emailIdRef) }className="form-control" /><br/>
    </div>

<button className= "btn btn-primary" >Change</button>
</form>
<h2>{state.formstatus}</h2>
<br />
{response.customer ? (
        <DisplayCustomerDetails customer={response.customer} />
      ) : (
        ""
      )}
      {response.error ? response.error : ""}
   </div>
 );
}

export default UpdateCustomerDetails;