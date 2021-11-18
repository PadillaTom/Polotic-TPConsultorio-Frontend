import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";

import reducer from "../Reducers/get_reducer";
import {
  GET_BASIC_PATIENTS,
  GET_BASIC_PATIENTS_SUCCESS,
  GET_BASIC_PATIENTS_ERROR,
  GET_BASIC_DENTISTS,
  GET_BASIC_DENTISTS_SUCCESS,
  GET_BASIC_DENTISTS_ERROR,
  GET_COMPLETE_PATIENT,
  GET_COMPLETE_PATIENT_SUCCESS,
  GET_COMPLETE_PATIENT_ERROR,
  GET_COMPLETE_DENTIST,
  GET_COMPLETE_DENTIST_SUCCESS,
  GET_COMPLETE_DENTIST_ERROR,
} from "../Actions/actions";

import {
  getCompletePatientsUrl,
  getCompleteDentistsUrl,
} from "../Utils/constants";

// Initial State:
const initialState = {
  basicPatients: [],
  patients_loading: false,
  patients_error: false,
  basicDentists: [],
  dentists_loading: false,
  dentists_error: false,
  single_patient: {},
  single_patient_loading: false,
  single_patient_error: false,
  single_dentist: {},
  single_dentist_loading: false,
  single_dentist_error: false,
};

const GetDataContext = createContext();

export const GetDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // *** GET Basic Patients ***
  const getBasicPatients = async (url) => {
    dispatch({ type: GET_BASIC_PATIENTS });
    try {
      const response = await axios.get(url);
      const basics = response.data;
      dispatch({ type: GET_BASIC_PATIENTS_SUCCESS, payload: basics });
    } catch (error) {
      dispatch({ type: GET_BASIC_PATIENTS_ERROR });
    }
  };

  // *** GET Basic Dentists ***
  const getBasicDentists = async (url) => {
    dispatch({ type: GET_BASIC_DENTISTS });
    try {
      const response = await axios.get(url);
      const basics = response.data;
      dispatch({ type: GET_BASIC_DENTISTS_SUCCESS, payload: basics });
    } catch (error) {
      dispatch({ type: GET_BASIC_DENTISTS_ERROR });
    }
  };

  // *** GET Complete Patient by ID ***
  const getPatientDetails = async (id) => {
    dispatch({ type: GET_COMPLETE_PATIENT });
    try {
      await axios
        .get(`${getCompletePatientsUrl}/${id}`)
        .then((res) =>
          dispatch({ type: GET_COMPLETE_PATIENT_SUCCESS, payload: res.data })
        );
    } catch (error) {
      dispatch({ type: GET_COMPLETE_PATIENT_ERROR });
    }
  };

  // *** GET Complete Dentist by ID ***
  const getDentistDetails = async (id) => {
    dispatch({ type: GET_COMPLETE_DENTIST });
    try {
      await axios
        .get(`${getCompleteDentistsUrl}/${id}`)
        .then((res) =>
          dispatch({ type: GET_COMPLETE_DENTIST_SUCCESS, payload: res.data })
        );
    } catch (error) {
      dispatch({ type: GET_COMPLETE_DENTIST_ERROR });
    }
  };

  return (
    <GetDataContext.Provider
      value={{
        ...state,
        getBasicPatients,
        getBasicDentists,
        getPatientDetails,
        getDentistDetails,
      }}
    >
      {children}
    </GetDataContext.Provider>
  );
};

export const useGetDataContext = () => {
  return useContext(GetDataContext);
};
