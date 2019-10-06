import React from "react";
import styles from "../css/AddCardModal.module.scss";
import sprite from "../assets/project-tracker.svg";

const AddCardModal = ({
  open,
  closeModal,
  details,
  handleChange,
  handleSubmit
}) => {
  return (
    <div
      className={
        open ? `${styles.AddCardModal} ${styles.show}` : styles.AddCardModal
      }
    >
      <svg className={styles.AddCardModal_close} onClick={closeModal}>
        <use xlinkHref={`${sprite}#icon-clearclose`}></use>
      </svg>

      {/* TOP SECTION */}
      <div className={styles.AddCardModal_top}>
        <svg className={styles.AddCardModal_top_icon}>
          <use xlinkHref={`${sprite}#icon-developer_board`}></use>
        </svg>
        <h2 className={styles.AddCardModal_top_title}>
          {details ? details.title : "No project selected"}
        </h2>
      </div>
      <form className={styles.AddCardModal_form}>
        <label htmlFor="listTitle" className={styles.AddCardModal_form_label}>
          Create a card title
        </label>
        <input
          type="text"
          name="listTitle"
          id="listTitle"
          className={styles.AddCardModal_form_input}
          placeholder="some project..."
          onChange={handleChange}
        />

        <hr style={{ width: "100%", opacity: ".3", marginBottom: "3rem" }} />
        {/* CARD ADDONS */}
        <div className={styles.AddCardModal_form_addons}>
          <svg className={styles.AddCardModal_form_icon}>
            <use xlinkHref={`${sprite}#icon-view_list`}></use>
          </svg>
          <h4 className={styles.AddCardModal_form_addons_title}>
            Card Add-ons
          </h4>
        </div>
        <label htmlFor="listTask" className={styles.AddCardModal_form_label}>
          Add a list to the card
        </label>
        <input
          type="text"
          name="listTask"
          id="listTask"
          className={styles.AddCardModal_form_input}
          placeholder="some list of tasks..."
          onChange={handleChange}
        />
        <div className={styles.AddCardModal_form_comment}>
          <div className={styles.AddCardModal_form_comment_iconWrapper}>
            <svg className={styles.AddCardModal_form_comment_iconWrapper_icon}>
              <use xlinkHref={`${sprite}#icon-list`}></use>
            </svg>
            <label
              htmlFor="listComment"
              className={styles.AddCardModal_form_label}
            >
              Add a comment
            </label>
          </div>
          <textarea
            type="text"
            name="listComment"
            id="listComment"
            className={styles.AddCardModal_form_comment_textarea}
            placeholder="Write a comment..."
            resize={"none"}
            required={false}
            onChange={handleChange}
          />
        </div>
        <div className={styles.AddCardModal_form_dates}>
          <svg className={styles.AddCardModal_form_dates_icon}>
            <use xlinkHref={`${sprite}#icon-calendar1`}></use>
          </svg>
          <label htmlFor="dueDate" className={styles.AddCardModal_form_label}>
            Due Date
          </label>
        </div>
        <input
          type="datetime-local"
          name="dueDate"
          id="dueDate"
          className={styles.AddCardModal_form_input}
          placeholder="Set a due date..."
          onChange={handleChange}
        />

        <button
          className={styles.AddCardModal_form_btn}
          onSubmit={e => handleSubmit(e)}
          onClick={e => handleSubmit(e)}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddCardModal;
