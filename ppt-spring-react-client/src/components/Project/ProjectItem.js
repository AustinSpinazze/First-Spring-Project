import React from "react";
import styles from "./ProjectItem.module.css";

const ProjectItem = props => {
  return (
    <div className={styles.projectItemCardContainer}>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <span className={styles.projectFrameworkType}>REACT</span>
          </div>
          <div className="col-sm">
            <h3>Spring / React Project</h3>
            <p>Project to create a Kanban Board with Spring Boot and React</p>
          </div>
          <div className="col-md">
            <ul>
              <li>
                <button href="#">
                  <span>Project Board</span>
                </button>
              </li>
              <li>
                <button href="#">
                  <span>Update Board</span>
                </button>
              </li>
              <li>
                <button href="#">
                  <span>Delete Board</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
