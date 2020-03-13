import { GET_PROJECTS_SUCCESS, PROJECTS_LOADING } from "./constants";

const initialState = {
  projects: [], //array of projects
  loading: false
};

const getProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload };
    case PROJECTS_LOADING:
      const changedValue = !state.loading;
      return { ...state, loading: changedValue };
    default:
      return state;
  }
};

export default getProjectsReducer;
