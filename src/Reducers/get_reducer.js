import {
  GET_BASIC_PATIENTS,
  GET_BASIC_PATIENTS_ERROR,
  GET_BASIC_PATIENTS_SUCCESS,
  GET_BASIC_DENTISTS,
  GET_BASIC_DENTISTS_ERROR,
  GET_BASIC_DENTISTS_SUCCESS,
} from "../Actions/actions";

const get_reducer = (state, action) => {
  // *** GET Basic Patients ***
  if (action.type === GET_BASIC_PATIENTS) {
    return { ...state, patients_loading: true };
  }
  if (action.type === GET_BASIC_PATIENTS_SUCCESS) {
    return { ...state, patients_loading: false, basicPatients: action.payload };
  }
  if (action.type === GET_BASIC_PATIENTS_ERROR) {
    return { ...state, patients_loading: false, patients_error: true };
  }

  // *** GET Basic Dentists ***
  if (action.type === GET_BASIC_DENTISTS) {
    return { ...state, dentists_loading: true };
  }
  if (action.type === GET_BASIC_DENTISTS_SUCCESS) {
    return { ...state, dentists_loading: false, basicDentists: action.payload };
  }
  if (action.type === GET_BASIC_DENTISTS_ERROR) {
    return { ...state, dentists_loading: false, dentists_error: true };
  }

  throw new Error(`No Matchinv "${action.type}" - Action Type`);
};

export default get_reducer;
