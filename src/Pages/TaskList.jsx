import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../Components/TaskRow";

export default function TaskList() {
    const { tasks } = useContext(GlobalContext);

    return (
            <div className="nav-content">
                <h1>Task List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Status</th>
                            <th>Data di Creazione</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <TaskRow key={task.id} task={task} />
                        ))}
                    </tbody>
                </table>
            </div>
        
    )
}