export default function DisplayVegetable({veg}){
    return(
        <span>
        id is {veg.id}<br/>
        name is {veg.name}<br/>
        category is {veg.category}<br/>
        type is {veg.type}<br/>
        quantity is {veg.quantity}<br/>
        price is {veg.price}
        </span>
    )
}