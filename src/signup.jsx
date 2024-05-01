import { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import '../css/signup.css';

const Signup = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleSignup = () => {
    if (password === confirmPassword) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      login(username, password);
      window.location.href = '/blogs';
    } else {
      alert('Password and confirm password do not match.');
    }
  }

  return (
    <div className='Signup'>
      <h2>Sign Up</h2>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password" />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
