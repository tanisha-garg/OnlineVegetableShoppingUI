import commonStyle from "./commonStyle.module.css";

export default function DisplayVegetable({veg}){
    return(
        <div className={commonStyle.result}>
        <ul className="list-group mt-6">
          <li className="list-group-item">Veg Id: {veg.vegId} </li>
          <li className="list-group-item"> Vegetable Name: {veg.name} </li>
          <li className="list-group-item">Vegetable tpye: {veg.type} </li>
          <li className="list-group-item">Vegetable Category: {veg.category} </li>
          <li className="list-group-item">Vegetable Price: {veg.price} </li>
          <li className="list-group-item">Vegetable Quantity: {veg.quantity} </li>
        </ul>
      </div>

    )
}