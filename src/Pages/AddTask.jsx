import { useState, useRef, useMemo } from 'react';

const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/";

export default function AddTask() {

    const [taskTitle, setTaskTitle] = useState('');
    const descriptionRef = useRef();
    const statusRef = useRef();
    const taskNameError = useMemo(() => {
        if(!taskTitle.trim()) return "Il nome della task è obbligatorio";
        if([...taskTitle].some((char) => symbols.includes(char))) return "Il nome della task non può contenere caratteri speciali";

    }, [taskTitle]);

    const handleSubmit = (e) => {
        event.preventDefault();
        if(taskNameError) return;

    const newTask = {
        title: taskTitle.trim(),
        description: descriptionRef.current.value,
        status: statusRef.current.value
    }
    console.log(newTask);
}
    


    return (
        <>
            <div className="nav-content">
                <h1>Add Task</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Task Title</span>
                        <input
                            type="text"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            placeholder="Enter task title"
                        />
                    </label>
                    {taskNameError && <p className="error">{taskNameError}</p>}
                    <label>
                        <span>Description</span>
                        <textarea
                            ref={descriptionRef}
                            placeholder="Enter task description"
                        ></textarea>
                    </label>
                    <label>
                        <select ref={statusRef} defaultValue="To do">
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>
                    <button type='submit' disabled={taskNameError}>Add Task</button>
                </form>
            </div>
        </>
    )
}