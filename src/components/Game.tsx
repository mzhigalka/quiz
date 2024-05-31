import { FC } from 'react';

export interface GameProps {
  step: number;
  question: {
    title: string
    variants: string[];
    correct: number;
  };
  onClickVariant: (index: number) => void;
}

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
    </>
  );
}

export default Game