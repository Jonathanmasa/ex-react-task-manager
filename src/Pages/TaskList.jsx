import { useContext, useState, useMemo, useCallback } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../Components/TaskRow";

// Funzione debounce
function debounce(callback, delay) {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value);
    }, delay);
  };
}

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1); // 1: asc, -1: desc
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSetSearchQuery = useCallback(
    debounce(setSearchQuery, 500),
    []
  );

  const sortIcon = sortOrder === 1 ? "↓" : "↑";

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => prev * -1); // inverti ordine
    } else {
      setSortBy(field);
      setSortOrder(1); // resetta a crescente
    }
  };

  const filteredAndSortedTasks = useMemo(() => {
    const statusOrder = ["To Do", "Doing", "Done"];

    return [...tasks]
      .filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        let comparison = 0;

        switch (sortBy) {
          case "title":
            comparison = a.title.localeCompare(b.title);
            break;
          case "status":
            comparison =
              statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
            break;
          case "createdAt":
            comparison =
              new Date(a.createdAt).getTime() -
              new Date(b.createdAt).getTime();
            break;
          default:
            break;
        }

        return comparison * sortOrder;
      });
  }, [tasks, sortBy, sortOrder, searchQuery]);

  return (
    <div className="nav-content">
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="Cerca..."
        onChange={(e) => debouncedSetSearchQuery(e.target.value)}
        className="search-input"
      />
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
          {filteredAndSortedTasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
