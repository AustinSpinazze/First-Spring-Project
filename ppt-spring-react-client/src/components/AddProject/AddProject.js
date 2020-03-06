import React, { useEffect } from "react";
import styles from "./AddProjects.module.css";
import { connect } from "react-redux";
import {
  validateProjectId,
  validateProjectDescription,
  validateProjectName,
  projectStartDate,
  projectEndDate,
  submitValidateHandler
} from "../../Redux/createProject/action";
import { withRouter } from "react-router";
import history from "../../history";

const AddProject = props => {
  useEffect(() => {
    if (props.form.submit === true) {
      props.history.push("/dashboard");
    }
  }, [props.form.submit]);

  const validationHandler = e => {
    let today = new Date().toISOString().substring(0, 10);
    console.log(today, e.target.value);
    if (Date.parse(props.form.start_date) < Date.parse(today)) {
      alert("Start date cannot be before current date");
    } else if (
      Date.parse(props.form.end_date) < Date.parse(props.form.start_date) ||
      Date.parse(props.form.end_date) === Date.parse(props.form.start_date)
    ) {
      alert("End date must be greater than start date");
    } else if (
      props.form.projectName === "" ||
      props.form.projectIdentifier === "" ||
      props.form.description === "" ||
      props.form.start_date === "" ||
      props.form.end_date === ""
    ) {
      alert("All input fields are required to create a new project");
    } else {
      let newProject = {
        projectName: props.form.projectName,
        projectIdentifier: props.form.projectIdentifier,
        description: props.form.description,
        start_date: props.form.start_date,
        end_date: props.form.end_date
      };
      console.log(newProject);
      props.submitValidateHandler(newProject);
    }
  };

  return (
    <div className={styles.addProjectContainer}>
      <h5>Create / Edit Project form</h5>
      <hr />
      <form>
        <div>
          <input
            defaultValue=""
            type="text"
            placeholder="Project Name"
            name="projectName"
            style={
              props.form.projectNameError
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
            defaultValue=""
            style={
              props.form.projectIdentifierError
                ? { backgroundColor: "#F08080", opacity: "0.8" }
                : { backgroundColor: "white" }
            }
            onChange={e => props.validateProjectId(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Project Description"
            name="description"
            defaultValue=""
            style={
              props.form.descriptionError
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
            value={props.form.start_date}
            onChange={e => props.projectStartDate(e.target.value)}
          />
        </div>
        <h6>Estimated End Date</h6>
        <div>
          <input
            type="date"
            name="end_date"
            value={props.form.end_date}
            onChange={e => props.projectEndDate(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={e => {
            validationHandler(e);
          }}
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    form: state.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    validateProjectName: payload => dispatch(validateProjectName(payload)),
    validateProjectId: payload => dispatch(validateProjectId(payload)),
    validateProjectDescription: payload =>
      dispatch(validateProjectDescription(payload)),
    projectStartDate: payload => dispatch(projectStartDate(payload)),
    projectEndDate: payload => dispatch(projectEndDate(payload)),
    submitValidateHandler: payload => dispatch(submitValidateHandler(payload))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddProject)
);
