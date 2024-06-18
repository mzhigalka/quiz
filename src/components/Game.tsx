import { FC } from 'react';
import { Timer } from './Timer';
import { GameProps } from '../@types/types';

const Game: FC<GameProps> = ({
  step,
  question,
  onClickVariant,
  totalQuestions
}) => {
  const percentage = Math.round((step / totalQuestions) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text: string, index: number) => (
          <li
            onClick={() => {
              onClickVariant(index);
            }}
            key={text}
          >
            {text}
          </li>
        ))}
      </ul>
      <Timer />
    </>
  );
}

export default Game;