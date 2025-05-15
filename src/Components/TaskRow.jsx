import { memo } from "react";
import { Link } from "react-router-dom";

const TaskRow = memo(({ task }) => {

    const statuClassName = task.status.replace(" ", "").toLowerCase();

    return (
        <tr>
            <td><Link to={`/task/${task.id}`}>{task.title}</Link></td>
            <td className={statuClassName}>{task.status}</td>
            <td>{new Date (task.createdAt).toLocaleDateString()}</td>
        </tr>
    )

})

export default TaskRow;