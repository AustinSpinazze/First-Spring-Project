import React, { useEffect } from "react";
import ProjectItem from "../Project/ProjectItem";
import styles from "./Dashboard.module.css";
import CreateProjectButton from "../CreateProjectButton/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../../Redux/getProjects/actions";

const Dashboard = props => {
  useEffect(() => {
    console.log("blah");
    getProjects();
  }, []);

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

const mapStateToProps = state => {
  return {
    projects: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => dispatch(getProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
