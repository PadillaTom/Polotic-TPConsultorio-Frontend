import React, { useState } from "react";
import axios from "axios";

const DentistForm = () => {
  const [savedDent, setSavedDent] = useState("");

  const handleSaveDentist = () => {
    axios
      .post("http://localhost:8080/dentists/create", {
        dni: "1111111",
        firstName: "1111111",
        lastName: "1111111",
        birthDate: "01/01/2000",
        address: "1111111",
        phoneNumber: "1111111",
        email: "1111111",
        speciality: "1111111",
      })
      .then((res) => setSavedDent(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveDentist();
        }}
      >
        <h2>Create New Dentist</h2>
        <div className="singleInput">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Nombre Dentista" />
        </div>
        <input type="submit" value="Enviar" />
      </form>

      <h2>Dentista Creado:</h2>
      <h3>{savedDent.dni}</h3>
      <h3>{savedDent.firstName}</h3>
      <h3>{savedDent.lastName}</h3>
      <h3>{savedDent.birthDate}</h3>
      <h3>{savedDent.address}</h3>
      <h3>{savedDent.phoneNumber}</h3>
      <h3>{savedDent.email}</h3>
      <h3>{savedDent.speciality}</h3>
    </div>
  );
};

export default DentistForm;
