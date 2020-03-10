import axios from "../../axios-config";
import { GET_PROJECTS_SUCCESS, GET_PROJECTS_ERROR } from "./constants";

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

export function getProjects() {
  return dispatch => {
    axios
      .get("/project/all")
      .then(res => dispatch(getProjectsSuccess(res.data)))
      .catch(err => dispatch(getProjectsError(err)));
  };
}
