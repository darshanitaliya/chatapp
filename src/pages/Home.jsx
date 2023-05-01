import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { AuthConext } from '../context/AuthContext';

function Home() {
  const {currentUser}=useContext(AuthConext);
  
  return(
    <div className="home">
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default Home;