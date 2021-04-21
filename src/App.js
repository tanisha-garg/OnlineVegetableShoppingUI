import './App.css';
import AddVegetable from './components/vegetable/AddVegetable';
import DisplayVegetable from './components/vegetable/DisplayVegetable';
import DisplayVegetables from './components/vegetable/DisplayVegetables';
import GetVegetableDetails from './components/vegetable/GetVegetableDetails';
import NavBar from './components/vegetable/NavBar';
import UpdateVegetablePrice from './components/vegetable/UpdateVegetablePrice';
import UpdateVegetableQuantity from './components/vegetable/UpdateVegetableQuantity';
import VegetableHome from './components/vegetable/VegetableHome';
/*const veg = {
  id: 1,
  name: "potato",
  category: "underground",
  type: "root",
  quantity: 20,
  price: 50,
};
const veg1=[veg];*/
function App() {
  return (
    <div>
      {/*<DisplayVegetable veg={veg}/>*/}
      {/*<DisplayVegetables vegetables={veg1}/>*/}
      {/*<AddVegetable/>*/}
      {/*<UpdateVegetablePrice/>*/}
      {/*<UpdateVegetableQuantity/>*/}
      {/*<GetVegetableDetails/>*/}
      {/*<VegetableHome/>*/}
      {<NavBar/>}
    </div>
  );
}

export default App;
