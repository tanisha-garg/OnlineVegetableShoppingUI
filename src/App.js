import "./App.css";
import AddCustomer from "./components/customer/AddCustomer";
import DisplayCustomerDetails from "./components/customer/DisplayCustomerDetails";
import GetCustomerDetailsOnRequest from "./components/customer/GetCustomerDetailsOnRequest";
import UpdateCustomerDetails from "./components/customer/UpdateCustomerDetails";
import ViewCustomer from "./components/customer/ViewCustomer";
import ViewCustomersByLoc from "./components/customer/ViewCustomersByLoc";

function App() {
  let customer1 = {
    customerId: 1,
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

  return (
    <div>

      <ViewCustomersByLoc />
      
    </div>
  );
}

export default App;

/*  <GetCustomerDetailsOnRequest/>

     <AddCustomer/> 

     <ViewCustomer />

     <DisplayCustomerDetails customer={customer1}/> 
      
     
     <UpdateCustomerDetails /> 
       */
