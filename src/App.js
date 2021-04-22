import "./App.css";
import AddCustomer from "./components/customer/AddCustomer";
import DisplayCustomerDetails from "./components/customer/DisplayCustomerDetails";
import ViewCustomer from "./components/customer/ViewCustomer";
import ViewCustomerByLoc from "./components/customer/ViewCustomerByLoc";

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
      <DisplayCustomerDetails customer={customer1}/>
      <AddCustomer/> 
      <ViewCustomer />
      <br />
      <ViewCustomerByLoc  />
      <br />
    </div>
  );
}

export default App;
