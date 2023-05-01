import { useContext } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './style.css'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import { AuthConext } from './context/AuthContext';
import { auth } from './firebase'

function App() {

  const {currentUser}=useContext(AuthConext);

  console.log("app",currentUser);

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path='/' element={auth.currentUser?<Navigate to="/home"/>:<Navigate to="/login"/>}/>
          <Route index path='home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App