import React, { useEffect, useState, memo } from "react";
import { TextInput, Textarea, Select } from "../../components/Inputs";

import "./style.css";

const CreateSearch = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  const [retries, setRetries] = useState("");
  const [MTS, setMTS] = useState("");
  const [interval, setInterval] = useState("");

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

        <main>
          <div className="questions-menu"></div>

          <div className="question"></div>
        </main>
      </div>
    </>
  );
};

export default memo(CreateSearch);
