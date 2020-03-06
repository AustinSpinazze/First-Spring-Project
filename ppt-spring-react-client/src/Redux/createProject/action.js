import axios from "../../axios-config";

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
  POST_PROJECT_CREATION_FAILURE,
  POST_PROJECT_CREATION_SUCCESS
} from "./constants";

export const projectNameChange = projectName => {
  return {
    type: PROJECT_NAME_CHANGE,
    projectName
  };
};

export const projectNameError = () => {
  return {
    type: PROJECT_NAME_ERROR
  };
};

export const projectIdChange = projectIdentifier => {
  return {
    type: PROJECT_IDENTIFIER_CHANGE,
    projectIdentifier
  };
};

export const projectIdError = () => {
  return {
    type: PROJECT_IDENTIFIER_ERROR
  };
};

export const projectDescriptionChange = description => {
  return {
    type: PROJECT_DESCRIPTION_CHANGE,
    description
  };
};

export const projectDescriptionError = () => {
  return {
    type: PROJECT_DESCRIPTION_ERROR
  };
};

export const projectStartDate = start_date => {
  console.log(start_date, "we made it");
  return {
    type: START_DATE_CHANGE,
    start_date
  };
};

export const projectEndDate = end_date => {
  return {
    type: END_DATE_CHANGE,
    end_date
  };
};

export const submitHandler = () => {
  return {
    type: SUBMIT_HANDLER
  };
};

export const postProjectCreationFailure = error => ({
  type: POST_PROJECT_CREATION_FAILURE,
  error
});

export const postProjectCreationSuccess = () => ({
  type: POST_PROJECT_CREATION_SUCCESS
});

export function validateProjectName(payload) {
  return dispatch => {
    if (payload.length <= 30) {
      dispatch(projectNameChange(payload));
    } else {
      dispatch(projectNameError());
    }
  };
}

export function validateProjectId(payload) {
  return dispatch => {
    if (payload.length < 6) {
      dispatch(projectIdChange(payload));
    } else {
      dispatch(projectIdError());
    }
  };
}

export function validateProjectDescription(payload) {
  return dispatch => {
    if (payload.length < 256) {
      dispatch(projectDescriptionChange(payload));
    } else {
      dispatch(projectDescriptionError());
    }
  };
}

export function submitValidateHandler(payload) {
  return dispatch => {
    dispatch(submitHandler());
    axios
      .post("http://localhost:8080/api/project", payload)
      .then(() => dispatch(postProjectCreationSuccess()))
      .catch(err => dispatch(postProjectCreationFailure(err)));
  };
}
