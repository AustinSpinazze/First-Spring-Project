import React from "react";
import ProjectItem from "../Project/ProjectItem";
import styles from "./Dashboard.module.css";
import CreateProjectButton from "../CreateProjectButton/CreateProjectButton";

const Dashboard = props => {
  return (
    <div className={styles.dashboardContainer}>
      <h1>Projects</h1>
      <br />
      <CreateProjectButton />
      <br />
      <hr />
      <ProjectItem />
    </div>
  );
};

export default Dashboard;
