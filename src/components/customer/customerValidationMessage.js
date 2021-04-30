/**
 * Constants for validations of Customer Module
*/
const validationMessage = {
  idSmallerThanOne: "Customer id can't be negative or zero", // validating id
  nameSmallthanLengthThree: "Name can't be smaller than 3 letters", // Check name has min length 3
  mobileNumberSmallerThanLengthTen:
    "Mobile Number cannot be lesser or greater 10 digits", //check mobile number is 10 digits only
  pincodeSixDigits: "Pincode can't be negative or less than 6 digits", // check pincode is 6 digits only
};

export default validationMessage;
