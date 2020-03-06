import axios from "../../axios-config";
import { GET_PROJECTS_SUCCESS, GET_PROJECTS_ERROR } from "./constants";

export const getProjectsSuccess = payload => {
  console.log("getProjectSuccess", payload);
  return {
    type: GET_PROJECTS_SUCCESS,
    payload
  };
};

export const getProjectsError = () => {
  console.log("there was an error");
  return {
    type: GET_PROJECTS_ERROR
  };
};

export function getProjects() {
  console.log("getProject");
  return dispatch => {
    axios
      .get("/project/all")
      .then(res => dispatch(getProjectsSuccess(res.data)))
      .catch(err => dispatch(getProjectsError(err)));
  };
}
