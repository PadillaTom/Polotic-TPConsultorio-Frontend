import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { getCompleteDentistsUrl } from "../Utils/constants";

const DentistSingleChart = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${getCompleteDentistsUrl}/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(data);

  return <div>Single Chart</div>;
};

export default DentistSingleChart;
