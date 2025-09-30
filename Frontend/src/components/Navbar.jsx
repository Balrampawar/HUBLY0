import { Link, NavLink } from "react-router-dom";
import "../style/Navbar.css";
import { SlHome } from "react-icons/sl";
import { BsChatLeftText } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { RiRobot3Line } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to = "/"><img src="/logos/logos.png" alt="" /></Link>
      <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{({ isActive }) => (<div className="nav-items"><SlHome />{isActive && <span>Dashboard</span>}</div>)}</NavLink>

      <NavLink to="/contact" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{({ isActive }) => (<div className="nav-items"><BsChatLeftText/>{isActive && <span>Contact Center</span>}</div>)}</NavLink>

      <NavLink to="/Analytics" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{({ isActive }) => (<div className="nav-items"><SiSimpleanalytics />{isActive && <span>Analytics</span>}</div>)}</NavLink>

      <NavLink to="/Chatbot" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{({ isActive }) => (<div className="nav-items"><RiRobot3Line />{isActive && <span>Chat bot</span>}</div>)}</NavLink>

      <NavLink to="/Team" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{({ isActive }) => (<div className="nav-items"><RiTeamFill />{isActive && <span>Team</span>}</div>)}</NavLink>
      
      <NavLink to="/Setting" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{({ isActive }) => (<div className="nav-items"><IoSettingsOutline />{isActive && <span>Setting</span>}</div>)}</NavLink>
    </nav>
  );
};

export default Navbar;
