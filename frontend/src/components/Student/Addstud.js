import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid'; // import UUID generator
import Navbar from "../Header/header"
import Footer from '../Footer/footer';

export default function Addstud() {
    const navigate = useNavigate();

    // Initialize the state with a UUID for groupId
    const [inputdata, setInputdata] = useState({
        groupId: uuidv4(), // unique group ID
        name: "", name2: "", name3: "", name4: "",
        registrationNumber: "", registrationNumber2: "", registrationNumber3: "", registrationNumber4: "",
        email: "", email2: "", email3: "", email4: "",
        contact: "", contact2: "", contact3: "", contact4: "",
        pTitle: "",
        pRArea: "",
        cosupervisor: "",
        supervisor: ""
    });

    // Reset the group ID each time the component is mounted
    useEffect(() => {
        setInputdata((prevData) => ({
            ...prevData,
            groupId: uuidv4(), // new unique ID
        }));
    }, []); // empty dependency array ensures it runs once on mount

    // Function to update form fields on change
    const setstud = (e) => {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value });
    };

    // OnClick event for form submission
    const addinpdata = async (e) => {
        e.preventDefault();

        // Destructure the state
        const { groupId, name, registrationNumber, email, contact,
            name2, registrationNumber2, email2, contact2,
            name3, registrationNumber3, email3, contact3,
            name4, registrationNumber4, email4, contact4,
            pTitle, pRArea, cosupervisor, supervisor } = inputdata;

        // Validate if all required fields are filled
        const requiredFields = [name, registrationNumber, email, contact,
            name2, registrationNumber2, email2, contact2,
            name3, registrationNumber3, email3, contact3,
            name4, registrationNumber4, email4, contact4,
            pTitle, pRArea, cosupervisor, supervisor];

        if (requiredFields.some((field) => !field)) {
            toast.error("One or more required fields are empty.", {
                position: "top-center",
                autoClose: 3000,
            });
            return; // Exit if any required field is empty
        }

        // Post request to backend
        const res = await fetch("http://localhost:5000/addstud", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputdata), // send input data
        });

        const data = await res.json(); // get response data

        if (res.status === 422 || !data) {
            console.log("Error");
            alert("Submission error");
        } else {
            toast.success("Registration successful! Redirecting...", {
                position: "top-center",
                autoClose: 2000,
            });

            // Redirect to the specified page after a delay
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    };

    return (
        <div>
            <Navbar />
        <div className='container mt-5'>
        <h4 style={{ backgroundColor: '#F0E68C', padding: '15px' }}>New Project Registration</h4>
            <div className='underline1'></div>
            
            <form className='mt-5 shadow p-5 w-100' style={{ backgroundColor: '#D3D3D3', padding: '15px' }}>
            <h4 style={{ backgroundColor: 'black', padding: '15px', color:'white' }}>Project Details</h4>
            <br></br>
            <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Project Group ID</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Project Group ID" 
                    onChange={setstud} name="groupId" value={inputdata.groupId} disabled />
                </div>
            <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Project Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Project Title" 
                    onChange={setstud} name="pTitle" value={inputdata.pTitle}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Research Area</label>
                        <select className="form-select" id="exampleFormControlInput1" onChange={setstud} name="pRArea" value={inputdata.pRArea}>
                            <option value="">Select a research area</option>
                            <option value="IT">Information Technology (IT)</option>
                            <option value="SE">Software Engineering (SE)</option>
                            <option value="DS">Data Science (DS)</option>
                            <option value="CSNE">Computer Systems and Network Engineering (CSNE)</option>
                            <option value="CS">Computer Science (CS)</option>
                             {/* Add more options as needed */}
                        </select>
                    </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Co-Supervisor</label>
                    <select className="form-select" id="exampleFormControlInput1" onChange={setstud} name="cosupervisor" value={inputdata.cosupervisor}>
        <                   option value="">Select a subject</option>
                            <option value="Co-Supervisor 1">Co-Supervisor 1</option>
                            <option value="Co-Supervisor 2">Co-Supervisor 2</option>
                            <option value="Co-Supervisor 3">Co-Supervisor 3</option>
                            <option value="Co-Supervisor 4">Co-Supervisor 4</option>
                            {/* Add more options as needed */}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Supervisor</label>
                    <select className="form-select" id="exampleFormControlInput1" onChange={setstud} name="supervisor" value={inputdata.supervisor}>
        <                   option value="">Select a subject</option>
                            <option value="Supervisor 1">Supervisor 1</option>
                            <option value="Supervisor 2">Supervisor 2</option>
                            <option value="Supervisor 3">Supervisor 3</option>
                            <option value="Supervisor 4">Supervisor 4</option>
                            {/* Add more options as needed */}
                    </select>
                </div>
                
                <br></br><br></br>
                <div className="card bg-light">
                    <div className="card-body">
                    <h4 className="card-title mb-4" style={{ backgroundColor: '#F0E68C', padding: '10px' }}>Student 01 Details (Leader)</h4>
                        <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name"
                            onChange={setstud} name="name" value={inputdata.name} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registrationNumber" className="form-label">Registration Number</label>
                            <input type="text" className="form-control" id="registrationNumber" placeholder="Enter Registration Number"
                                onChange={setstud} name="registrationNumber" value={inputdata.registrationNumber} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email"
                                onChange={setstud} name="email" value={inputdata.email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact Number</label>
                            <input type="text" className="form-control" id="contact" placeholder="Enter Contact Number"
                                onChange={setstud} name="contact" value={inputdata.contact} />
                        </div>
                        </div>
                    </div>
                    <br></br><br></br>


                    <div className="card bg-light">
                    <div className="card-body">
                    <h4 className="card-title mb-4" style={{ backgroundColor: '#F0E68C', padding: '10px' }}>Student 02 Details</h4>
                        <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name"
                            onChange={setstud} name="name2" value={inputdata.name2} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registrationNumber" className="form-label">Registration Number</label>
                            <input type="text" className="form-control" id="registrationNumber" placeholder="Enter Registration Number"
                                onChange={setstud} name="registrationNumber2" value={inputdata.registrationNumber2} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email"
                                onChange={setstud} name="email2" value={inputdata.email2} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact Number</label>
                            <input type="text" className="form-control" id="contact" placeholder="Enter Contact Number"
                                onChange={setstud} name="contact2" value={inputdata.contact2} />
                        </div>
                        </div>
                    </div>

                    <br></br><br></br>

                    <div className="card bg-light">
                    <div className="card-body">
                    <h4 className="card-title mb-4" style={{ backgroundColor: '#F0E68C', padding: '10px' }}>Student 03 Details</h4>
                        <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name"
                            onChange={setstud} name="name3" value={inputdata.name3} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registrationNumber" className="form-label">Registration Number</label>
                            <input type="text" className="form-control" id="registrationNumber" placeholder="Enter Registration Number"
                                onChange={setstud} name="registrationNumber3" value={inputdata.registrationNumber3} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email"
                                onChange={setstud} name="email3" value={inputdata.email3} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact Number</label>
                            <input type="text" className="form-control" id="contact" placeholder="Enter Contact Number"
                                onChange={setstud} name="contact3" value={inputdata.contact3} />
                        </div>
                        </div>
                    </div>


                    <br></br><br></br>

                    <div className="card bg-light">
                    <div className="card-body">
                    <h4 className="card-title mb-4" style={{ backgroundColor: '#F0E68C', padding: '10px' }}>Student 04 Details</h4>
                        <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name"
                            onChange={setstud} name="name4" value={inputdata.name4} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registrationNumber" className="form-label">Registration Number</label>
                            <input type="text" className="form-control" id="registrationNumber" placeholder="Enter Registration Number"
                                onChange={setstud} name="registrationNumber4" value={inputdata.registrationNumber4} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email"
                                onChange={setstud} name="email4" value={inputdata.email4} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact Number</label>
                            <input type="text" className="form-control" id="contact" placeholder="Enter Contact Number"
                                onChange={setstud} name="contact4" value={inputdata.contact4} />
                        </div>
                        </div>
                    </div>
        


                    <br></br>
                <div className='d-flex justify-content-between'>

                    <div>
                    <NavLink className='btn btn-primary ms-auto' to="/">Back to Home</NavLink>
                    </div>

                    <button className='btn btn-success ms-auto btn-lg' onClick={addinpdata}>Submit</button>
                    <ToastContainer />
                    
                </div>
            </form>
            <br></br><br></br>
        </div>
        <Footer/>
        </div>
    );
}
