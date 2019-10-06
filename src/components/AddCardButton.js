import React from "react";
import styles from "../css/AddCardButton.module.scss";
import sprite from "../assets/project-tracker.svg";

const AddCardButton = ({ openCardModal }) => {
  return (
    <div className={styles.AddCardButton} onClick={openCardModal}>
      <svg className={styles.AddCardButton_icon}>
        <use xlinkHref={`${sprite}#icon-plus`}></use>
      </svg>
      <button className={styles.AddCardButton_btn}>Add Card</button>
    </div>
  );
};

export default AddCardButton;
