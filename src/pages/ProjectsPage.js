import React, { useState, useContext } from "react";
import styles from "../css/ProjectsPage.module.scss";
import Card from "../components/Card";
import AddCardButton from "../components/AddCardButton";
import AddCardModal from "../components/AddCardModal";
import EditCardModal from "../components/EditCardModal";
import { GlobalState } from "../context/GlobalStateProvider";
import CardsContainer from "../components/CardsContainer";
import { keyGenerator } from "../utils/keyGenerator";

const ProjectsPage = () => {
  const uuid = keyGenerator();
  const { state, dispatch } = useContext(GlobalState);
  const [openCardModal, setOpenCardModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [active, setActive] = useState(undefined);
  const cardModalHandler = () => setOpenCardModal(!openCardModal);
  const editModalHandler = () => setOpenEditModal(!openEditModal);

  const [inputs, setInputs] = useState({
    cardTitle: undefined,
    cardTask: undefined,
    cardComment: undefined,
    cardDueDate: undefined,
    editCardTitle: undefined,
    editCardTask: undefined,
    editCardComment: undefined,
    editCardDueDate: undefined
  });

  const reset = () => {
    return setInputs({
      cardTitle: undefined,
      cardTask: undefined,
      cardComment: undefined,
      cardDueDate: undefined,
      createListTitle: undefined
    });
  };
  const handleEdits = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const submitEdits = e => {
    e.preventDefault();
  };

  const createOrEditList = card => {
    editModalHandler();
    setActive(card);
    console.log(card);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
    console.log(inputs);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { cardTitle, cardTask, cardComment, cardDueDate } = inputs;

    dispatch({
      type: "CREATE_CARD",
      data: {
        title: cardTitle,
        lists: {}
      }
    });
    cardModalHandler();
    return reset();
  };

  const deleteCard = card => {
    console.log(card.id);
    dispatch({
      type: "DELETE_CARD",
      data: {
        id: card.id
      }
    });
  };

  console.log(state);
  return (
    <>
      {/* Main section */}
      <section className={styles.ProjectsPage}>
        <CardsContainer>
          {state.map((card, index) => (
            <Card
              title={card.title}
              {...card}
              key={uuid + index}
              deleteCard={() => deleteCard(card)}
              createOrEditList={() => createOrEditList(card)}
              handleChange={handleChange}
            />
          ))}
          <AddCardButton openCardModal={cardModalHandler} />
        </CardsContainer>
      </section>

      {/* Create a card w/ this button */}
      <AddCardModal
        open={openCardModal}
        closeModal={cardModalHandler}
        handleChange={handleChange}
        handleSubmit={e => handleSubmit(e)}
        {...inputs}
      />
      <EditCardModal
        open={openEditModal}
        handleChange={handleEdits}
        handleSubmit={submitEdits}
        closeModal={editModalHandler}
        {...inputs}
        active={active}
      />
    </>
  );
};

export default ProjectsPage;
