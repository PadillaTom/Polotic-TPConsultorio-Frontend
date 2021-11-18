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
} from "../Actions/actions";

// Initial State:
const initialState = {
  basicPatients: [],
  patients_loading: false,
  patients_error: false,
  basicDentists: [],
  dentists_loading: false,
  dentists_error: false,
  single_patient: {},
  single_dentist: {},
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

  return (
    <GetDataContext.Provider
      value={{ ...state, getBasicPatients, getBasicDentists }}
    >
      {children}
    </GetDataContext.Provider>
  );
};

export const useGetDataContext = () => {
  return useContext(GetDataContext);
};
