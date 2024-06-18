import "./scss/index.scss";
import React from "react";
import axios from "axios";

import Result from "./components/Result";
import { FinalTime, QuestionProps } from "./@types/types";
import Game from "./components/Game";
import { createTimeModel, useTimeModel } from "react-compound-timer";

const timer = createTimeModel({
  initialTime: 0,
  direction: "forward",
  startImmediately: true,
});

function App() {
  const [step, setStep] = React.useState<number>(0);
  const [correct, setCorrect] = React.useState<number>(0);
  const [questions, setQuestions] = React.useState<QuestionProps[]>([]);
  const [finalTime, setFinalTime] = React.useState<FinalTime>({ minutes: 0, seconds: 0 });
  const question = questions[step];
  const { value } = useTimeModel(timer);

  React.useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("https://443bbf898bac2295.mokky.dev/questions")
        setQuestions(res.data)
      } catch (error) {
        console.warn(error);
        alert("Ошибка, попробуйте включить VPN-сервис");
      }
    };

    fetchQuestions();
  }, [])

  const onClickVariant = (index: number) => {
    setStep(prevStep => prevStep + 1);

    if (index === question.correct) {
      setCorrect(prevCorrect => prevCorrect + 1);
    }

    const nextStep = step + 1;
    if (nextStep < questions.length) {
      setStep(nextStep);
    } else {
      setFinalTime({ minutes: value.m, seconds: value.s });
      setStep(nextStep);
    }
  };

  return (
    <div className="App">
      {step != questions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          totalQuestions={questions.length}
        />
      ) : (
        <Result
          questions={questions}
          correct={correct}
          finalTime={finalTime}
        />
      )}
    </div>
  );
}

export default App;
