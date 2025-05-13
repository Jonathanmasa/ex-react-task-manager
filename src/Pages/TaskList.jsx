import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../Components/TaskRow";

export default function TaskList() {
    const {Tasks} = useContext(GlobalContext);
    console.log(Tasks);

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
                        {Tasks.map(task => (
                            <TaskRow key={task.id} task={task} />
                        ))}
                    </tbody>
                </table>
            </div>
        
    )
}