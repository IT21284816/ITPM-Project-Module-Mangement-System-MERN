import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="container">
      <h1>Admin Logins</h1>
      <div className="d-flex justify-content-center">
      
      <Link to="/" className="btn btn-primary btn-lg mx-2">Studet</Link>
      <Link to="/admin-login" className="btn btn-primary btn-lg mx-2">Admin</Link>
        <Link to="/coordinator-login" className="btn btn-primary btn-lg mx-2">Coordinator</Link>
        <Link to="/examiner-login" className="btn btn-primary btn-lg mx-2">Examiner</Link>
        <Link to="/projectmember-login" className="btn btn-primary btn-lg mx-2">Project Member</Link>
        <Link to="/cosupervisor-login" className="btn btn-primary btn-lg mx-2">Co-Supervisor</Link>
        <Link to="/supervisor-login" className="btn btn-primary btn-lg mx-2">Supervisor</Link>
      </div>
    </div>
  );
};

export default Admin;
