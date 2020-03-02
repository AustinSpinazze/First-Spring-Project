import React, { useState } from "react";
import styles from "./AddProjects.module.css";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectIdentifier, setProjectIdentifier] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  //   const [date] = useState({
  //     sDate: "",
  //     eDate: ""
  //   });
  const [projectNameError, setProjectNameError] = useState(false);
  const [projectIdentifierError, setProjectIdentifierError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    if (start_date >= end_date) {
      alert("Please make sure start date is before end date and not the same");
    } else {
      const newProject = {
        projectName: { projectName },
        projectIdentifier: { projectIdentifier },
        description: { description },
        start_date: { start_date },
        end_date: { end_date }
      };
      console.log(newProject);
    }
  };

  const inputCheck = event => {
    let inputName = event.target.name;
    if (inputName === "projectName") {
      if (event.target.value.length <= 30) {
        setProjectName(event.target.value);
        setProjectNameError(false);
      } else {
        setProjectNameError(true);
      }
    } else if (inputName === "projectIdentifier") {
      if (event.target.value.length < 6) {
        if (event.target.value.length >= 4) {
          setProjectIdentifier(event.target.value);
          setProjectIdentifierError(false);
        } else if (event.target.value.length === 0) {
          setProjectIdentifier(event.target.value);
          setProjectIdentifierError(false);
        } else {
          setProjectIdentifier(event.target.value);
          setProjectIdentifierError(true);
        }
      } else {
        setProjectIdentifierError(true);
      }
    } else if (inputName === "description") {
      if (event.target.value.length < 176) {
        setDescription(event.target.value);
        setDescriptionError(false);
      } else {
        setDescriptionError(true);
      }
    }
  };

  //   const dateHandler = (startD, endD) => {
  //     setDates(prevState => {
  //       if (endD) {
  //         return {
  //           ...prevState,
  //           endDate: endD
  //         };
  //       }
  //       return {
  //         ...prevState,
  //         startDate: startD
  //       };
  //     });
  //   };

  return (
    <div className={styles.addProjectContainer}>
      <h5>Create / Edit Project form</h5>
      <hr />
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Project Name"
            name="projectName"
            value={projectName}
            style={
              projectNameError
                ? { backgroundColor: "#F08080", opacity: "0.8" }
                : { backgroundColor: "white" }
            }
            onChange={inputCheck}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Unique Project ID"
            name="projectIdentifier"
            value={projectIdentifier}
            style={
              projectIdentifierError
                ? { backgroundColor: "#F08080", opacity: "0.8" }
                : { backgroundColor: "white" }
            }
            onChange={inputCheck}
          />
        </div>
        <div>
          <textarea
            placeholder="Project Description"
            name="description"
            value={description}
            style={
              descriptionError
                ? { backgroundColor: "#F08080", opacity: "0.8" }
                : { backgroundColor: "white" }
            }
            onChange={inputCheck}
          />
        </div>
        <h6>Start Date</h6>
        <div>
          <input
            type="date"
            name="start_date"
            onChange={event => setStartDate(event.target.value)}
          />
        </div>
        <h6>Estimated End Date</h6>
        <div>
          <input
            type="date"
            name="end_date"
            onChange={event => setEndDate(event.target.value)}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProject;
