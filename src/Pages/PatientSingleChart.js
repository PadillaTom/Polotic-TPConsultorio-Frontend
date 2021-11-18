import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { getCompletePatientsUrl } from "../Utils/constants";

const PatientSingleChart = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${getCompletePatientsUrl}/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(data); // RE RENDERS on OPEN CLOSE SIDEBAR

  return <div>Single Patient</div>;
};

export default PatientSingleChart;
