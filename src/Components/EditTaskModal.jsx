import { useState, useRef } from "react";
import Modal from "./Modal";

export default function EditTaskModal({ show, onClose, task, onSave }) {
    const [editedTask, setEditedTask] = useState(task);
    const editFormRef = useRef();

    const changeEditTask = (key, event) => {
        setEditedTask(prev => ({
            ...prev,
            [key]: event.target.value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSave(editedTask);
    };

    const { status, title, description } = editedTask;

    return (
        <Modal
            title="Modifica Task"
            content={
                <form ref={editFormRef} onSubmit={handleSubmit}>
                    <label>
                        <span>Task Title</span>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => changeEditTask("title", e)}
                            placeholder="Enter task title"
                        />
                    </label>
                    <label>
                        <span>Description</span>
                        <textarea
                            value={description}
                            onChange={(e) => changeEditTask("description", e)}
                            placeholder="Enter task description"
                        />
                    </label>
                    <label>
                        <span>Status</span>
                        <select
                            value={status}
                            onChange={(e) => changeEditTask("status", e)}
                        >
                            <option value="todo">Todo</option>
                            <option value="in-progress">Doing</option>
                            <option value="done">Done</option>
                        </select>
                    </label>
                </form>
            }
            confirmText="Salva"
            show={show}
            onClose={onClose}
            onConfirm={() => editFormRef.current.requestSubmit()}
        />
    );
}
