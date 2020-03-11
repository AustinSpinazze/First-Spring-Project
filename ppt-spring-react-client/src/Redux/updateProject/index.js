import {
  GET_PROJECT,
  GET_PROJECT_ERROR,
  PROJECT_NAME_CHANGE,
  PROJECT_DESCRIPTION_CHANGE,
  END_DATE_CHANGE,
  SUBMIT_HANDLER,
  PROJECT_NAME_ERROR,
  PROJECT_DESCRIPTION_ERROR,
  RESET_SUBMIT,
  POST_PROJECT_CREATION_FAILURE,
  POST_PROJECT_CREATION_SUCCESS,
  RESET_REDIRECT
} from "./constants";
import { Redirect } from "react-router";

const initalState = {
  projectName: "",
  projectIdentifier: "",
  description: "",
  start_date: "",
  end_date: "",
  projectNameError: false,
  projectIdentifierError: false,
  descriptionError: false,
  submit: false,
  initialState: false,
  reDirect: false
};

const updateProjectReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
        ...action.payload
      };
    case PROJECT_NAME_CHANGE:
      return {
        ...state,
        projectName: action.projectName,
        projectNameError: false
      };
    case PROJECT_NAME_ERROR:
      return { ...state, projectNameError: true };
    case PROJECT_DESCRIPTION_CHANGE:
      return {
        ...state,
        description: action.description,
        descriptionError: false
      };
    case PROJECT_DESCRIPTION_ERROR:
      return { ...state, descriptionError: true };
    case END_DATE_CHANGE:
      return { ...state, end_date: action.end_date };
    case RESET_SUBMIT:
      return { ...state, submit: false };
    case SUBMIT_HANDLER:
      return state;
    case POST_PROJECT_CREATION_SUCCESS:
      return { ...state, submit: true };
    case GET_PROJECT_ERROR:
      return { ...state, reDirect: true };
    case RESET_REDIRECT:
      return { ...state, reDirect: false };
    default:
      return state;
  }
};

export default updateProjectReducer;
