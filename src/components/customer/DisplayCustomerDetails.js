function DisplayCustomerDetails({ customer }) {
  return (
    <div>
      <h2> Display Customer Details</h2>
      <div>
        Customer Id: {customer.customerId} <br />
        Customer name: {customer.name} <br />
        Customer mob no: {customer.mobileNumber} <br />
        Customer emailId: {customer.emailId} <br />
        Customer Address: <br />{customer.flatNo}, {customer.buildingName},{customer.area},
        {customer.city},{customer.state},{customer.pincode}.
        <br />
        <br />
      </div>
    </div>
  );
}

export default DisplayCustomerDetails;
