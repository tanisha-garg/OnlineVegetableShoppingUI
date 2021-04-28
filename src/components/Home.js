function Home(){
    return(
        <div className="container mt-5">
           <h3>Welcome to <i>Online Vegetable Shopping</i></h3> <br/>
           <h5>Modules and Members</h5>
           <table className="table table-striped col-md-6">
               <thead>
                   <tr>
                       <th scope="col">Module</th>
                       <th scope="col">Member</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>Customer</td>
                       <td>Ayesha Goel</td>
                   </tr>
                   <tr>
                       <td>Vegetable</td>
                       <td>Abhishek Nishad and Anant Sharma</td>
                   </tr>
                   <tr>
                       <td>Cart</td>
                       <td>Sameer Mishra</td>
                   </tr>
                   <tr>
                       <td>Order</td>
                       <td>Tanisha Garg and A.M Suriya</td>
                   </tr>
                   <tr>
                       <td>Billing Details</td>
                       <td>Tanisha Garg</td>
                   </tr>
                   <tr>
                       <td>Feedback</td>
                       <td>Syed Farhan</td>
                   </tr>
               </tbody>
           </table>
        </div>
    );
}

export default Home;