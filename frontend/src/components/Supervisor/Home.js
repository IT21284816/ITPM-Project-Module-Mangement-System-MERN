import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import {FaFileAlt, FaEnvelope } from 'react-icons/fa'; // Adding icons for buttons
import photoURL from '../photo/girl.jpg'
import Header from '../Header/header'
import Footer from '../Footer/footer'

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login after logout
  };

  const handleGoReg = () => {
    navigate('/supervisor-input'); // Redirect to the home page
  };

  const handleGoContact = () => {
    navigate('/supervisorcontactus'); // Redirect to the home page
  };
  const handleGoList = () => {
    navigate('/supervisor-list'); // Redirect to the home page
  };

  // Sample user data
  const user = {
    name: "Minoli Rashmitha",
    email: "Minoli@gmail.com",
    bio: "My journey in software engineering has been marked by exciting challenges and rewarding experiences. I've had the privilege of leading teams on groundbreaking projects, where I've contributed to the development of cutting-edge software solutions.",
    // Add photoURL here if available
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <h1 className='text-center' style={{marginTop:'20px'}}>Supervisor Profile</h1>
      <br></br>
      <hr></hr>
      {/* Main content area */}
      <div className={`container`} style={{flex: '1', marginTop:'50px'}}> {/* Added spacing at the top */}
        {/* Profile card */}
        <div className="card mx-auto" style={{ maxWidth: "500px", backgroundColor: "#F0E68C", padding:"20px", borderColor:"black", borderRadius:"15px" }}>
          <div className="card-body text-center">
            {/* Profile photo */}
            <img src={photoURL} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: "200px", height: "200px", objectFit: "cover" }} />

            {/* Name and email */}
            <h2 className="card-title">{user.name}</h2>
            <p className="card-text">{user.email}</p>

            {/* Bio */}
            <p className="card-text">{user.bio}</p>
          </div>
        </div>
        <button className="btn btn-primary d-block mx-auto mt-5 mb-3" onClick={handleGoReg}><FaFileAlt  /> &nbsp; &nbsp;Report Marks Add
        </button>
        <button className="btn btn-success d-block mx-auto mb-3" onClick={handleGoList}><FaFileAlt  /> &nbsp; &nbsp;Report Marks List
        </button>
        <button className="btn btn-info d-block mx-auto mt-2 mb-3" onClick={handleGoContact}><FaEnvelope   /> &nbsp; &nbsp;Contact Us - Supervisor
        </button>

      </div>
      <Footer style={{ flexShrink: '0' }} />
    </div>

  );
};

export default Home;
