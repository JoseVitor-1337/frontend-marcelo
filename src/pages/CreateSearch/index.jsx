import React, { useState } from "react";
import { QuestionItem } from "../../components/Questions";
import { TextInput, Textarea, Select } from "../../components/Inputs";

import "./style.css";

const CreateSearch = () => {
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
          corret: "",
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

  function createNewQuestion() {
    setQuestions([
      ...questions,
      {
        type: "",
        structure: "",
        stimulus: "",
        question: "",
        alternatives: [
          {
            corret: "",
            option: "",
            answer: "",
            image: "",
          },
        ],
      },
    ]);
  }

  return (
    <>
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

            <Textarea
              name="description"
              label="Descrição"
              value={description}
              setValue={setDescription}
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
            <button onClick={createNewQuestion} className="new-question">
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
  );
};

export default CreateSearch;
