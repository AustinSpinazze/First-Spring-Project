import React, { useEffect } from "react";
import styles from "./AddProjects.module.css";
import { connect } from "react-redux";
import {
  validateProjectId,
  validateProjectDescription,
  validateProjectName,
  projectStartDate,
  projectEndDate,
  submitHandler
} from "../../Redux/createProject/action";

const AddProject = props => {
  const submitDateHandler = e => {
    let today = new Date().toISOString().substring(0, 10);
    console.log(today, e.target.value);
    if (Date.parse(props.form.start_date) < Date.parse(today)) {
      alert("Start date cannot be before current date");
    } else if (
      Date.parse(props.form.end_date) < Date.parse(props.form.start_date) ||
      Date.parse(props.form.end_date) === Date.parse(props.form.start_date)
    ) {
      alert("End date must be greater than start date");
    } else {
      props.submitHandler();
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
        <button type="button" onClick={submitDateHandler}>
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
    submitHandler: () => dispatch(submitHandler())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
