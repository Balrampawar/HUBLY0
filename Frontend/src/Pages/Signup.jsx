import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Popup from '../components/Popup';
import '../style/login.css';
import { Link } from 'react-router-dom';


export default function Signup() {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const isFilled = data.email && data.password;


  const API_BASE_URL = 'http://localhost:5000' || process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/auth/register`, data);
      setError('Signup successful!');
      navigate('/login'); // Redirect to login
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="login-container">
      <Link to="/"><img src="/logos/logo.png" alt="" className='logo' /></Link>
      <div className='login-left'>
        <form onSubmit={handleSubmit} className='formdiv'>
        <div className='signup-header'>
          <h2>Create an account</h2> 
          <Link to= "/login">Sign in instead</Link></div>
          <div className='labels'>
            <label htmlFor="text"> First Name</label>
            <input type="text" required onChange={e => setData({ ...data, name: e.target.value })} />
          </div>
          <div className='labels'>
            <label htmlFor="text"> Last Name</label>
            <input type="text" />
          </div>
          <div className='labels'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" required onChange={e => setData({ ...data, email: e.target.value })} />
          </div>
          <div className="labels">
            <label htmlFor="Password">Password</label>
          <input type="password"  required onChange={e => setData({ ...data, password: e.target.value })} />
          </div>
          <div className="labels">
            <label htmlFor="Password">Confirm Password</label>
            <input type="password"  required onChange={e => setData({ ...data, password: e.target.value })} />
          </div>
          <div>
          <input type="checkbox" required /> 
          By creating an account, I agree to our <Link>Terms of use</Link> and <Link>Privacy Policy</Link>
          </div>
          <button type='submit'
            disabled={!isFilled}
            style={{
              backgroundColor: isFilled ? "#1a73e8" : "grey",
              color: isFilled ? "white" : "#ccc",
              cursor: isFilled ? "pointer" : "not-allowed"
            }}
          >
            Sign up
          </button>

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
