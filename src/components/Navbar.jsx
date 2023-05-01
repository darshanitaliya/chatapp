import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthConext } from '../context/AuthContext';

function Navbar() {
  const navigate=useNavigate();
  const {currentUser}=useContext(AuthConext);

  console.log("Navbar", currentUser);

  const handleClick=()=>{
    signOut(auth);
    navigate('/login')
  }
  return (
    <div className='navbar'>
      <span className="logo">DR Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={handleClick}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar