import React, { memo } from "react";
import { TextInput, UploadInput, Select } from "../../Inputs";
import { Button } from "../../Buttons";

import "./style.css";

const AlternativeItem = (props) => {
  const {
    index,
    removeAlternative,
    alternative,
    changeValueIntoAlternatives,
  } = props;

  return (
    <div className="alternative">
      <div className="alternative-header">
        <h3>{`${index + 1}° Alternativa`}</h3>
        <Button
          action={() => removeAlternative(index)}
          title="Excluir"
          type="delete"
        />
      </div>
      <div className="alternative-group">
        <Select
          name="correct"
          label="Correta?"
          index={index}
          options={["Sim", "Não"]}
          id={`correct ${index}`}
          value={alternative.correct}
          setValue={changeValueIntoAlternatives}
        />

        <TextInput
          name="option"
          id={`option ${index}`}
          label="Opção"
          patter={"^{1}$"}
          index={index}
          value={alternative.option}
          setValue={changeValueIntoAlternatives}
        />
      </div>

      <div className="group">
        <UploadInput
          name="image"
          label="Clique para selecionar uma imagem para a resposta"
          index={index}
          value={alternative.image}
          setValue={changeValueIntoAlternatives}
        />

        <TextInput
          name="answer"
          id={`answer ${index}`}
          label="Resposta"
          index={index}
          value={alternative.answer}
          setValue={changeValueIntoAlternatives}
        />
      </div>
    </div>
  );
};

export default memo(AlternativeItem);
