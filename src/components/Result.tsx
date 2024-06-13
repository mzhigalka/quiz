import { FC } from "react";
import { GameProps } from "./Game";

interface ResultProp {
  correct: number;
  questions: GameProps[];
  finalTime: { minutes: number; seconds: number };
}

const Result: FC<ResultProp> = ({ correct, questions, finalTime }) => {
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <p>Ваше время – {formatTime(finalTime.minutes)} : {formatTime(finalTime.seconds)}
      </p>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

export default Result;