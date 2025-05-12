import { createContext, useState, useEffect } from "react";
const { VITE_API_URL } = import.meta.env;
export const GlobalContext = createContext();


export function GlobalProvider({ children }) {
  const [Tasks, setTasks] = useState([]);

    useEffect(() => {
        console.log("✅ VITE_API_URL:", VITE_API_URL); 
        fetch(`${VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error));

    }, []);

  return (
    <GlobalContext.Provider value={{ Tasks, setTasks }}>
      {children}
    </GlobalContext.Provider>
  );
}
