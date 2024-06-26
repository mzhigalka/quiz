import { FC } from "react";
import { ErrorProps } from "../@types/types";

const Error: FC<ErrorProps> = ({ message }) => (
  <div className="error">
    <img
      src="https://cdn-icons-png.flaticon.com/512/7465/7465751.png"
      alt="Error"
      width={150}
      height={150}
    />
    <h2>Ошибка</h2>
    <p>{message}</p>
  </div>
);

export default Error;