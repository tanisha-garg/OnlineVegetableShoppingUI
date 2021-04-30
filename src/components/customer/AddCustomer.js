import React, { useState } from "react";
import validationMessage from "./customerValidationMessage";
import commonStyle from "./commonStyle.module.css";
import DisplayCustomerDetails from "./DisplayCustomerDetails";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerThunk } from "../../redux/addCustomer/addCustomerAction";

/**
 * Component adds a customer and
 *  returns the details of customer when the data is  
 * accepted from a form
*/
const AddCustomer = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      customer: state.addCustomer.customer,
      error: state.addCustomer.error,
    };
  });

  //Creating Refs for fields
  const nameRef = React.createRef();
  const mobileNumberRef = React.createRef();
  const emailIdRef = React.createRef();
  const flatNoRef = React.createRef();
  const buildingNameRef = React.createRef();
  const areaRef = React.createRef();
  const cityRef = React.createRef();
  const stateRef = React.createRef();
  const pincodeRef = React.createRef();

  // defining the initial state
  const initialState = {
    name: undefined,
    mobileNumber: undefined,
    emailId: undefined,
    flatNo: undefined,
    buildingName: undefined,
    area: undefined,
    city: undefined,
    state: undefined,
    pincode: undefined,
    formStatus: "",
    validations: {
      name: undefined,
      mobileNumber: undefined,
      pincode: undefined,
    },
  };

  const [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addCustomerThunk(state));
  };

  const fieldHandler = (ref) => {
    const field = ref.current;
    const fieldName = field.name;
    const fieldVal = field.value;
    let validationMsg;
    if (ref === nameRef) {
      validationMsg = validateName(fieldVal);
    }
    if (ref === mobileNumberRef) {
      validationMsg = validateMobileNumber(fieldVal);
    }
    if (ref === pincodeRef) {
      validationMsg = validatePincode(fieldVal);
    }
    const newValidations = { ...state.validations, [fieldName]: validationMsg };
    const newState = {
      ...state,
      [fieldName]: fieldVal,
      customer: undefined,
      errMsg: undefined,
      validations: newValidations,
    };
    setNewState(newState);
  };

  /*
   * validation method for name
   */

  const validateName = (name) => {
    if (name.length < 3) {
      return validationMessage.nameSmallthanLengthThree;
    }
    return undefined;
  };

  /*
   * validation method for mobile number
   */

  const validateMobileNumber = (mobileNumber) => {
    if (mobileNumber.length < 10 || mobileNumber.length > 10) {
      return validationMessage.mobileNumberSmallerThanLengthTen;
    }
    return undefined;
  };
  /*
   * validation method for pincode
   */

  const validatePincode = (pincode) => {
    if (pincode < 1 || pincode.length < 6) {
      return validationMessage.pincodeSixDigits;
    }
    return undefined;
  };

  return (
    <div className="container mt-4 w-75">
      <div className="mt-4"></div>
      <h2> Add New Customer</h2>
      <form onSubmit={(event) => submitHandler(event)}>
        <div className="form-group">
          <label> Customer Name: </label>
          <input
            name="name"
            placeholder="Name"
            className="form-control"
            ref={nameRef}
            onChange={() => fieldHandler(nameRef)}
            required
          />
        </div>
        {state.validations.name ? (
          <div className={commonStyle.error}>{state.validations.name}</div>
        ) : (
          ""
        )}
        <br />
        <div className="form-group">
          <label> Mobile Number: </label>
          <input
            name="mobileNumber"
            placeholder="Mobile Number"
            className="form-control"
            ref={mobileNumberRef}
            onChange={() => fieldHandler(mobileNumberRef)}
            required
          />
        </div>
        {state.validations.mobileNumber ? (
          <div className={commonStyle.error}>
            {state.validations.mobileNumber}
          </div>
        ) : (
          ""
        )}
        <br />
        <div className="form-group">
          <label> Email Id: </label>
          <input
            name="emailId"
            textfield="@."
            type="email"
            className="form-control"
            placeholder="Email Id"
            ref={emailIdRef}
            onChange={() => fieldHandler(emailIdRef)}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label> Flat No. </label>
          <input
            name="flatNo"
            placeholder="Flat Number"
            className="form-control"
            ref={flatNoRef}
            onChange={() => fieldHandler(flatNoRef)}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label> Building Name: </label>
          <input
            name="buildingName"
            placeholder="Building Name"
            className="form-control"
            ref={buildingNameRef}
            onChange={() => fieldHandler(buildingNameRef)}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label> Area: </label>
          <input
            name="area"
            placeholder="Area"
            className="form-control"
            ref={areaRef}
            onChange={() => fieldHandler(areaRef)}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label> City: </label>
          <input
            name="city"
            placeholder="City"
            className="form-control"
            ref={cityRef}
            onChange={() => fieldHandler(cityRef)}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label> State: </label>
          <input
            name="state"
            placeholder="State"
            className="form-control"
            ref={stateRef}
            onChange={() => fieldHandler(stateRef)}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label> Pincode: </label>
          <input
            name="pincode"
            placeholder="Pincode"
            className="form-control"
            ref={pincodeRef}
            onChange={() => fieldHandler(pincodeRef)}
            required
          />
        </div>
        {state.validations.pincode ? (
          <div className={commonStyle.error}>{state.validations.pincode}</div>
        ) : (
          ""
        )}
        <br />
        <button className="btn btn-primary"> Submit Data</button>
      </form>
      <h2>{state.formStatus}</h2>
      {response.customer ? (
        <div>
          <div className="alert alert-success">Customer Added successfully</div>
          <DisplayCustomerDetails customer={response.customer} />
        </div>
      ) : (
        ""
      )}
      {response.error ? (
        <div className="text-danger h6 mt-3">
          Request was not successsful <br /> {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddCustomer;
