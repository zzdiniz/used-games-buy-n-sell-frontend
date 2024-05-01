import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
