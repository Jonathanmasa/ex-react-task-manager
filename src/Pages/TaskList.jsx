import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskList() {
    const {Tasks} = useContext(GlobalContext);
    console.log(Tasks);

    return (
            <div className="nav-content">
                <h1>Task List</h1>
                <p>Pagina lista delle Task</p>
            </div>
        
    )
}