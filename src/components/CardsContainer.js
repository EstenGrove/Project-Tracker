import React from "react";
import styles from "../css/CardsContainer.module.scss";

const CardsContainer = ({ children }) => {
  return <div className={styles.CardsContainer}>{children}</div>;
};

export default CardsContainer;
