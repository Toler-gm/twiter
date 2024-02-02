import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/taskpage" element={<TasksPage />} />
        <Route path="/new" element={<TasksForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
