import React from "react";
import styles from "../css/CardTaskList.module.scss";
import CardTask from "./CardTask";
import { keyGenerator } from "../utils/keyGenerator";

const CardTaskList = ({ tasks, title }) => {
  const uuid = keyGenerator();

  // console.log(tasks);
  // console.log(title);
  return (
    <div className={styles.CardTaskList}>
      <div className={styles.CardTaskList_inner}>
        <h2 className={styles.CardTaskList_inner_title}>{title || ""}</h2>
        {tasks &&
          tasks.map((task, index) => (
            <CardTask task={task} key={uuid + index} />
          ))}
      </div>
    </div>
  );
};

export default CardTaskList;
