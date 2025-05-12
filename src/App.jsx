// import react router
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
// import global context
import { GlobalProvider } from "./context/GlobalContext"
// import pages
import TaskList from "./Pages/TaskList"
import AddTask from "./Pages/AddTask"

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
        </Routes>

      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
