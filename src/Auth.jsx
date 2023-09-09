import React, { useEffect, useState } from 'react'
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from './App';

const Auth = () => {
  const theme = useContext(AuthContext);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [user, setUser] = useState({});
  useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
      })
  }, [])
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user);
    }catch(err) {
      console.error(err);
    }
  }
  const logIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, logInEmail, logInPassword)
      console.log(user);
    }catch(err) {
      console.error(err);
    }
  }
  const logOut = async () => {
    await signOut(auth);
  }
  return (
    <div>
      <div>
        <h3>Register</h3>
        <input type='email' placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)}/>
        <input type='password' placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>Register</button>
      </div>
      <div>
        <h3>LogIn</h3>
        <input type='email' placeholder="Email" onChange={(e) => setLogInEmail(e.target.value)}/>
        <input type='password' placeholder="Password" onChange={(e) => setLogInPassword(e.target.value)}/>
        <button onClick={logIn}>LogIn</button>
      </div>
      <div>
        <h4>User Logged In {user?.email}</h4>
        <button onClick={logOut}>Log Out</button>
      </div>
      <div>
        {theme}
      </div>
    </div>
  )
}

export default Auth