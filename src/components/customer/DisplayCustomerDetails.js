function DisplayCustomerDetails({ customer }) {
  return (
    <div>
      <h2> Display Customer Details</h2>
      <table className="table table-striped w-40" border="1px">
        <tr>
          <th
            style={{
              textAlign: "right",
            }}
          >
            Customer ID :{" "}
          </th>          
          <th
            style={{
              textAlign: "right",
            }}
          >
            Name :{" "}
          </th>
          <th
            style={{
              textAlign: "right",
            }}
          >
            Mobile Number :{" "}
          </th>
          <th
            style={{
              textAlign: "right",
            }}
          >
            Email Id :{" "}
          </th>
          <th
            style={{
              textAlign: "right",
            }}
          >
            Flat Number :{" "}
          </th>
          <th
            style={{
              textAlign: "right",
            }}
          >
            Building Name :{" "}
          </th>
          <th
            style={{
              textAlign: "right",
            }}
          >
            Area :{" "}
          </th>
          <th
            style={{
              textAlign: "right",
            }}
          >
            City :{" "}
          </th>
          <th
            style={{
              textAlign: "right",
            }}
          >
            State :{" "}
          </th>
          <th style=
            {{
              textAlign: "right",
            }}>

            
            Pincode :{" "}
          </th>
        </tr>

        <tr>
          <td>{customer.customerId}</td>
          <td>{customer.name}</td>
          <td>{customer.mobileNumber}</td>
          <td>{customer.emailId}</td>
          <td>{customer.flatNo}</td>
          <td>{customer.buildingName}</td>
          <td>{customer.area}</td>
          <td>{customer.city}</td>
          <td>{customer.state}</td>
          <td>{customer.pincode}</td>
        </tr>
      </table>
    </div>
  );
}

export default DisplayCustomerDetails;
