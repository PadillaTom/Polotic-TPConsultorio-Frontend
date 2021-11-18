import React from "react";
import { Link } from "react-router-dom";

import { BiUserPin } from "react-icons/bi";
import { FcFolder } from "react-icons/fc";

const PersonCard = ({ data }) => {
  const {
    id,
    dni,
    firstName,
    lastName,
    birthDate,
    address,
    phoneNumber,
    email,
    speciality,
  } = data;

  let redirectUrl = `patient-chart/${id}`;

  if (speciality != null) {
    redirectUrl = `dentist-chart/${id}`;
  }

  return (
    <>
      <div className="card-top">
        <div className="ct-left">
          <BiUserPin></BiUserPin>
        </div>
        <div className="ct-right">
          <div className="ctr-info">
            <h3>
              {firstName} {lastName}
            </h3>
            <p>{dni}</p>
          </div>
          <div className="ctr-chart">
            <Link to={redirectUrl}>
              <FcFolder></FcFolder>
            </Link>
          </div>
        </div>
      </div>
      <div className="card-row">
        <h2>Birth Date</h2>
        <p>{birthDate}</p>
      </div>
      <div className="card-row">
        <h2>Address</h2>
        <p>{address}</p>
      </div>
      <div className="card-row">
        <h2>Phone</h2>
        <p>{phoneNumber}</p>
      </div>
      <div className="card-row">
        <h2>Email</h2>
        <p>{email}</p>
      </div>
    </>
  );
};

export default PersonCard;
