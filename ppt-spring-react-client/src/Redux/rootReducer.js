import createProjectReducer from "./createProject/index";
import getProjectsReducer from "./getProjects/index";
import updateProjectReducer from "./updateProject/index";

const rootReducer = (state = {}, action) => {
  return {
    project: createProjectReducer(state.project, action),
    projects: getProjectsReducer(state.projects, action),
    updateProject: updateProjectReducer(state.updateProject, action)
  };
};

export default rootReducer;
