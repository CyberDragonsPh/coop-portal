import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NavigationBar from "./components/NavigationBar";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import MemberProfile from "./components/pages/MemberProfile";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/members" element={<MemberProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
