import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Navbar from "./Navbar"

export default function Allstud() {

    const [getstud, SetGetstud] = useState([]);
    console.log(getstud)
    //get student Data
    const getstuddata = async () => {

        const res = await fetch("http://localhost:5000/getstud", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            SetGetstud(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getstuddata();
    }, [])

    //Delete student data
    const deletestud = async (id) => {

        const res2 = await fetch(`http://localhost:5000/deletestud/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            getstuddata();

        }

    }


    //Generate report
    const generatePDF = () => {
        // create new PDF object
        const doc = new jsPDF();
    
        // set company name
        const companyName = 'All Project Information';
        // set current date and time
        const today = new Date();
        const date = today.toLocaleDateString();
        const time = today.toLocaleTimeString();
    
        // add company name and date/time to PDF
        doc.text(`${companyName}\nReport Generated on: ${date} at ${time}`, 14, 20);
    
        // add table data to PDF
        doc.autoTable({
            startY: 40, // set Y position to start the table
            head: [['No', 'Group ID', 'Title', 'Area', 'Co-Supervisor', 'Supervisor']],
            body: getstud.map((result, id) => [id + 1, result.groupId, result.pTitle, result.pRArea, result.cosupervisor, result.supervisor])
        });
    
        // save PDF file
        doc.save('report.pdf');
    }



    //search Student
    const [searchInput,setSearchInput]=useState('');
    const searchStud=(searchval)=>{
        setSearchInput(searchval)
    }
    return (
        <div>
            <Navbar />
        <div className='container mt-5'>
            <div className='d-flex'>
                <h4 style={{ backgroundColor: '#F0E68C', padding: '15px' }}>All Project Information</h4>
                <div class="ms-auto w-50">
                    <input style={{ backgroundColor: '#F0E68C', padding: '10px', borderColor:'black' }} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search Project Title or Area or Group ID" 
                        onChange={(e)=>searchStud(e.target.value)}
                    />
                </div>
            </div>

            <div className='underline'></div>
            <br></br>
            <button className='btn btn-primary' onClick={() => generatePDF()}>Generate Report</button>
            <table className="table table-bordered mt-5">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Group ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Area</th>
                        <th scope="col">Co-Supervisor</th>
                        <th scope="col">Supervisor</th>



                        {/* <th scope="col">Name</th>
                        <th scope="col">Registration Number</th> 
                        <th scope="col">email</th>
                        <th scope="col">Contact </th> */}
                        <th scope="col">Action </th>
                    </tr>
                </thead>
                <tbody>

                    {getstud.filter((val)=>{
                        if(searchInput == ""){
                            return val
                        }else if(val.pTitle.toLowerCase().includes(searchInput.toLowerCase())){
                            return val; 
                        }

                        else if(val.pRArea.toLowerCase().includes(searchInput.toLowerCase())){
                            return val; 
                        }

                        else if(val.groupId.toLowerCase().includes(searchInput.toLowerCase())){
                            return val; 
                        }

                    }).map((result, id) => {
                        return (
                            <>

                                <tr key={id}>
                                    <th scope="row">{id + 1}</th>

                                    <td>{result.groupId}</td>
                                    <td>{result.pTitle}</td>
                                    <td>{result.pRArea}</td>
                                    <td>{result.cosupervisor}</td>
                                    <td>{result.supervisor}</td>


                                    {/* <td>{result.name}</td>
                                    <td>{result.registrationNumber}</td>
                                    <td>{result.email}</td>
                                    <td>{result.contact}</td> */}

                                
                                    <td>
                                        <Link className='btn btn-success ms-2' to={`/view/${result._id}`}>View</Link>
                                        <Link className='btn btn-warning ms-2' to={`/edit/${result._id}`}>Update</Link>
                                        <button className='btn btn-danger ms-2'
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => deletestud(result._id)}>Delete</button>
                                    </td>
                                </tr>


                            </>
                        )
                    })}




                </tbody>
            </table>

        </div>
        </div>
    )
}
