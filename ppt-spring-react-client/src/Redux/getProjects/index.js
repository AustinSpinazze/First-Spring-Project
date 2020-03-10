import { GET_PROJECTS_SUCCESS } from "./constants";

const initialState = {
  projects: [], //array of projects
  reRender: false
};

const getProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};

export default getProjectsReducer;
