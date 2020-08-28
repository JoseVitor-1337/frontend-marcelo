import React, { useEffect, useState, memo } from "react";
import {
  TextInput,
  Textarea,
  UploadInput,
  Select,
} from "../../components/Inputs";

import "./style.css";

const CreateSearch = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [retries, setRetries] = useState("");
  const [MTS, setMTS] = useState("");
  const [interval, setInterval] = useState("");

  const [questionType, setQuestionType] = useState("");
  const [structure, setStructure] = useState("");
  const [stimulus, setStimulus] = useState("");
  const [question, setQuestion] = useState("");
  const [questionImage, setQuestionImage] = useState("");
  const [alternatives, setAlternatives] = useState([
    {
      corret: "",
      option: "",
      answer: "",
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

  useEffect(() => {
    if (true) {
    }
  }, []);

  return (
    <>
      <div className="search-config">
        <header>
          <h2>Configurações da Pesquisa</h2>
        </header>

        <form onSubmit={createSearchConfig}>
          <div className="first-form-group">
            <TextInput
              name="type"
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
            <button className="new-question">Criar nova pergunta</button>
          </div>

          <div className="question-form">
            <TextInput
              name="questionType"
              label="Tipo da pergunta"
              value={questionType}
              setValue={setQuestionType}
            />

            <TextInput
              name="structure"
              label="Estrutura"
              value={structure}
              setValue={setStructure}
            />

            <TextInput
              name="stimulus"
              label="Estímulo da pergunta"
              value={stimulus}
              setValue={setStimulus}
            />

            <div className="group">
              <UploadInput
                name="questionImage"
                label="Clique para selecionar uma imagem para a pergunta"
                value={questionImage}
                setValue={setQuestionImage}
              />

              <TextInput
                name="question"
                label="Faça a Pergunta"
                value={question}
                setValue={setQuestion}
              />
            </div>

            <button className="alternative">Criar Alternativas</button>

            <div className="alternative">
              <div className="alternative-group">
                <Select
                  name="correct"
                  label="Correta?"
                  options={["Sim", "Não"]}
                  value={MTS}
                  setValue={setMTS}
                />

                <TextInput
                  name="option"
                  label="Opição"
                  patter={"^{1}$"}
                  value={MTS}
                  setValue={setMTS}
                />
              </div>

              <div className="group">
                <UploadInput
                  name="questionImage"
                  label="Clique para selecionar uma imagem para a resposta"
                  value={questionImage}
                  setValue={setQuestionImage}
                />

                <TextInput
                  name="answer"
                  label="Resposta"
                  value={question}
                  setValue={setQuestion}
                />
              </div>
            </div>
          </div>

          <div className="question-preview"></div>
        </div>
      </div>
    </>
  );
};

export default memo(CreateSearch);
