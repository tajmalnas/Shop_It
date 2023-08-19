import { useState } from 'react';
import './LoginForm.css'

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignup) {
      
      console.log('Sign up:', { username, email, password });
    } else {
      
      console.log('Login:', { username, password });
    }
  };

  return (
    <div className="login-form">
      <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
