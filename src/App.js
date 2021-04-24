import "./App.css";
import AddCustomer from "./components/customer/AddCustomer";
import DisplayCustomerDetails from "./components/customer/DisplayCustomerDetails";
import GetCustomerDetailsOnRequest from "./components/customer/GetCustomerDetailsOnRequest";
import UpdateCustomerDetails from "./components/customer/UpdateCustomerDetails";
import ViewCustomer from "./components/customer/ViewCustomer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ViewCustomersByLoc from "./components/customer/ViewCustomersByLoc";
import CustomerHome from "./components/customer/CustomerHome";
import CustomerNavbar from "./components/customer/CustomerNavbar";

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
      <Router>
        
        <CustomerNavbar />      
        
        <Switch>
          <Route exact path="/customerhome" component={CustomerHome} />
          <Route exact path="/addcustomer" component={AddCustomer} />
          <Route exact path="/viewcustomer" component={ViewCustomer} />
          <Route exact path="/updatecustomerdetails" component={UpdateCustomerDetails} />
          <Route exact path="/getcustomerdetailsonrequest" component={GetCustomerDetailsOnRequest} />
          <Route exact path="/getcustomerbyloc" component={ViewCustomersByLoc} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/*  
 <ViewCustomersByLoc />
 <GetCustomerDetailsOnRequest/>
 
     <AddCustomer/> 

     <ViewCustomer />

     <DisplayCustomerDetails customer={customer1}/> 
      
     
     <UpdateCustomerDetails /> 
       */
