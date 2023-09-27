import { createContext, useState } from "react";

export interface TypingStatus {
  isCompleted: () => boolean;
  setCompleted: (completed: boolean) => void;
}

export const TypingContext = createContext<TypingStatus | null>(null);

export function TypingProvider(props: { children: JSX.Element }) {
  const [completed, setCompleted] = useState(false);

  const isCompleted = () => {
    return completed;
  };

  return (
    <TypingContext.Provider
      value={{
        isCompleted,
        setCompleted,
      }}
    >
      {props.children}
    </TypingContext.Provider>
  );
}
