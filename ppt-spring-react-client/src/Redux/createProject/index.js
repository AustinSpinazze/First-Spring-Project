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
  POST_PROJECT_CREATION_SUCCESS
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
      console.log("We changed project name!", state);
      return {
        ...state,
        projectName: action.projectName,
        projectNameError: false
      };
    case PROJECT_IDENTIFIER_CHANGE:
      console.log("We changed project id!", state, action.projectIdentifier);
      return {
        ...state,
        projectIdentifier: action.projectIdentifier,
        projectIdentifierError: false
      };
    case PROJECT_DESCRIPTION_CHANGE:
      console.log("We changed project description", state, action.description);
      return {
        ...state,
        description: action.description,
        descriptionError: false
      };
    case START_DATE_CHANGE:
      console.log("We changed the start date", state, action.start_date);
      return { ...state, start_date: action.start_date };
    case END_DATE_CHANGE:
      console.log("We changed the end date", state, action.end_date);
      return { ...state, end_date: action.end_date };
    case PROJECT_NAME_ERROR:
      console.log("There was an error with the project name!", state);
      return { ...state, projectNameError: true };
    case PROJECT_IDENTIFIER_ERROR:
      console.log("There was an error with the project Id!", state);
      return { ...state, projectIdentifierError: true };
    case PROJECT_DESCRIPTION_ERROR:
      console.log("There was an error with the project description!", state);
      return { ...state, descriptionError: true };
    case SUBMIT_HANDLER:
      console.log("We submitted yayy", state);
      return state;
    case POST_PROJECT_CREATION_SUCCESS:
      console.log("We created the project!");
      return { ...state, submit: true };
    default:
      return state;
  }
};

export default createProjectReducer;
