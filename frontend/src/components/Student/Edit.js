import React, { useState , useEffect} from 'react';
import { NavLink , useParams, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar"

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [inputdata,setInputdata]=useState({
        "groupId":"",
        "name": "", "name2": "", "name3": "", "name4": "", 
        "registrationNumber": "",  "registrationNumber2": "",  "registrationNumber3": "",  "registrationNumber4": "",
        "email": "", "email2": "", "email3": "", "email4": "",
        "contact": "", "contact2": "", "contact3": "", "contact4": "",
        "pTitle": "",
        "pRArea": "",
        "cosupervisor": "",
        "supervisor": ""
    });
    
    //onchange function
    const setstud=(e)=>{
        const {name,value}=e.target;
        setInputdata((prevData)=>{
            return{
                ...prevData,[name]:value
            }
        })
    }

    //get single student data
    const getstuddata = async () => {
        const res = await fetch(`http://localhost:5000/getstud/${id}`);
        const data = await res.json();

        if (!res.ok || !data) {
            console.log("error fetching data");
        } else {
            setInputdata(data);
        }
    }

    useEffect(() => {
        getstuddata();
    }, []);

    //update student Data
    const updatestud= async(e)=>{
        e.preventDefault();

        const {groupId, name, registrationNumber, email, contact, 
            name2, registrationNumber2, email2, contact2,
            name3, registrationNumber3, email3, contact3,
            name4, registrationNumber4, email4, contact4,
            pTitle, pRArea, cosupervisor, supervisor} =inputdata;
            
        const res2 = await fetch(`http://localhost:5000/updatestud/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                groupId,
                name, registrationNumber, email, contact, 
                name2, registrationNumber2, email2, contact2,
                name3, registrationNumber3, email3, contact3,
                name4, registrationNumber4, email4, contact4,
                pTitle, pRArea, cosupervisor, supervisor
            })
        });
        const data2= await res2.json();
        if (!res2.ok || !data2) {
            console.log("error updating student");
            toast.error('Failed to update student data');
        } else {
            toast.success('Student data updated successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true, 
                progress: undefined,
            });
            setTimeout(() => {
                navigate('/allstud');
            }, 3000);
        }
    }

    return (
        <div>
            <Navbar />
        <div className='container mt-5'>
            <h4>Edit Student Information</h4>
            <div className='underline1'></div>
            <form className='mt-5 shadow p-5 w-75'>


            <h4>Project Details</h4>
            <br></br>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Project Group ID</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Project Group ID" 
                    onChange={setstud} name="groupId" value={inputdata.groupId}/>
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
                    <h4 className="card-title">Student 01 Details (Leader)</h4>
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
                    <h4 className="card-title">Student 02 Details</h4>
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
                    <h4 className="card-title">Student 03 Details</h4>
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
                    <h4 className="card-title">Student 04 Details</h4>
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

                    <br></br><br></br>


                <div className='d-flex'>
                    <button className='btn btn-primary' onClick={updatestud}>Update Details</button>
                    <ToastContainer />
                    <NavLink className='btn btn-primary ms-auto' to="/allstud">Back to Home</NavLink>
                </div>
            </form><br></br><br></br><br></br>
        </div>
        </div>
    )
}
