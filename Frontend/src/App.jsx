import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/DashBoard';
import Contact from './Pages/Contact';
import Analytics from './Pages/Analytics';
import Chatbot from './Pages/Chatbot';
import Team from './Pages/Team'; 
import Setting from './Pages/Setting'; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
