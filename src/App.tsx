import "./scss/index.scss";
import React from "react";

import Result from "./components/Result";
import Game from "./components/Game";

export const questions = [
  {
    "title": "React - это ... ?",
    "variants": ["библиотека", "фреймворк", "приложение"],
    "correct": 0,
  },
  {
    "title": "Компонент - это ... ",
    "variants": [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    "correct": 1,
  },
  {
    "title": "Что такое JSX?",
    "variants": [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    "correct": 2,
  },
  {
    "title": "Что такое useState?",
    "variants": [
      "Это hook который отслеживает состояния",
      "Это переменная",
      "Это функция",
    ],
    "correct": 0,
  },
];

function App() {
  const [step, setStep] = React.useState<number>(0);
  const [correct, setCorrect] = React.useState<number>(0);
  const question = questions[step];

  const onClickVariant = (index: number) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step != questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
