import React from "react";
import ProjectItem from "../Project/ProjectItem";
import styles from "./Dashboard.module.css";

const Dashboard = props => {
  return (
    <div className={styles.dashboardContainer}>
      <h1>Projects</h1>
      <br />
      <button href="ProjectForm.html">
        <span>Create a Project</span>
      </button>
      <br />
      <hr />
      <ProjectItem />
    </div>
  );
};

export default Dashboard;
