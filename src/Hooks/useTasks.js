import { useState, useEffect } from "react";
const { VITE_API_URL } = import.meta.env;

const [Tasks, setTasks] = useState([]);

export default useTasks = () => {

    useEffect(() => {
         
        fetch(`${VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error));

    }, []);

    return { Tasks };

}