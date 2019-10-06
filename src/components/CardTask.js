import React from "react";
import styles from "../css/CardTask.module.scss";
import sprite from "../assets/project-tracker.svg";

const CardTask = ({ task, options = false }) => {
  return (
    <div className={styles.CardTask}>
      <div className={styles.CardTask_inner}>
        <h4 className={styles.CardTask_inner_title}>{task.title}</h4>
        <svg className={styles.CardTask_inner_edit}>
          <use xlinkHref={`${sprite}#icon-edit`}></use>
        </svg>
      </div>
      {options ? (
        <div className={styles.CardTask_options}>
          <svg className={styles.CardTask_options_icon}>
            <use xlinkHref={`${sprite}#icon-view-hide`}></use>
          </svg>
          <div className={styles.CardTask_options_comments}>
            <svg className={styles.CardTask_options_comments_icon}>
              <use xlinkHref={`${sprite}#icon-comment`}></use>
            </svg>
            <span className={styles.CardTask_options_comments_commentCount}>
              1
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CardTask;
