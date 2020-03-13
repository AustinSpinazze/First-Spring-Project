import axios from "../../axios-config";
import { DELETE_PROJECT, DELETE_PROJECT_FAILURE } from "./constants";

export const deleteProjectSuccess = () => {
  return {
    type: DELETE_PROJECT
  };
};

export const deleteProjectFailure = () => {
  return {
    type: DELETE_PROJECT_FAILURE
  };
};

export function deleteProject(id) {
  return dispatch => {
    // set loading to true
    axios
      .delete(`/project/${id}`)
      .then(() => {
        //make dispatch to get request (get project thunk)
        dispatch(deleteProjectSuccess());
      })
      .catch(err => dispatch(deleteProjectFailure(err)));
  };
}
