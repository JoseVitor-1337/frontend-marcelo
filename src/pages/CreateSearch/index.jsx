import React, { useEffect, useState } from "react";
import { QuestionItem } from "../../components/Questions";
import { NavigationHeader } from "../../components/Navigation";
import { TextInput, Textarea, Select } from "../../components/Inputs";
import { PreviewQuestionModal } from "../../components/Modals";

import "./style.css";

const CreateSearch = () => {
  const [questionInfoToModal, setQuestionInfoToModal] = useState({});
  const [openPreviewQuestionModal, setOpenPreviewQuestionModal] = useState(
    false
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [retries, setRetries] = useState("");
  const [MTS, setMTS] = useState("");
  const [interval, setInterval] = useState("");

  const [questions, setQuestions] = useState([
    {
      type: "",
      structure: "",
      stimulus: "",
      question: "",
      alternatives: [
        {
          correct: "",
          option: "",
          answer: "",
          image: "",
        },
      ],
    },
  ]);

  function createSearchConfig(event) {
    event.preventDefault();

    console.log({
      title,
      type,
      content,
      description,
      retries: Number(retries),
      interval: Number(interval),
      MTS,
    });
  }

  function selectQuestion(questionIndex) {
    setSelectedIndex(questionIndex);
  }

  function createNewQuestionField() {
    setQuestions([
      ...questions,
      {
        type: "",
        structure: "",
        stimulus: "",
        question: "",
        alternatives: [
          {
            correct: "",
            option: "",
            answer: "",
            image: "",
          },
        ],
      },
    ]);
  }

  function openModalToPreviewTheQuestion(question) {
    setOpenPreviewQuestionModal(true);
    setQuestionInfoToModal(question);
  }

  const navigationItems = [
    {
      to: "/researcher/searchs",
      title: "Pesquisas",
    },
    {
      to: "/researcher/create",
      title: "Criar Pesquisa",
    },
    {
      to: "/",
      title: "Sair",
    },
  ];

  useEffect(() => {}, []);

  return (
    <>
      {openPreviewQuestionModal !== true ? (
        <>
          <NavigationHeader items={navigationItems} />
          <div className="search-config">
            <header>
              <h2>Configurações da Pesquisa</h2>
            </header>

            <form onSubmit={createSearchConfig}>
              <div className="first-form-group">
                <TextInput
                  name="searchType"
                  pattern={".{4,}"}
                  label="Tipo"
                  value={type}
                  setValue={setType}
                />

                <TextInput
                  name="title"
                  label="Título"
                  pattern={".{4,}"}
                  value={title}
                  setValue={setTitle}
                />

                <TextInput
                  name="content"
                  label="Conteúdo"
                  pattern={".{4,}"}
                  value={content}
                  setValue={setContent}
                />

                <TextInput
                  name="retries"
                  pattern={"^[0-9]{1}$"}
                  label="Retentativas"
                  value={retries}
                  setValue={setRetries}
                />

                <div className="mts-group">
                  <Select
                    name="mts"
                    label="MTS"
                    options={["Atrasado", "Simultâneo"]}
                    value={MTS}
                    setValue={setMTS}
                  />

                  <TextInput
                    name="interval"
                    label="Intervalo"
                    pattern={"^[0-9]{1}$"}
                    disabled={MTS === "Simultâneo" ? true : null}
                    value={interval}
                    setValue={setInterval}
                  />
                </div>

                <Textarea
                  name="description"
                  label="Descrição"
                  value={description}
                  setValue={setDescription}
                />
              </div>

              <button className="submit" type="submit">
                Criar Pesquisa
              </button>
            </form>
          </div>

          <div className="search-questions">
            <header>
              <h2>Perguntas da Pesquisa</h2>
            </header>

            <div className="questions-content">
              <div className="question-menu">
                <button
                  onClick={createNewQuestionField}
                  className="new-question"
                >
                  Criar nova pergunta
                </button>

                {questions.map((question, index) => {
                  const questionName = `${index + 1} Pergunta`;

                  return (
                    <button
                      onClick={() => selectQuestion(index)}
                      key={index}
                      className="question"
                    >
                      {questionName}
                    </button>
                  );
                })}
              </div>

              {questions.map((question, index) => {
                return (
                  <QuestionItem
                    openModalToPreviewTheQuestion={() =>
                      openModalToPreviewTheQuestion(question)
                    }
                    index={selectedIndex}
                    selectedIndex={index}
                    key={index}
                    questions={questions}
                    setQuestions={setQuestions}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <PreviewQuestionModal
          questions={questionInfoToModal}
          closeModal={setOpenPreviewQuestionModal}
        />
      )}
    </>
  );
};

export default CreateSearch;
