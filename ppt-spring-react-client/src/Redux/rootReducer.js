import createProjectReducer from "./createProject/index";

const rootReducer = (state = {}, action) => {
  return {
    project: createProjectReducer(state.project, action)
  };
};

export default rootReducer;
