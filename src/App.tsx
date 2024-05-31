import "./scss/index.scss";
import React from "react";
import axios from "axios";

import Result from "./components/Result";
import Game from "./components/Game";

function App() {
  const [step, setStep] = React.useState<number>(0);
  const [correct, setCorrect] = React.useState<number>(0);
  const [questions, setQuestions] = React.useState<any>([]);
  const question = questions[step];

  React.useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("https://443bbf898bac2295.mokky.dev/questions")
        setQuestions(res.data)
      } catch (error) {
        console.warn(error);
        alert("Ошибка с вопросами");
      }
    };

    fetchQuestions();
  }, [])

  const onClickVariant = (index: number) => {
    setStep(prevStep => prevStep + 1);

    if (index === question.correct) {
      setCorrect(prevCorrect => prevCorrect + 1);
    }
  };

  return (
    <div className="App">
      {step != questions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant} />
      ) : (
        <Result
          questions={questions}
          correct={correct} />
      )}
    </div>
  );
}

export default App;
