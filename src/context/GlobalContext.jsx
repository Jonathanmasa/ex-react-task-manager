import { createContext } from "react";
export const GlobalContext = createContext();
import useTasks from "../Hooks/useTasks";


export function GlobalProvider({ children }) {
  const taskData = useTasks();
  

  return (
    <GlobalContext.Provider value={{ ...taskData }}>
      {children}
    </GlobalContext.Provider>
  );
}
