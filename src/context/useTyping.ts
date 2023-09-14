import { useContext } from "react";
import { TypingContext } from "./TypingContext";

export function useTyping() {
    const context = useContext(TypingContext);
    if (!context) {
      throw new Error(
        'useTyping must be called from within TypingContext.Provider'
      );
    }
    return context;
  }