import React from "react";
import styles from "../css/CreateTaskList.module.scss";

const CreateTaskList = () => {
  return (
    <div className={styles.CreateTaskList}>
      <form action="" className={styles.CreateTaskList_form}>
        <label htmlFor="listTitle" className={styles.CreateTaskList_form_label}>
          Title
        </label>
        <input
          type="text"
          name="listTitle"
          id="listTitle"
          className={styles.CreateTaskList_form_input}
        />
      </form>
    </div>
  );
};

export default CreateTaskList;
