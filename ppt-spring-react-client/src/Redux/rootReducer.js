import createProjectReducer from "./createProject/index";
import getProjectsReducer from "./getProjects/index";

const rootReducer = (state = {}, action) => {
  return {
    project: createProjectReducer(state.project, action),
    projects: getProjectsReducer(state.projects, action)
  };
};

export default rootReducer;
