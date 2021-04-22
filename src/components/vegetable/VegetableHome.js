import commonStyle from "./commonStyle.module.css";

export default function VegetableHome() {
  return (
    <div>
      <h1> Vegetable Module </h1>

      <div className={commonStyle.content}>
        <div>
          Welcome to Vegetable Module
          <br /> various features availble are :
          <ul>
              <li>Add Vegetable</li>
              <li>View Vegetable</li>
              <li>Update Vegetable</li>
              <li>Delete Vegetable</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
