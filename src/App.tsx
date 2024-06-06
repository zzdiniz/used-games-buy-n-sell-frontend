
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { UserProvider } from "./context/UserContext";
import Message from "./components/layout/Message";
import Profile from "./components/pages/Profile";
import MyGames from "./components/pages/MyGames";
import AddGame from "./components/pages/AddGame";
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
            <Route path="/profile" element={<Profile />}/>
            <Route path="/games/my-games" element={<MyGames />}/>
            <Route path="/games/add" element={<AddGame/>}/>
          </Routes>
          <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
