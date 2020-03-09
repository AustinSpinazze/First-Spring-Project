import React from "react";
import styles from "./ProjectItem.module.css";

const ProjectItem = props => {
  console.log();
  return (
    <div className={styles.projectItemCardContainer}>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <span className={styles.projectFrameworkType}>
              {props.project.projectIdentifier}
            </span>
          </div>
          <div className="col-sm">
            <h3>{props.project.projectName}</h3>
            <p>{props.project.description}</p>
          </div>
          <div className="col-md">
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
                  <button href="#">
                    <span>Update Board</span>
                  </button>
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
