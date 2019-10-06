import React from "react";
import styles from "../css/AddCardModal.module.scss";
import sprite from "../assets/project-tracker.svg";

const AddCardModal = ({ open, closeModal, details }) => {
  return (
    <div
      className={
        open ? `${styles.AddCardModal} ${styles.show}` : styles.AddCardModal
      }
    >
      <svg className={styles.AddCardModal_close} onClick={closeModal}>
        <use xlinkHref={`${sprite}#icon-clearclose`}></use>
      </svg>
      <h2 className={styles.AddCardModal_title}>
        {details ? details.title : "No project selected"}
      </h2>
      <form className={styles.AddCardModal_form}>
        <label htmlFor="listTitle" className={styles.AddCardModal_form_label}>
          Create a Card Title
        </label>
        <input
          type="text"
          name="listTitle"
          id="listTitle"
          className={styles.AddCardModal_form_input}
          placeholder="some project..."
        />
        <label htmlFor="listItem" className={styles.AddCardModal_form_label}>
          Add a List to the Card
        </label>
        <input
          type="text"
          name="listItem"
          id="listItem"
          className={styles.AddCardModal_form_input}
          placeholder="some list of tasks..."
        />
      </form>
    </div>
  );
};

export default AddCardModal;
