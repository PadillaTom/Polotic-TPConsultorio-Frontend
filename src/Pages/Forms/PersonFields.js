import React from "react";

const PersonFields = () => {
  return (
    <div className="person-fields-container">
      <div className="fc-single-input">
        <label htmlFor="idCard">ID Card</label>
        <input type="text" name="idCard" />
      </div>
      <div className="fc-single-input">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" />
      </div>
      <div className="fc-single-input">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />
      </div>
      <div className="fc-single-input">
        <label htmlFor="birthDate">Birth Date</label>
        <input type="text" name="birthDate" />
      </div>
      <div className="fc-single-input">
        <label htmlFor="address">Address</label>
        <input type="text" name="address" />
      </div>
      <div className="fc-single-input">
        <label htmlFor="phone">Phone Number</label>
        <input type="text" name="phone" />
      </div>
      <div className="fc-single-input">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
      </div>
    </div>
  );
};

export default PersonFields;
