import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/fontawesome-free-regular';

import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,storage,db} from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc,setDoc} from 'firebase/firestore';
import { useNavigate, Link} from 'react-router-dom';

function Register() {
  const [err,setErr]=useState(false);
  const navigate=useNavigate();

  const handleSubmit=async e=>{
    e.preventDefault();
    const file=e.target[0].files[0];
    const displayName=e.target[1].value;
    const email=e.target[2].value;
    const password=e.target[3].value;
    
    try{
      const res=await createUserWithEmailAndPassword(auth, email, password);
      
      const storageRef = ref(storage, displayName);
      
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on(
        (error) => {
          setErr(true)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL:downloadURL,
            })

            await setDoc(doc(db, "users", res.user.uid), {
              uid:res.user.uid,
              displayName,
              email,
              photoURL:downloadURL
            });

            await setDoc(doc(db,"userChats",res.user.uid),{});
            
          });
          
        }
        );
        navigate("/login");
        
        // console.log(res.user);
    }catch(err){
      setErr(true);
    }
    
  };

  return (
    <>
        <div className="formContainer">
            <div className="fromWraper">
                <span className="logo">DR Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                <input style={{display:"none"}} type="file" id='file' required />
                    <label htmlFor="file">
                    <FontAwesomeIcon icon={faImages} beat size='xl'/>
                    <span>Add Profile Picture</span>
                    </label>
                    <input type='text' placeholder='Display Name' required/>
                    <input type="email" placeholder='Enter Your Email' required/>
                    <input type="password" pattern='^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}' placeholder='Enter Password' required/>
                    
                    <span className='note' display="inline" title='1.Password should be 8-20 characters and include at least 1 letter,1 number and 1 special character! &#013;2.All filde must be Requried.'>Note*</span>
                    <button>Sign up</button>
                    {err && <span className='error'>Something went wrong</span>}
                </form>
                <p>You do have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    </>
  )
}

export default Register