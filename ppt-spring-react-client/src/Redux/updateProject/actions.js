import axios from "../../axios-config";
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
  POST_PROJECT_CREATION_SUCCESS,
  POST_PROJECT_CREATION_FAILURE
} from "./constants";

export const getProjectSuccess = payload => {
  return {
    type: GET_PROJECT,
    payload
  };
};

export const getProjectError = () => {
  return {
    type: GET_PROJECT_ERROR
  };
};

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

export const resetSubmit = () => {
  return {
    type: RESET_SUBMIT
  };
};

export const postProjectCreationFailure = error => {
  return {
    type: POST_PROJECT_CREATION_FAILURE,
    error
  };
};

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

export function validateProjectDescription(payload) {
  return dispatch => {
    if (payload.length < 256) {
      dispatch(projectDescriptionChange(payload));
    } else {
      dispatch(projectDescriptionError());
    }
  };
}

export function updateProject(id) {
  return dispatch => {
    axios
      .get(`/project/${id}`)
      .then(res => dispatch(getProjectSuccess(res.data)))
      .catch(err => dispatch(getProjectError(err)));
  };
}

export function submitValidateHandler() {
  return (dispatch, getState) => {
    const updateState = getState().updateProject;
    dispatch(submitHandler());
    axios
      .post("/project", updateState)
      .then(() => dispatch(postProjectCreationSuccess()))
      .catch(err => dispatch(postProjectCreationFailure(err)));
  };
}
