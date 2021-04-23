import { Link } from 'react-router-dom';
import DisplayCustomerDetails from './DisplayCustomerDetails';

export default function DisplayCustomerList({customers}) {
    
    return(
        <div>
            <ul className="list-group">
                {
                    customers.map(customer=><li key={customer.city} className="list-group-item">
                        <Link to={`/customerbylocation/${customer.city}`}>
                            <span>{customer.city} - {customer.city}</span>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
}