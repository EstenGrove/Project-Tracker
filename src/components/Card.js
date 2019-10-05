import React, { useEffect } from "react";
import styles from "../css/Card.module.scss";
import sprite from "../assets/project-tracker.svg";
import CardTaskList from "./CardTaskList";
import { project } from "../mockdata/mockdata";
import { keyGenerator } from "../utils/keyGenerator";

const Card = () => {
  const { title, lists } = project;
  const uuid = keyGenerator();

  function mapListsToComponents(lists) {
    const all = Object.keys(lists);
    const items = Object.values(lists);

    if (all.length <= 0) return;
    return all.map((listTitle, index) => {
      return (
        <CardTaskList
          key={uuid + index}
          title={listTitle}
          tasks={items[index]}
        />
      );
    });
  }

  useEffect(() => {}, [lists]);

  return (
    <div className={styles.Card}>
      <div className={styles.Card_top}>
        <h4 className={styles.Card_top_title}>{title}</h4>
        <svg className={styles.Card_top_menu}>
          <use xlinkHref={`${sprite}#icon-keyboard_control`}></use>
        </svg>
      </div>
      <div className={styles.Card_inner}>
        {mapListsToComponents(lists)}
        <button className={styles.Card_inner_btn}>Create a list</button>
      </div>
    </div>
  );
};

export default Card;
