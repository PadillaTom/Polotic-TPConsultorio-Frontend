import React from "react";

const PersonFields = ({ collect }) => {
  const [data, setData] = React.useState({
    idCard: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    address: "",
    phone: "",
    email: "",
  });

  const handlePersonData = collect;
  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    handlePersonData(newData);
  };

  return (
    <div className="person-fields-container">
      <div className="fc-single-input">
        <label htmlFor="idCard">ID Card</label>
        <input
          type="text"
          name="idCard"
          id="idCard"
          value={data.idCard}
          onChange={(e) => {
            handleData(e);
          }}
        />
      </div>
      <div className="fc-single-input">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={data.firstName}
          onChange={(e) => {
            handleData(e);
          }}
        />
      </div>
      <div className="fc-single-input">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={data.lastName}
          onChange={(e) => {
            handleData(e);
          }}
        />
      </div>
      <div className="fc-single-input">
        <label htmlFor="birthDate">Birth Date</label>
        <input
          type="text"
          name="birthDate"
          id="birthDate"
          value={data.birthDate}
          onChange={(e) => {
            handleData(e);
          }}
        />
      </div>
      <div className="fc-single-input">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={data.address}
          onChange={(e) => {
            handleData(e);
          }}
        />
      </div>
      <div className="fc-single-input">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={data.phone}
          onChange={(e) => {
            handleData(e);
          }}
        />
      </div>
      <div className="fc-single-input">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={(e) => {
            handleData(e);
          }}
        />
      </div>
    </div>
  );
};

export default PersonFields;
