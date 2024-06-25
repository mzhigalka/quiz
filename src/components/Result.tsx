import { FC } from "react";
import Popup from "./Popup";
import { motion } from "framer-motion";
import { ResultProp } from "../@types/types";

const Result: FC<ResultProp> = ({ correct, questions, finalTime }) => {
  const passingScoreThreshold = 0.6;
  const accuracyRate = correct / questions.length;

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  const imgVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.3, 1],
      transition: { duration: 1, ease: "easeInOut" }
    },
  }


  return (
    <div className="result">
      {
        accuracyRate >= passingScoreThreshold ? (
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
            variants={imgVariants}
            initial="initial"
            animate="animate"
          />
        ) : (
          <motion.img
            src="   https://cdn-icons-png.flaticon.com/512/6606/6606519.png "
            variants={imgVariants}
            initial="initial"
            animate="animate"
          />
        )
      }
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <p>Ваше время – {formatTime(finalTime.minutes)} : {formatTime(finalTime.seconds)}
      </p>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
      <Popup correct={correct} questions={questions} />
    </div>
  );
}

export default Result;