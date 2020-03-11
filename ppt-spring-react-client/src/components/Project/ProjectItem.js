import React from "react";
import styles from "./ProjectItem.module.css";
import { Link } from "react-router-dom";

const ProjectItem = props => {
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
                  <button href="#">
                    <span>Delete Board</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
