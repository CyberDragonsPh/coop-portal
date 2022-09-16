import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NavigationBar from "./components/NavigationBar";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import MainDashboard from "./components/pages/dashboard/MainDashboard";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/members" element={<MainDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
