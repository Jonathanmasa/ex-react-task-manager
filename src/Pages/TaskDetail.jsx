import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetail() {
    const { id } = useParams();
    const { tasks } = useContext(GlobalContext);

    const taskId = Number(id);
    const task = tasks.find((task) => task.id === taskId);

    if (!task) {
        return <h1>Task non trovato</h1>;
    }

    const handleDelete = () => {
       
        console.log(`Deleting task with id: ${taskId}`);
    };

    return (
        <div>
            <h1>Dettaglio Task</h1>
            <h2>{task.title}</h2>
            <p><strong>{task.description}</strong></p>
            <p><strong>Stato: {task.status}</strong></p>
            <p><strong>Creato il: {new Date(task.createdAt).toLocaleDateString()}</strong></p>
            <button onClick={handleDelete}>Delete Task</button>

        </div>
    );
}
