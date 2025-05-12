import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [Tasks, setTasks] = useState([]);

  return (
    <GlobalContext.Provider value={{ Tasks, setTasks }}>
      {children}
    </GlobalContext.Provider>
  );
}
