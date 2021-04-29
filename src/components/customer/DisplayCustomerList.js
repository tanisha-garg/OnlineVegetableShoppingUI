import { Link } from 'react-router-dom';

export default function DisplayCustomerList({customers}) {
    
    return(
        <div className="container">
            <ul className="list-group">
                {
                    customers.map(customer=><li key={customer.city} className="list-group-item">
                        <Link to={`/customerdetailsonrequest/${customer.city}`}>
                            <span>{customer.customerId} - {customer.name}</span>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
}