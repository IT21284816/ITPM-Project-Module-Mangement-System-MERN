import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary  ">
            <div className="container">
                <Link className="navbar-brand  text-white" to="/">Project Management System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item ">
                            <NavLink className="nav-link text-white"  to="/supervisorcontactus">Supervisor</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white"  to="/cosupervisorcontactus">Co-Supervisor</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white"  to="/projectmanagercontactus">Project Manager</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white"  to="/examinercontactus">Examiner</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white"  to="/coordinatorcontactus">Coordinator</NavLink>
                        </li>                       
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white"  to="/allcontactus">All Contact Us</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white"  to="/contactus">Contact Us</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white"  to="/allstud">All Projects</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link text-white"  to="/addstud">Register New Project</NavLink>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>


    )
}
