// import react router
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
// import pages
import TaskList from "./Pages/TaskList"
import AddTask from "./Pages/AddTask"

function App() {
 
  return (
    <>
      <BrowserRouter>

      <nav>
        <NavLink to="/">Task List</NavLink>
        <NavLink to="/add">Add Task</NavLink>
      </nav>

        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
