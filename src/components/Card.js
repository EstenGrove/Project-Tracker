import React, { useState } from "react";
import styles from "../css/Card.module.scss";
import sprite from "../assets/project-tracker.svg";
import CardTaskList from "./CardTaskList";
import CardActionsModal from "./CardActionsModal";
import { keyGenerator } from "../utils/keyGenerator";

const Card = ({ createOrEditList, deleteCard, ...card }) => {
  const uuid = keyGenerator();
  const [showActionsModal, setShowActionsModal] = useState(false);

  const openActionsModal = (...card) => {
    setShowActionsModal(!showActionsModal);
    console.log(card);
  };

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

  return (
    <div className={styles.Card}>
      <div className={styles.Card_top}>
        <h4 className={styles.Card_top_title}>{card && card.title}</h4>
        <svg
          className={styles.Card_top_menu}
          onClick={() => openActionsModal(card)}
        >
          <use xlinkHref={`${sprite}#icon-keyboard_control`}></use>
        </svg>
      </div>
      <div className={styles.Card_inner}>
        {card && mapListsToComponents(card.lists)}
        <div className={styles.Card_inner_editList}>
          <button
            className={styles.Card_inner_btn}
            onClick={() => createOrEditList(card)}
          >
            Create a list
          </button>
        </div>
      </div>
      <CardActionsModal
        show={showActionsModal}
        close={() => setShowActionsModal(false)}
        deleteCard={() => deleteCard(card)}
      />
    </div>
  );
};

export default Card;
