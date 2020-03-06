import { GET_PROJECTS_SUCCESS } from "./constants";

const initialState = {
  projects: [], //array of projects
  project: {}, // single project for update case
  reRender: false
};

const getProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload }; // will need to change action.payload later on
    default:
      return state;
  }
};

export default getProjectsReducer;
