import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/');
    const userData = localStorage.getItem('user');
    setUser(JSON.parse(userData));
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div style={{display:'flex'}}>
      <Navbar/>
      <h2>Welcome, {user?.name}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
