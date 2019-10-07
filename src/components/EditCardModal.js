import React from "react";
import styles from "../css/EditCardModal.module.scss";
import sprite from "../assets/project-tracker.svg";

const EditCardModal = ({
  active,
  open,
  closeModal,
  details,
  handleChange,
  handleSubmit,
  ...rest
}) => {
  function mapListItemsToDom(items) {
    const { lists } = active;
    console.log(lists);
    const listTitles = Object.keys(lists);
    const [listTasks] = Object.values(lists);
    console.log(listTasks.map(x => x.title));

    listTitles.map((title, index) => {
      return (
        <>
          <h1>{title}</h1>
          <ul>
            {listTasks.map((t, i) => (
              <li>{t}</li>
            ))}
          </ul>
        </>
      );
    });
  }

  return (
    <div
      className={
        open ? `${styles.EditCardModal} ${styles.show}` : styles.EditCardModal
      }
    >
      <svg className={styles.EditCardModal_close} onClick={closeModal}>
        <use xlinkHref={`${sprite}#icon-clearclose`}></use>
      </svg>

      {/* TOP SECTION */}
      <div className={styles.EditCardModal_top}>
        <svg className={styles.EditCardModal_top_icon}>
          <use xlinkHref={`${sprite}#icon-developer_board`}></use>
        </svg>
        <h2 className={styles.EditCardModal_top_title}>
          {details ? details.title : "Edit Project"}
        </h2>
      </div>
      <form className={styles.EditCardModal_form}>
        <label
          htmlFor="editCardTitle"
          className={styles.EditCardModal_form_label}
        >
          Edit card title
        </label>
        <input
          type="text"
          name="editCardTitle"
          id="editCardTitle"
          className={styles.EditCardModal_form_input}
          placeholder="some project..."
          onChange={handleChange}
          value={active && active.title}
        />
        <button
          className={styles.EditCardModal_form_btn}
          onSubmit={e => handleSubmit(e)}
          onClick={e => handleSubmit(e)}
        >
          Save
        </button>
        <hr style={{ width: "100%", opacity: ".3", marginBottom: "3rem" }} />
        {/* CARD ADDONS */}
        <div className={styles.EditCardModal_form_addons}>
          <svg className={styles.EditCardModal_form_icon}>
            <use xlinkHref={`${sprite}#icon-view_list`}></use>
          </svg>
          <h4 className={styles.EditCardModal_form_addons_title}>
            Edit Add-ons
          </h4>
        </div>
        {active && mapListItemsToDom(active)}
        {/* EDIT LIST ITEMS */}
        {/* EDIT LIST ITEMS */}
        {/* EDIT LIST ITEMS */}
        {/* EDIT LIST ITEMS */}
        {/* EDIT LIST ITEMS */}
        {/* EDIT LIST ITEMS */}
        {/* EDIT LIST ITEMS */}
        {/* EDIT LIST ITEMS */}

        <div className={styles.EditCardModal_form_comment}>
          <div className={styles.EditCardModal_form_comment_iconWrapper}>
            <svg className={styles.EditCardModal_form_comment_iconWrapper_icon}>
              <use xlinkHref={`${sprite}#icon-list`}></use>
            </svg>
            <label
              htmlFor="editCardComment"
              className={styles.EditCardModal_form_label}
            >
              Edit comment(s)
            </label>
          </div>
          <textarea
            type="text"
            name="editCardComment"
            id="editCardComment"
            className={styles.EditCardModal_form_comment_textarea}
            placeholder="Write a comment..."
            resize={"none"}
            required={false}
            onChange={handleChange}
            value={active && active.editCardComment}
          />
        </div>
        <div className={styles.EditCardModal_form_dates}>
          <svg className={styles.EditCardModal_form_dates_icon}>
            <use xlinkHref={`${sprite}#icon-calendar1`}></use>
          </svg>
          <label
            htmlFor="editCardDueDate"
            className={styles.EditCardModal_form_label}
          >
            Change Due Date
          </label>
        </div>
        <input
          type="datetime-local"
          name="editCardDueDate"
          id="editCardDueDate"
          className={styles.EditCardModal_form_input}
          placeholder="Set a due date..."
          onChange={handleChange}
          value={active && active.editCardDueDate}
        />

        <button
          className={styles.EditCardModal_form_btn}
          onSubmit={e => handleSubmit(e)}
          onClick={e => handleSubmit(e)}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditCardModal;
