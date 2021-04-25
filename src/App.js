import { Provider } from 'react-redux';
import './App.css';
import AddVegetable from './components/vegetable/AddVegetable';
import DisplayVegetable from './components/vegetable/DisplayVegetable';
import DisplayVegetables from './components/vegetable/DisplayVegetables';
import GetVegetableDetailsOnRequest from './components/vegetable/GetVegetableDetailsOnRequest';
import NavBar from './components/vegetable/NavBar';
import UpdateVegetablePrice from './components/vegetable/UpdateVegetablePrice';
import VegetableHome from './components/vegetable/VegetableHome';
import { fetchVegetableById } from './service/VegetableService';
import store from "./redux/vegetable/store"
import { Route, Router, Switch } from 'react-router';
import Navbar from './components/vegetable/NavBar';

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

  /*const promise=addVegetable(data);
  promise.then(response=>console.log("inside addVegetable mock testing",response.data))
  .catch(error=>console.log("error in vegetable add component ",error.message));*/

  /**
   * tetsing service fetch vegetable with mock data
   */

   /*const promise=fetchVegetableById(15);
   promise.then(response=>console.log("inside fetch vegetable mock testing",response.data))
   .catch(error=>console.log("error in vegetable fetch component ",error.message));*/

   /**
   * tetsing service update vegetable price with mock data
   */

   /*const promise=updateVegetablePrice(data);
   promise.then(response=>console.log("inside update vegetable price mock testing",response.data))
   .catch(error=>console.log("error in vegetable fetch component ",error.message));*/

  return (
    <div>
      <Provider store={store} >
      {/*<Router>
        <div className="row">
          <div className="col-md-12">
            <Navbar />
            <Switch>
              <Route exact path="/" component={VegetableHome} />
              <Route
                exact
                path="/vegetables/add"
                component={AddVegetable}
              />
              <Route
                exact
                path="/vegetables/byid"
                component={GetVegetableDetailsOnRequest}
              />
              <Route
                exact
                path="/vegetables/changePrice"
                component={UpdateVegetablePrice}
              />
            </Switch>
          </div>
        </div>
      </Router>*/}
      {/*<AddVegetable/>*/}
      {/*<GetVegetableDetailsOnRequest/>*/}
      {<UpdateVegetablePrice/>}
      </Provider>
      
    </div>
  );
}

export default App;
