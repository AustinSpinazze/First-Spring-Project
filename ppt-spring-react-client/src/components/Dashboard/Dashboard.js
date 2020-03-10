import React, { useEffect } from "react";
import ProjectItem from "../Project/ProjectItem";
import styles from "./Dashboard.module.css";
import CreateProjectButton from "../CreateProjectButton/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../../Redux/getProjects/actions";

const Dashboard = props => {
  const project = props.projects.projects;
  useEffect(() => {
    props.getProjects();
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <h1>Projects</h1>
      <br />
      <CreateProjectButton />
      <br />
      <hr />
      {project.projects.map(projects => (
        <ProjectItem key={projects.id} project={projects} />
      ))}
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
