import React, { useEffect, useState } from "react";
import styles from "./ProjectItem.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProject } from "../../Redux/deleteProject/actions";
import DeleteModal from "../DeleteProject/DeleteModal";
import useDeleteModal from "../DeleteProject/UseDeleteModal";

const ProjectItem = props => {
  //make new delete loader function close modal here because onDeleteHandler can call any function here
  const { isShowing, toggle } = useDeleteModal();

  const deleteLoader = () => {
    console.log("deleteLoader");
    props.deleteProject(props.project.projectIdentifier);
    toggle();
    props.projectLoader();
  };

  return (
    <div className={styles.projectItemCardContainer}>
      <div className="container">
        <div className="row">
          <div className={styles.projectId}>
            <span className={styles.projectFrameworkType}>
              {props.project.projectIdentifier}
            </span>
          </div>
          <div className={styles.projectName}>
            <h3>{props.project.projectName}</h3>
            <p>{props.project.description}</p>
          </div>
          <div className={styles.projectButtons}>
            <ul>
              <li>
                <div className={styles.projectItemCardButton}>
                  <button href="#">
                    <span>Project Board</span>
                  </button>
                </div>
              </li>
              <li>
                <div className={styles.projectItemCardButton}>
                  <Link
                    to={`/updateProject/${props.project.projectIdentifier}`}
                  >
                    <button>
                      <span>Update Board</span>
                    </button>
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.deleteButton}>
                  <button onClick={toggle}>
                    <span>Delete Board</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <DeleteModal
        onDeleteHandler={deleteLoader}
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    deleteProjectState: state.deleteProject
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: payload => dispatch(deleteProject(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);
