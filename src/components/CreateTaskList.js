import React from "react";
import styles from "../css/CreateTaskList.module.scss";

const CreateTaskList = () => {
  return (
    <div className={styles.CreateTaskList}>
      <form className={styles.CreateTaskList_form}>
        <label htmlFor="listTitle" className={styles.CreateTaskList_form_label}>
          Title
        </label>
        <input
          type="text"
          name="listTitle"
          id="listTitle"
          className={styles.CreateTaskList_form_input}
        />
        <label htmlFor="listItem" className={styles.CreateTaskList_form_label}>
          Task
        </label>
        <input
          type="text"
          name="listItem"
          id="listItem"
          className={styles.CreateTaskList_form_input}
          placeholder="Enter a task..."
        />
      </form>
    </div>
  );
};

export default CreateTaskList;
