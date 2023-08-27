/* eslint-disable no-undef */
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import {auth,db} from '../../FirebaseConfig/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useDispatch } from 'react-redux';
import './LoginForm.css'
import { setAuth } from '../../redux/isAuth';

const LoginForm = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const handleToggle = () => {
    setIsSignup(!isSignup);
    setUsername('');
    setPassword('');
    setEmail('');
    setFirst('');
    setLast('');
  };

  const signIn = async (email, password, first, last, username) => {
    if (password.length < 6) {
      alert('Password should be at least 6 characters long');
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const userDocRef = doc(db, 'users', user.email);
  
      const userData = {
        username,
        email,
        first,
        last,
        cart: [],
        order:[]
      };
  
      await setDoc(userDocRef, userData);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSignup) {
      signIn(email, password,first,last,username);
      dispatch(setAuth(true));
      localStorage.setItem('isAuthenticated', 'true');
      console.log('Sign up:', { username, email, password });
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        dispatch(setAuth(true));
        localStorage.setItem('isAuthenticated', 'true');
        
        console.log('Logged in as:', user.email);
      } catch (error) {
        console.error('Error signing in:', error);
      }      
    }
  };

  return (
    <div className="login-form">
      <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignup && (
          <input
            type="text"
            placeholder="First Name"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        )}
        {isSignup && (
          <input
            type="text"
            placeholder="Last Name"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
        )}
        {isSignup && (
          <input
            type="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
      </form>
      <button className="toggle-button" onClick={handleToggle}>
        {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
      </button>
    </div>
  );
};

export default LoginForm;
