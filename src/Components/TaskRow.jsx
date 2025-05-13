import { memo } from "react";

const TaskRow = memo(({ task }) => {

    const statuClassName = task.status.replace(" ", "").toLowerCase();

    return (
        <tr>
            <td>{task.title}</td>
            <td className={statuClassName}>{task.status}</td>
            <td>{new Date (task.createdAt).toLocaleDateString()}</td>
        </tr>
    )

})

export default TaskRow;