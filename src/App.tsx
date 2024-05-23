import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { UserProvider } from "./context/UserContext";
import Message from "./components/layout/Message";
function App() {
  return (
    <Router>
      <UserProvider>
          <Navbar />
          <Message />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
