import axios from "../../axios-config";
import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  PROJECTS_LOADING
} from "./constants";

export const getProjectsSuccess = payload => {
  return {
    type: GET_PROJECTS_SUCCESS,
    payload
  };
};

export const getProjectsError = () => {
  return {
    type: GET_PROJECTS_ERROR
  };
};

export const loadProjects = () => {
  return {
    type: PROJECTS_LOADING
  };
};

export function getProjects() {
  return dispatch => {
    dispatch(loadProjects());
    axios
      .get("/project/all")
      .then(res => {
        dispatch(getProjectsSuccess(res.data));
      })
      .catch(err => dispatch(getProjectsError(err)));
    dispatch(loadProjects());
  };
}
