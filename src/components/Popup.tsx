import toast, { Toaster } from 'react-hot-toast';
import { PopupProps } from '../@types/types';
import React, { FC } from 'react';

const Popup: FC<PopupProps> = ({ correct, questions }) => {
  const hasNotified = React.useRef(false);

  React.useEffect(() => {
    if (!hasNotified.current) {
      const successThreshold = 0.6; // 60%
      const correctPercentage = correct / questions.length;

      if (correctPercentage >= successThreshold) {
        toast.success('Good job!', {
          style: {
            padding: "16px",
            fontSize: "18px"
          }
        })
      } else {
        toast.error('Let\'s try again', {
          style: {
            padding: "16px",
            fontSize: "18px"
          }
        })
      }
      hasNotified.current = true;
    }
  }, [correct, questions.length])

  return <Toaster />;
};

export default Popup;