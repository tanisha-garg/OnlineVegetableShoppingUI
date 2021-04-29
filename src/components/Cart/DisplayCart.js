const DisplayCart = ({cart}) => {
    return ( 
        <div>
            <h4>Displaying Cart</h4>
            <p>{cart.custId}</p>
            <p>{cart.firstName}</p>
            <h6>Items</h6>
            {cart.items.map((item)=>
                <p key={item.vegId}>{item.vegName}</p>
            )}

        </div>
     );
}
 
export default DisplayCart;