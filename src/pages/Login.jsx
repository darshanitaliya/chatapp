import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase';

function Login() {

  const [err,setErr]=useState(false);
  const navigate=useNavigate();

  const handleSubmit=async e=>{
    e.preventDefault();
    const email=e.target[0].value;
    const password=e.target[1].value;
    
    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home')
    }catch(err){
      setErr(true);
    }
  };

  return (
    <>
        <div className="formContainer">
            <div className="fromWraper">
                <span className="logo">DR Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Enter Your Email'/>
                    <input type="password" placeholder='Enter Password'/>
                    <button>Login</button>
                    {err && <span className='error'>Something went wrong</span>}
                </form>
                <p>You don't have an account? <Link to='/register'>Register</Link></p>
            </div>
        </div>
    </>
  )
}

export default Login