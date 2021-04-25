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
import {
  getCustomerDetailsOnRequest,
  updateCustomerDetails,
  addCustomer,
  viewCustomersByLoc,
} from "./service/CustomerService";

function App() {
  /* 
  let data={
    customerId: 6,
    name: "Virat",
    mobileNumber: "987654320",
    emailId: "virat@yahoo.com",
    flatNo: "303",
    buildingName: "Siddhi Apts",
    area: "ashok nagar",
    city: "mumbai",
    state: "maharashtra",
    pincode: "123456",
     };

     */

  /*
  *testing service add customer component with mock data
  */

  
  // const promise = addCustomer(data);
  // promise.then(response=> console.log("Success",response.data))
  //   .catch(error => console.log(error.message));


   let data={
     customerId:4,
     name: "Tanmay",
     mobileNumber:"1234567890",
     emailId:"hii@yah.com",
   };

  /*
   *testing service update customer details component with mock data
   */

      const promise=updateCustomerDetails(data);
    promise.then((response)=>{
        console.log(response.data);
   }).catch((error)=>{
      console.log(error.message);
       console.log(error.response.data);
      })

  // const city="mumbai"

  //    const promise=viewCustomersByLoc(city);
  //    promise.then((response)=>{
  //      console.log(response.data);

  //    }).catch((error)=>{
  //      console.log(error.message);
  //      console.log(error.response.data);
  //    })

    // const customerId=6

    //   const promise=getCustomerDetailsOnRequest(customerId);
    //   promise.then((response)=>{
    //     console.log(response.data);

    //   }).catch((error)=>{
    //     console.log(error.message);
    //     console.log(error.response.data);
    //   })

  return (
    <div className=" container mt-7">
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
