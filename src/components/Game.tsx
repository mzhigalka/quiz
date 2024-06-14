import { FC } from 'react';
import { Timer } from './Timer';
import { GameProps } from '../@types/types';
export type QuestionType = GameProps['question'];

const Game: FC<GameProps> = ({ step, question, onClickVariant }) => {
  const percentage = Math.round((step / question.variants.length) * 100);

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