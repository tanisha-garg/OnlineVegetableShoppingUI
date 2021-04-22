import "./App.css";
import CancelOrderDetail from "./component/order/CancelOrderDetail";
import ViewOrderDetail from "./component/order/ViewOrderDetail";
import AddBillingDetails from "./component/billingdetails/AddBillingDetails";
import GetBillingDetails from "./component/billingdetails/GetBillingDetails";
import UpdateTransactionMode from "./component/billingdetails/UpdateTransactionMode";
import UpdateTransactionStatus from "./component/billingdetails/UpdateTransactionStatus";
import AddVegetable from "./component/vegetable/AddVegetable";
import DisplayVegetable from "./component/vegetable/DisplayVegetable";
import DisplayVegetables from "./component/vegetable/DisplayVegetables";
import GetVegetableDetails from "./component/vegetable/GetVegetableDetails";
import NavBar from "./component/vegetable/NavBar";
import UpdateVegetablePrice from "./component/vegetable/UpdateVegetablePrice";
import UpdateVegetableQuantity from "./component/vegetable/UpdateVegetableQuantity";
import VegetableHome from "./component/vegetable/VegetableHome";
import DisplayOrderDetails from "./component/order/DisplayOrderDetails";
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
