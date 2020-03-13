import React from "react";
import ReactDOM from "react-dom";
import styles from "./DeleteModal.module.css";

const DeleteModal = ({ isShowing, hide, onDeleteHandler }) =>
  isShowing &&
  ReactDOM.createPortal(
    <React.Fragment>
      <div className={styles.modalOverlay} />
      <div
        className={styles.modalWrapper}
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h2>Are you sure you want to delete this project?</h2>
          </div>
          <div className={styles.modalBody}>
            <p>This process cannot be undone!</p>
          </div>
          <div className={styles.deleteButton} onClick={onDeleteHandler}>
            <button>Delete</button>
          </div>
          <div className={styles.cancelButton}>
            <button data-dismiss="modal" onClick={hide}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>,
    document.getElementById("modal-hook")
  );
export default DeleteModal;
