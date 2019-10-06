import React from "react";
import styles from "../css/CardActionsModal.module.scss";
import sprite from "../assets/project-tracker.svg";

const CardActionsModal = ({ show, close, deleteCard }) => {
  return (
    <div
      className={
        show
          ? `${styles.CardActionsModal} ${styles.show}`
          : styles.CardActionsModal
      }
    >
      <svg className={styles.CardActionsModal_close} onClick={close}>
        <use xlinkHref={`${sprite}#icon-close`}></use>
      </svg>
      <div className={styles.CardActionsModal_inner}>
        <h4 className={styles.CardActionsModal_inner_title}>Card Actions</h4>
        <hr style={{ marginBottom: "2rem" }} />
        <ul className={styles.CardActionsModal_inner_options}>
          <li className={styles.CardActionsModal_inner_options_item}>
            <div className={styles.CardActionsModal_inner_options_item_text}>
              Add List...
            </div>
            <svg
              className={styles.CardActionsModal_inner_icon}
              fill="hsl(165, 82%, 51%)"
            >
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </svg>
          </li>
          <li className={styles.CardActionsModal_inner_options_item}>
            <div className={styles.CardActionsModal_inner_options_item_text}>
              Edit List...
            </div>
            <svg
              className={styles.CardActionsModal_inner_icon}
              fill="hsla(218, 54%, 20%, 1)"
            >
              <use xlinkHref={`${sprite}#icon-createmode_editedit`}></use>
            </svg>
          </li>
          <li className={styles.CardActionsModal_inner_options_item}>
            <div className={styles.CardActionsModal_inner_options_item_text}>
              Remove List...
            </div>
            <svg
              className={styles.CardActionsModal_inner_icon}
              fill="hsla(352, 70%, 50%, 1)"
            >
              <use xlinkHref={`${sprite}#icon-clearclose`}></use>
            </svg>
          </li>
          <li className={styles.CardActionsModal_inner_options_item}>
            <div
              className={styles.CardActionsModal_inner_options_item_text}
              style={{ color: "hsla(352, 70%, 50%, 1)" }}
              onClick={deleteCard}
            >
              Delete Card...
            </div>
            <svg
              className={styles.CardActionsModal_inner_icon}
              fill="hsla(352, 70%, 50%, 1)"
            >
              <use xlinkHref={`${sprite}#icon-trash`}></use>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardActionsModal;
