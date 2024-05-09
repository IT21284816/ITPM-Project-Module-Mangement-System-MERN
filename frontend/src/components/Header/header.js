import React from 'react';
import { useNavigate, Link  } from 'react-router-dom';
import { FaHome, FaSignOutAlt, FaFileAlt, FaEnvelope } from 'react-icons/fa'; // Adding icons for buttons

const Header = () => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/login'); // Redirect to login after logout
    };

    const handleGoHome = () => {
        navigate('/home'); // Redirect to the home page
      };


  return (
    <div>
        {/* Navbar with Bootstrap styling */}
        <div className="navbar navbar-expand-lg navbar-light bg-dark mb-3" style={{ padding: "20px 20px" }}>
        <div className="container-fluid">
          <h1 className="navbar-brand text-white">
            <Link to="/" className="navbar-brand text-white">Profile</Link>
            </h1> 
          <div className="d-flex">
            <button className="btn btn-primary me-2" onClick={handleGoHome}>
              <FaHome />&nbsp;  Home
            </button> 
            <div style={{ width: '20px' }}></div> 
            <button className="btn btn-danger" onClick={handleLogout}>
              <FaSignOutAlt /> &nbsp; Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;