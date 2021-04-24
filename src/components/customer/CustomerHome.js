import CustomerNavbar from "./CustomerNavbar"

export default function CustomerHome(){
    return(
        <div>
         
            <h1 style={{
              textAlign: "center",
            }}><em>Online Vegetable Shopping</em></h1>
            <h3 style={{
              textAlign: "center",
            }}>Customer Module</h3>
             < CustomerNavbar />
        </div>
    );
}