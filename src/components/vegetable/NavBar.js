import { BrowserRouter as  Link } from 'react-router-dom';


export default function NavBar() {

    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >
                    Online Vegetable Shopping
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >
                                <span>VegetableHome</span>
                                <span className="sr-only">(current)</span>

                            </Link>


                        </li>

                        <li className="nav-item">

                            <Link to="/add" className="nav-link" >
                                <span>Add Vegetable</span>

                            </Link>
                        </li>


                        <li className="nav-item">

                            <Link to="/byid" className="nav-link" >
                                <span>Get customer details</span>
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>






        </div>

    )

}