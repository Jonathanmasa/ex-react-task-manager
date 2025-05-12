import { createContext, useState, useEffect } from "react";
const { VITE_APP_API_URL } = import.meta.env;

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [Tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${VITE_APP_API_URL}/tasks`)
        .then(res => res.json())
        .then(data => setTasks(data))
        .catch(error => console.log(error));

    }, []);

  return (
    <GlobalContext.Provider value={{ Tasks, setTasks }}>
      {children}
    </GlobalContext.Provider>
  );
}
