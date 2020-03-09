import {
  PROJECT_NAME_CHANGE,
  PROJECT_IDENTIFIER_CHANGE,
  PROJECT_DESCRIPTION_CHANGE,
  START_DATE_CHANGE,
  END_DATE_CHANGE,
  SUBMIT_HANDLER,
  PROJECT_NAME_ERROR,
  PROJECT_IDENTIFIER_ERROR,
  PROJECT_DESCRIPTION_ERROR,
  POST_PROJECT_CREATION_SUCCESS,
  RESET_SUBMIT
} from "./constants";

const initialState = {
  projectName: "",
  projectIdentifier: "",
  description: "",
  start_date: "",
  end_date: "",
  projectNameError: false,
  projectIdentifierError: false,
  descriptionError: false,
  submit: false
};

const createProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_NAME_CHANGE:
      return {
        ...state,
        projectName: action.projectName,
        projectNameError: false
      };
    case PROJECT_IDENTIFIER_CHANGE:
      return {
        ...state,
        projectIdentifier: action.projectIdentifier,
        projectIdentifierError: false
      };
    case PROJECT_DESCRIPTION_CHANGE:
      return {
        ...state,
        description: action.description,
        descriptionError: false
      };
    case START_DATE_CHANGE:
      return { ...state, start_date: action.start_date };
    case END_DATE_CHANGE:
      return { ...state, end_date: action.end_date };
    case PROJECT_NAME_ERROR:
      return { ...state, projectNameError: true };
    case PROJECT_IDENTIFIER_ERROR:
      return { ...state, projectIdentifierError: true };
    case PROJECT_DESCRIPTION_ERROR:
      return { ...state, descriptionError: true };
    case SUBMIT_HANDLER:
      return state;
    case POST_PROJECT_CREATION_SUCCESS:
      return { ...state, submit: true };
    case RESET_SUBMIT:
      console.log("submit set to false");
      return { ...state, submit: false };
    default:
      return state;
  }
};

export default createProjectReducer;
