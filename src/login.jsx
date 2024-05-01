import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../css/login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
      // User is logged in
      login(username, password);
      navigate('/blogs');
    } else {
      // User is not logged in
      alert('Invalid username or password.');
    }
  }

  return (
    <div className="Login">
      <h2>Login</h2>    
        <input type="text" id="username" value={username} onChange={handleUsernameChange} placeholder="Username" />       
        <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        <button type="button" onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
}

export default Login;
