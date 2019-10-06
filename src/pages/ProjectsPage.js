import React, { useState, useContext } from "react";
import styles from "../css/ProjectsPage.module.scss";
import Card from "../components/Card";
import AddCardButton from "../components/AddCardButton";
import AddCardModal from "../components/AddCardModal";
import { GlobalState } from "../context/GlobalStateProvider";
import CardsContainer from "../components/CardsContainer";
import { keyGenerator } from "../utils/keyGenerator";

const ProjectsPage = () => {
  const uuid = keyGenerator();
  const { state } = useContext(GlobalState);
  const [openCardModal, setOpenCardModal] = useState(false);
  const cardModalHandler = () => setOpenCardModal(!openCardModal);

  console.log(state);
  return (
    <>
      {/* Main section */}
      <section className={styles.ProjectsPage}>
        <CardsContainer>
          {state.map((card, index) => (
            <Card title={card.title} {...card} key={uuid + index} />
          ))}
          <AddCardButton openCardModal={cardModalHandler} />
        </CardsContainer>
      </section>

      {/* Create a card w/ this button */}
      <AddCardModal open={openCardModal} closeModal={cardModalHandler} />
    </>
  );
};

export default ProjectsPage;
