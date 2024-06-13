import { FC } from "react";
import { createTimeModel, useTimeModel } from "react-compound-timer";

const timer = createTimeModel({
  initialTime: 0,
  direction: "forward",
  startImmediately: true,
});

export const Timer: FC = () => {
  const { value } = useTimeModel(timer);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div
      title="Timer"
      className="timer"
    >
      <span>
        {formatTime(value.m)} : {formatTime(value.s)}
      </span>
    </div>
  );
};
