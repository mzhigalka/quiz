import "./scss/index.scss";
import React from "react";
import axios from "axios";

import Game from "./components/Game";
import Error from "./components/Error";
import Result from "./components/Result";

import { motion } from "framer-motion";
import { FinalTime, QuestionProps } from "./@types/types";
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
  const [error, setError] = React.useState<string | null>(null);
  const question = questions[step];
  const { value } = useTimeModel(timer);

  React.useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("https://quiztest.free.beeceptor.com/questions")
        setQuestions(res.data)
      } catch (error) {
        console.warn(error);
        setError("Ошибка при получении вопросов, попробуйте позже :(");
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

  if (error) {
    return <Error message={error} />
  }

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {step != questions.length ? (
        <motion.div
          key={step}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: step >= 1 ? 0.5 : 0 }}
        >
          <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant}
            totalQuestions={questions.length}
          />
        </motion.div>
      ) : (
        <motion.div
          key="result"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Result
            questions={questions}
            correct={correct}
            finalTime={finalTime}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

export default App;
