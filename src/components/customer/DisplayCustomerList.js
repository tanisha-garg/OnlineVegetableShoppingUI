import { Link } from 'react-router-dom';

/**
 * Component to display customers list with links.
 * Once the user clicks on the given link it takes the user to DisplayCustomerDetails component
*/

export default function DisplayCustomerList({customers}) {
    
    return(
        <div className="container">
            <ul className="list-group">
                {
                    customers.map(customer=><li key={customer.city} className="list-group-item">
                        <Link to={`/customer/displaycustomerdetails/${customer.city}`}>
                            <span>{customer.customerId} - {customer.name}</span>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
}