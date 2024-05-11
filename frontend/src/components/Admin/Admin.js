import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="container">
      <h1 className='text-center mt-5 mb-5'>Admin Logins</h1>
      <hr></hr>
      <div className="d-flex justify-content-center mt-5">
      
      <Link to="/" className="btn btn-primary btn-lg mx-4">Studet</Link>
      <Link to="/admin-login" className="btn btn-primary btn-lg mx-4">Admin</Link>
        <Link to="/coordinator-login" className="btn btn-primary btn-lg mx-4">Coordinator</Link>
        <Link to="/examiner-login" className="btn btn-primary btn-lg mx-4">Examiner</Link>
        <Link to="/projectmember-login" className="btn btn-primary btn-lg mx-4">Project Member</Link>
        <Link to="/cosupervisor-login" className="btn btn-primary btn-lg mx-4">Co-Supervisor</Link>
        <Link to="/supervisor-login" className="btn btn-primary btn-lg mx-4">Supervisor</Link>
      </div>
    </div>
  );
};

export default Admin;
