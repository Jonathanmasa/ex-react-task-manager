import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Modal from "../Components/Modal";

export default function TaskDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, removeTask } = useContext(GlobalContext);

    const taskId = Number(id);
    const task = tasks.find((task) => task.id === parseInt(id));

    const [showModal, setShowModal] = useState(false);

    if (!task) {
        return <h1>Task non trovato</h1>;
    }

    const handleDelete = async () => {
        try { 
            await removeTask(task.id);
            alert("Task eliminata con successo");
            navigate("/");
            
        } catch (error) {
            console.error(error);
            alert(error.message);
            
        }
        
    }

    return (
        <div className="task-detail">
            <h1>Dettaglio Task</h1>
            <h2>{task.title}</h2>
            <p><strong>{task.description}</strong></p>
            <p><strong>Stato: {task.status}</strong></p>
            <p><strong>Creato il: {new Date(task.createdAt).toLocaleDateString()}</strong></p>
            <button onClick={() => setShowModal(true)}>Delete Task</button>

            <Modal
                title="Conferma eliminazione"
                content="Sei sicuro di voler eliminare questa task?"
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleDelete}
                confirmText="Elimina"
            />
        </div>

    );
}
