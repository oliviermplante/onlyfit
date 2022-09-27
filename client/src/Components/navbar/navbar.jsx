import './navbar.css'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { useContext } from "react";
import { Context } from "../../context/Context";
import userSlice from "../../redux/userSlice";



const Search = styled.div`
  position: absolute;
  top: 10px;
  right: 77px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: transparent;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: white;
`;

const Button = styled.button`
  padding: 15px 35px;
  background-color: white;
  color: #black;
  font-weight: 50;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  margin: 9px 0px 0px 20px;
  color: ${({ theme }) => theme.text};
`;

const NavBar = () => {
  const { dispatch } = useContext(Context);
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const ChangBg = () => {
    if(window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    };
    window.addEventListener("scroll", ChangBg);
 
    const handleLogout = () => {
      localStorage.clear();
      navigate("/");
      window.location.reload();
    };

  return (
    <>
        <nav className={navbar ? "navbar navbar-expand-sm fixed-top active" : "navbar navbar-expand-sm fixed-top"}>
            <Link to="/" className='navbar-brand'>
              <span>O</span>nlyFit
            </Link>
            <Search>
            <Input
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
            />
            <i class="fa-solid fa-magnifying-glass" onClick={()=>navigate(`/search?q=${q}`)} />
           </Search>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/trainers" className="nav-link">Trainers</Link></li>
                    <li className="nav-item"><Link to="/aboutus" className="nav-link">About Us</Link></li>
                    <li className="nav-item" onClick={handleLogout}><Link to="/home" className="nav-link">
                    {currentUser && "Sign Out"}</Link>
                    </li>
                    <li className="nav-item">{currentUser ? (<User><Link to="/profile"> hello {currentUser.name} </Link></User> ) : (<Link to="/signin" className="nav-link maincolor">Sign In</Link>)}</li>
                   
                 </ul>       
            </div> 
        </nav>
    </>
  );
};

export default NavBar;