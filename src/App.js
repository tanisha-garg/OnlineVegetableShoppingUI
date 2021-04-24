import './App.css';
import AddVegetable from './components/vegetable/AddVegetable';
import DisplayVegetable from './components/vegetable/DisplayVegetable';
import DisplayVegetables from './components/vegetable/DisplayVegetables';
import GetVegetableDetailsOnRequest from './components/vegetable/GetVegetableDetailsOnRequest';
import NavBar from './components/vegetable/NavBar';
import UpdateVegetablePrice from './components/vegetable/UpdateVegetablePrice';
import UpdateVegetableQuantity from './components/vegetable/UpdateVegetableQuantity';
import VegetableHome from './components/vegetable/VegetableHome';
import VegetableService from './service/vegetable/VegetableService';
const veg = {
  id: 1,
  name: "potato",
  category: "underground",
  type: "root",
  quantity: 20,
  price: 50,
};

const data = {
  vegId:10,
  price:55
};
const veg1=[veg];
function App() {

  /*
  *testing service add component with mock data
  */

  /*const promise=VegetableService.addVegetable(data);
  promise.then(response=>console.log("inside addVegetable mock testing",response.data))
  .catch(error=>console.log("error in vegetable add component ",error.message));*/

  /**
   * tetsing service fetch vegetable with mock data
   */

   /*const promise=VegetableService.fetchVegetable(1);
   promise.then(response=>console.log("inside fetch vegetable mock testing",response.data))
   .catch(error=>console.log("error in vegetable fetch component ",error.message));*/

   /**
   * tetsing service update vegetable price with mock data
   */

   const promise=VegetableService.UpdateVegetablePrice(data);
   promise.then(response=>console.log("inside update vegetable price mock testing",response.data))
   .catch(error=>console.log("error in vegetable fetch component ",error.message));

  return (
    <div>
      {/*<DisplayVegetable veg={veg}/>*/}
      {/*<DisplayVegetables vegetables={veg1}/>*/}
      {/*<AddVegetable/>*/}
      {/*<UpdateVegetablePrice/>*/}
      {/*<UpdateVegetableQuantity/>*/}
      {/*<GetVegetableDetails/>*/}
      {/*<VegetableHome/>*/}
      {/*<NavBar/>*/}
    </div>
  );
}

export default App;
