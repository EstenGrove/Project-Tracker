import React, { useState } from "react";
import styles from "../css/ProjectsPage.module.scss";
import Card from "../components/Card";
import AddCardButton from "../components/AddCardButton";
import AddCardModal from "../components/AddCardModal";

const ProjectsPage = () => {
  const [openCardModal, setOpenCardModal] = useState(false);

  const cardModalHandler = () => setOpenCardModal(!openCardModal);

  return (
    <>
      <section className={styles.ProjectsPage}>
        <Card title="Admin Dashboard" />
        <AddCardButton openCardModal={cardModalHandler} />
      </section>
      <AddCardModal open={openCardModal} closeModal={cardModalHandler} />
    </>
  );
};

export default ProjectsPage;
