import DisplayVegetable from "./DisplayVegetable";



export default function DisplayVegetables({vegetables}){
   
    
    return(
        <div>
            <ul>
           {vegetables.map((veg) => <li key={veg.id}> <DisplayVegetable veg={veg} /> </li> )}
           </ul>
        </div>
    );
}