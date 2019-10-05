import React from "react";
import styles from "../css/CardTask.module.scss";
import sprite from "../assets/project-tracker.svg";

const CardTask = ({ task }) => {
  return (
    <div className={styles.CardTask}>
      <div className={styles.CardTask_inner}>
        <h4 className={styles.CardTask_inner_title}>{task.title}</h4>
        <svg className={styles.CardTask_inner_edit}>
          <use xlinkHref={`${sprite}#icon-edit`}></use>
        </svg>
      </div>
    </div>
  );
};

export default CardTask;
