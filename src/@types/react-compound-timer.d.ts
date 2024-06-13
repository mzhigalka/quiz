declare module 'react-compound-timer' {
  import { ReactNode } from 'react';

  export interface TimerProps {
    initialTime: number;
    direction: 'forward' | 'backward';
    startImmediately?: boolean;
    timeToUpdate?: number;
    lastUnit?: string;
    checkpoints?: { time: number; callback: () => void }[];
    formatValue?: (value: number) => string;
    onStart?: () => void;
    onPause?: () => void;
    onResume?: () => void;
    onStop?: () => void;
    onReset?: () => void;
    children: (props: TimerChildrenProps) => ReactNode;
  }

  export interface TimerChildrenProps {
    getTime: () => number;
    start: () => void;
    resume: () => void;
    pause: () => void;
    stop: () => void;
    reset: () => void;
    getTimerState: () => string;
    getMinutes: () => number;
    getSeconds: () => number;
    getHours: () => number;
    getMilliseconds: () => number;
    setTime: (time: number) => void;
    setDirection: (direction: 'forward' | 'backward') => void;
    setLastUnit: (unit: string) => void;
  }

  export const Timer: React.FC<TimerProps>;

  export const createTimeModel: (config: {
    initialTime: number;
    direction: 'forward' | 'backward';
    startImmediately?: boolean;
  }) => any;

  export const useTimeModel: (model: any) => any;
}
