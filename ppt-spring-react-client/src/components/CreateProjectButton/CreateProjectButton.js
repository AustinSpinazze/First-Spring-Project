import React from "react";
import { Link } from "react-router-dom";
import styles from "./CreateProjectButton.module.css";

const CreateProjectButton = () => {
  return (
    <div className={styles.CreateProjectButton}>
      <Link to="/addProject">
        <button>
          <span>Create a Project</span>
        </button>
      </Link>
    </div>
  );
};

export default CreateProjectButton;
