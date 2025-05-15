// import react router
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
// import pages
import TaskList from "./Pages/TaskList"
import AddTask from "./Pages/AddTask"
import TaskDetail from "./Pages/TaskDetail"
// import global context
import { GlobalProvider } from "./context/GlobalContext"

function App() {
  
  return (
    <GlobalProvider>
      <BrowserRouter>

      <nav>
        <NavLink to="/">Task List</NavLink>
        <NavLink to="/add">Add Task</NavLink>
      </nav>

        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>

      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
