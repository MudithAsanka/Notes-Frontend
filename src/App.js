import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Notes from './pages/Note/Notes';
import Users from './pages/Users/Users';

function App() {
  return (
    <div>
        <div className="App">
            <Routes>

                {/* Default Routes */}
                <Route path="/" element={<Login />} />

                {/* ADMIN Routes */}
                <Route path="/users/" element={<Users />} />
                <Route path="/register/" element={<Register />} />
                <Route path="/register/{userID}" element={<Register />} />

                {/* STUDENT Routes */}
                <Route path="/notes" element={<Notes />} />
                <Route path="/notes/add" element={<Notes />} />
                <Route path="/notes/edit/{noteID}" element={<Notes />} />

            </Routes>
        </div>
    </div>
  );
}

export default App;
