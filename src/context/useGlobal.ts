import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export function useGlobal() {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error(
        'useGlobal must be called from within GlobalContext.Provider'
      );
    }
    return context;
  }