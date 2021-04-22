import "./App.css";
import CancelOrderDetail from "./components/order/CancelOrderDetail";
import ViewOrderDetail from "./components/order/ViewOrderDetail";
import AddBillingDetails from "./components/billingdetails/AddBillingDetails";
import GetBillingDetails from "./components/billingdetails/GetBillingDetails";
import UpdateTransactionMode from "./components/billingdetails/UpdateTransactionMode";
import UpdateTransactionStatus from "./components/billingdetails/UpdateTransactionStatus";
import AddVegetable from "./components/vegetable/AddVegetable";
import DisplayVegetable from "./components/vegetable/DisplayVegetable";
import DisplayVegetables from "./components/vegetable/DisplayVegetables";
import GetVegetableDetails from "./components/vegetable/GetVegetableDetails";
import NavBar from "./components/vegetable/NavBar";
import UpdateVegetablePrice from "./components/vegetable/UpdateVegetablePrice";
import UpdateVegetableQuantity from "./components/vegetable/UpdateVegetableQuantity";
import VegetableHome from "./components/vegetable/VegetableHome";
import DisplayOrderDetails from "./components/order/DisplayOrderDetails";
/*const veg = {
  id: 1,
  name: "potato",
  category: "underground",
  type: "root",
  quantity: 20,
  price: 50,
};
const veg1=[veg];*/
const order = {orderId:1, customerName: "Tanisha", totalAmount:100.0, date:"20/01/2021", status:"Placed"};
function App() {
  return (
    <div>
      {/*<DisplayVegetable veg={veg}/>*/}
      {/*<DisplayVegetables vegetables={veg1}/>*/}
      {/*<AddVegetable/>*/}
      {/* {<UpdateVegetablePrice/>} */}
      {/*<UpdateVegetableQuantity/>*/}
      {/*<GetVegetableDetails/>*/}
      {/*<VegetableHome/>*/}
      {/*<NavBar/>*/}
      {/* <GetBillingDetails />
     <AddBillingDetails />
     <UpdateTransactionMode />
    <UpdateTransactionStatus /> */}
      {/* <CancelOrderDetail />
    // <ViewOrderDetail /> */}
     <DisplayOrderDetails order={order} />
    </div>
  );
}

export default App;
