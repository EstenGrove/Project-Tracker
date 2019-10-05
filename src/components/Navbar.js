import React from "react";
import styles from "../css/Navbar.module.scss";
import sprite from "../assets/project-tracker.svg";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <svg className={styles.Navbar_menu}>
        <use xlinkHref={`${sprite}#icon-grid`}></use>
      </svg>
      <div className={styles.Navbar_search}>
        <svg className={styles.Navbar_search_icon}>
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
        <input
          type="text"
          name="search"
          id="search"
          className={styles.Navbar_search_input}
          placeholder="search..."
        />
      </div>
      <div className={styles.Navbar_actions}>
        <svg className={styles.Navbar_actions_icon}>
          <use xlinkHref={`${sprite}#icon-plus`}></use>
        </svg>
        <svg className={styles.Navbar_actions_bell}>
          <use xlinkHref={`${sprite}#icon-notification`}></use>
        </svg>
        <div className={styles.Navbar_actions_notifications}>
          <span>3</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
