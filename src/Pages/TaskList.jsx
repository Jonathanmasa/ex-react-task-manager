import { useContext, useState, useMemo } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../Components/TaskRow";

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1); // 1: asc, -1: desc

  const sortIcon = sortOrder === 1 ? "↓" : "↑";

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => prev * -1); // toggle order
    } else {
      setSortBy(field);
      setSortOrder(1); // reset to ascending
    }
  };

  const sortedTasks = useMemo(() => {
    const statusOrder = ["To Do", "Doing", "Done"];

    return [...tasks].sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "title":
          comparison = a.title.localeCompare(b.title);
          break;

        case "status":
          comparison = statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
          break;

        case "createdAt":
          comparison = new Date(a.createdAt) - new Date(b.createdAt);
          break;

        default:
          break;
      }

      return comparison * sortOrder;
    });
  }, [tasks, sortBy, sortOrder]);

  return (
    <div className="nav-content">
      <h1>Task List</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("title")}>
              Nome {sortBy === "title" && sortIcon}
            </th>
            <th onClick={() => handleSort("status")}>
              Status {sortBy === "status" && sortIcon}
            </th>
            <th onClick={() => handleSort("createdAt")}>
              Data di Creazione {sortBy === "createdAt" && sortIcon}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
