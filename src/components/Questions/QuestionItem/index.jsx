import React, { memo } from "react";
import AlternativeOfQuestionItem from "../AlternativeOfQuestionItem";
import { TextInput } from "../../Inputs";
import { Button } from "../../Buttons";
import "./style.css";

const QuestionItem = (props) => {
  const {
    questions,
    setQuestions,
    selectedIndex,
    index,
    openModalToPreviewTheQuestion,
  } = props;

  function createNewAlternative() {
    questions[selectedIndex].alternatives = [
      ...questions[selectedIndex].alternatives,
      {
        correct: "",
        option: "",
        answer: "",
        image: "",
      },
    ];
    setQuestions([...questions]);
  }

  function removeQuestions(questionsIndex) {
    setQuestions(
      questions.filter((question, index) => {
        return questionsIndex !== index;
      })
    );
  }

  function removeAlternative(alternativeIndex) {
    setQuestions(
      questions.map((question, index) => {
        if (index === selectedIndex) {
          question.alternatives = question.alternatives.filter(
            (alternative, index) => {
              return alternativeIndex !== index;
            }
          );
          return {
            ...question,
          };
        } else {
          return question;
        }
      })
    );
  }

  function changeValueIntoAlternatives(value, property, alternativeIndex) {
    setQuestions(
      questions.map((question, index) => {
        if (index === selectedIndex) {
          question.alternatives = question.alternatives.map(
            (alternative, index) => {
              if (alternativeIndex === index) {
                alternative[property] = value;
                return {
                  ...alternative,
                };
              }
              return alternative;
            }
          );
          return {
            ...question,
          };
        } else {
          return question;
        }
      })
    );
  }

  function changeValueIntoQuestion(value, property) {
    setQuestions(
      questions.map((item, index) => {
        if (selectedIndex === index) {
          item[property] = value;
          return {
            ...item,
          };
        }

        return item;
      })
    );
  }

  function createQuestion() {
    console.log("Create");
    console.log(questions);
  }

  return (
    <div
      id={`${index === selectedIndex ? "show" : "hidden"}`}
      className="question-form"
    >
      <div className="configurations">
        <Button
          action={() => removeQuestions(index)}
          title="Remover Pergunta"
          type="alternatives"
        />
        <Button
          action={openModalToPreviewTheQuestion}
          title=" Visualizar Pergunta"
          type="alternatives"
        />
      </div>

      <TextInput
        name="type"
        id={`type ${index}`}
        label="Tipo da pergunta"
        value={questions[selectedIndex].type}
        setValue={changeValueIntoQuestion}
      />

      <TextInput
        name="structure"
        id={`structure ${index}`}
        label="Estrutura"
        value={questions[selectedIndex].structure}
        setValue={changeValueIntoQuestion}
      />
      <TextInput
        name="stimulus"
        label="Estímulo da pergunta"
        id={`stimulus ${index}`}
        value={questions[selectedIndex].stimulus}
        setValue={changeValueIntoQuestion}
      />
      <TextInput
        name="question"
        id={`question ${index}`}
        label="Faça a Pergunta"
        value={questions[selectedIndex].question}
        setValue={changeValueIntoQuestion}
      />

      <Button
        type="alternatives"
        title="Criar nova alternativa"
        action={() => createNewAlternative(selectedIndex)}
      />

      {questions[selectedIndex].alternatives.map((alternative, index) => {
        return (
          <AlternativeOfQuestionItem
            key={index}
            index={index}
            removeAlternative={removeAlternative}
            alternative={alternative}
            changeValueIntoAlternatives={changeValueIntoAlternatives}
          />
        );
      })}

      <Button
        type="alternatives"
        title=" Criar pergunta"
        action={() => createQuestion()}
      />
    </div>
  );
};

export default memo(QuestionItem);
