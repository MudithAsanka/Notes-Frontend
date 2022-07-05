import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Student from './pages/Student/Student';

function App() {
  return (
    <div>
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register/{userId}" element={<Register />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
