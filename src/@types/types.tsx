export interface QuestionProps {
  title: string
  variants: string[];
  correct: number | null;
}

export interface GameProps {
  step: number;
  question: QuestionProps;
  onClickVariant: (index: number) => void;
};

export interface ResultProp {
  correct: number;
  questions: QuestionProps[];
  finalTime: { minutes: number; seconds: number };
}

export type FinalTime = ResultProp['finalTime'];
