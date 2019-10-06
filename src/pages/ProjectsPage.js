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
  const { state, dispatch } = useContext(GlobalState);
  const [isEditing, setIsEditing] = useState(false);
  const [openCardModal, setOpenCardModal] = useState(false);
  const cardModalHandler = () => setOpenCardModal(!openCardModal);

  const [inputs, setInputs] = useState({
    cardTitle: undefined,
    cardTask: undefined,
    cardComment: undefined,
    cardDueDate: undefined
  });

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
    setInputs({});
    cardModalHandler();
  };

  const createList = card => {
    setIsEditing(!isEditing);
    console.log(card);
    // dispatch({
    //   type: "CREATE_LIST",
    //   data: {
    //     id: card.id,
    //     newList: [],
    //     newTask: ""
    //   }
    // });
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
              createList={() => createList(card)}
              isEditing={isEditing}
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
    </>
  );
};

export default ProjectsPage;
