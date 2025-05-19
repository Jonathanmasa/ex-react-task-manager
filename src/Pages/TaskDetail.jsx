import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Modal from "../Components/Modal";
import EditTaskModal from "../Components/EditTaskModal";

export default function TaskDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, removeTask, updateTask } = useContext(GlobalContext);

    const [currentTask, setCurrentTask] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        const foundTask = tasks.find((task) => task.id === parseInt(id));
        setCurrentTask(foundTask);
    }, [tasks, id]);

    if (!currentTask) {
        return <h1>Task non trovata</h1>;
    }

    const handleDelete = async () => {
        try {
            await removeTask(currentTask.id);
            alert("Task eliminata con successo");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Errore durante l'eliminazione della task.");
        }
    };

    const handleUpdate = async (updatedTask) => {
        try {
            await updateTask(updatedTask);
            alert("Task aggiornata con successo");
            setShowEditModal(false);
        } catch (error) {
            console.error(error);
            alert("Errore durante l'aggiornamento della task.");
        }
    };

    return (
        <div className="task-detail">
            <h1>Dettaglio Task</h1>
            <h2>{currentTask.title}</h2>
            <p><strong>{currentTask.description}</strong></p>
            <p><strong>Stato: {currentTask.status}</strong></p>
            <p><strong>Creato il: {new Date(currentTask.createdAt).toLocaleDateString()}</strong></p>

            <button onClick={() => setShowModal(true)}>Elimina Task</button>
            <button onClick={() => setShowEditModal(true)}>Modifica Task</button>

            <Modal
                title="Conferma eliminazione"
                content="Sei sicuro di voler eliminare questa task?"
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleDelete}
                confirmText="Elimina"
            />

            <EditTaskModal 
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
                task={currentTask}
                onSave={handleUpdate}
            />
        </div>
    );
}
