export default function DisplayVegetable({veg}){
    return(
        <span>
        id is {veg.id} name is {veg.name} category is {veg.category} type is {veg.type} quantity is {veg.quantity} price is {veg.price}
        </span>
    )
}