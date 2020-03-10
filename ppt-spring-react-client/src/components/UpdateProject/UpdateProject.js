import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import styles from "./UpdateProject.module.css";
import {
  updateProject,
  validateProjectName,
  validateProjectDescription,
  projectEndDate,
  submitValidateHandler,
  resetSubmit
} from "../../Redux/updateProject/actions";
import { useHistory } from "react-router-dom";

const UpdateProject = props => {
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (props.updateForm.submit === true) {
      props.resetSubmit();
      history.push("/dashboard");
    }
  }, [props.updateForm.submit]);

  useEffect(() => {
    const { id } = props.match.params;
    props.updateProject(id);
  }, []);

  const validationHandler = e => {
    let today = new Date().toISOString().substring(0, 10);
    if (Date.parse(props.updateForm.start_date) < Date.parse(today)) {
      alert("Start date cannot be before current date");
    } else if (
      Date.parse(props.updateForm.end_date) <
        Date.parse(props.updateForm.start_date) ||
      Date.parse(props.updateForm.end_date) ===
        Date.parse(props.updateForm.start_date)
    ) {
      alert("End date must be greater than start date");
    } else if (
      props.updateForm.projectName === "" ||
      props.updateForm.description === "" ||
      props.updateForm.end_date === ""
    ) {
      alert("All input fields are required to create a new project");
    } else {
      props.submitValidateHandler();
    }
  };

  return props.updateForm.loading ? (
    <div>Spinner</div>
  ) : (
    <div className={styles.updateProjectContainer}>
      <h5>Update Project</h5>
      <hr />
      <form>
        <div>
          <input
            value={props.updateForm.projectName || ""}
            style={
              props.updateForm.projectNameError
                ? { backgroundColor: "#F08080", opacity: "0.8" }
                : { backgroundColor: "white" }
            }
            onChange={e => props.validateProjectName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Unique Project ID"
            name="projectIdentifier"
            value={props.updateForm.projectIdentifier || ""}
            disabled
            // style={
            //   props.form.projectIdentifierError
            //     ? { backgroundColor: "#F08080", opacity: "0.8" }
            //     : { backgroundColor: "white" }
            // }
            // onChange={e => props.validateProjectId(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Project Description"
            name="description"
            value={props.updateForm.description || "absolute"}
            style={
              props.updateForm.descriptionError
                ? { backgroundColor: "#F08080", opacity: "0.8" }
                : { backgroundColor: "white" }
            }
            onChange={e => props.validateProjectDescription(e.target.value)}
          />
        </div>
        <h6>Start Date</h6>
        <div>
          <input
            type="date"
            name="start_date"
            value={props.updateForm.start_date || ""}
            disabled
          />
        </div>
        <h6>Estimated End Date</h6>
        <div>
          <input
            type="date"
            name="end_date"
            value={props.updateForm.end_date || ""}
            onChange={e => props.projectEndDate(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={e => {
            validationHandler(e);
          }}
          disabled={disabled}
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    updateForm: state.updateProject
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProject: payload => dispatch(updateProject(payload)),
    validateProjectName: payload => dispatch(validateProjectName(payload)),
    validateProjectDescription: payload =>
      dispatch(validateProjectDescription(payload)),
    projectEndDate: payload => dispatch(projectEndDate(payload)),
    submitValidateHandler: payload => dispatch(submitValidateHandler(payload)),
    resetSubmit: () => dispatch(resetSubmit())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UpdateProject)
);
