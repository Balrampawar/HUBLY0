import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Popup from '../components/Popup';
import '../style/login.css';

export default function Login() {
  const [data, setData] = useState({ email: '', password: '' });
  const isFilled = data.email && data.password;

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const API_BASE_URL = 'http://localhost:5000' || process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }

  };

  return (
    <div className="login-container">
      <Link to = "/Home"><img src="/logos/logo.png" alt=""  className='logo'/></Link>
      <div className="login-left">
        <form onSubmit={handleSubmit} className='formdiv'>
          <h2>Sign in to your Plexify</h2>
          <div className='labels'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' required onChange={e => setData({ ...data, email: e.target.value })} />
          </div>
          <div className='labels'>
            <label htmlFor="Password">Password</label>
            <input type="password" id='Password' required onChange={e => setData({ ...data, password: e.target.value })} />
          </div>

          <button type='submit'
            disabled={!isFilled}
            style={{
              backgroundColor: isFilled ? "#1a73e8" : "grey",
              color: isFilled ? "white" : "#ccc",
              cursor: isFilled ? "pointer" : "not-allowed"
            }}
          >
            Login
          </button>
          <a>Forgot Password?</a>
          <li> Don't have an account?<Link to="/Signup">  sign up </Link></li>
        </form>
        <p>This site is protected by reCAPTCHA and the
          Google Privacy Policy
          Terms of Service
          apply.</p>
        {error && <Popup message={error} onClose={() => setError('')} />}
      </div>
      <div className="login-right">
        <img src="src/images/image1.png" alt="" />
      </div>

    </div>
  );
}
