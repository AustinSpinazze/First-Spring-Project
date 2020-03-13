import React, { useEffect } from "react";
import ProjectItem from "../Project/ProjectItem";
import styles from "./Dashboard.module.css";
import CreateProjectButton from "../CreateProjectButton/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects, loadProjects } from "../../Redux/getProjects/actions";

const Dashboard = props => {
  useEffect(() => {
    console.log(props.projects.projects.loading, "");
    props.getProjects();
  }, [props.projects.projects]);

  return (
    <div className={styles.dashboardContainer}>
      <h1>Projects</h1>
      <br />
      <CreateProjectButton />
      <br />
      <hr />
      {!props.projects.projects.loading ? (
        <React.Fragment>
          {props.projects.projects.map(projects => (
            <ProjectItem
              key={projects.id}
              project={projects}
              projectLoader={props.getProjects}
            />
          ))}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className={styles.ldsSpinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => dispatch(getProjects()),
    loadProjects: () => dispatch(loadProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
