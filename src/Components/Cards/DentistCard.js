import React from "react";
import PersonCard from "./PersonCard";

const DentistCard = (basicDentist) => {
  const { speciality } = basicDentist;
  return (
    <article className="mobile-card">
      <PersonCard data={basicDentist}></PersonCard>
      <div className="card-row">
        <h2>Speciality</h2>
        <p>{speciality}</p>
      </div>
    </article>
  );
};

export default DentistCard;
