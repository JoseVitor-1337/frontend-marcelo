import React, { memo } from "react";
import { TextInput, UploadInput, Select } from "../../Inputs";

import "./style.css";

const AlternativeItem = (props) => {
  const { index, removeAlternative, alternative, setAlternatives } = props;

  return (
    <div className="alternative">
      <div className="alternative-header">
        <h3>{`${index + 1}° Alternativa`}</h3>
        <button onClick={() => removeAlternative(index)}>Excluir</button>
      </div>
      <div className="alternative-group">
        <Select
          name="correct"
          label="Correta?"
          index={index}
          options={["Sim", "Não"]}
          value={alternative.correct}
          setValue={setAlternatives}
        />

        <TextInput
          name="option"
          id={`option ${index}`}
          label="Opção"
          patter={"^{1}$"}
          index={index}
          value={alternative.option}
          setValue={setAlternatives}
        />
      </div>

      <div className="group">
        <UploadInput
          name="questionImage"
          label="Clique para selecionar uma imagem para a resposta"
          index={index}
          value={alternative.image}
          setValue={setAlternatives}
        />

        <TextInput
          name="answer"
          id={`answer ${index}`}
          label="Resposta"
          index={index}
          value={alternative.answer}
          setValue={setAlternatives}
        />
      </div>
    </div>
  );
};

export default memo(AlternativeItem);
