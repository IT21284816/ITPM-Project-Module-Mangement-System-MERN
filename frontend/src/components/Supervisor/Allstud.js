import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Header from '../Header/header'
import Footer from '../Footer/footer'

export default function Allstud() {

    const [getstud, SetGetstud] = useState([]);
    console.log(getstud)
    //get student Data
    const getstuddata = async () => {

        const res = await fetch("http://localhost:5000/getreport", {
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

        const res2 = await fetch(`http://localhost:5000/deletereport/${id}`, {
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
    //search Student
    const [searchInput,setSearchInput]=useState('');
    const searchStud=(searchval)=>{
        setSearchInput(searchval)
    }
    //Generate report
    const generatePDF = () => {
        // create new PDF object
        const doc = new jsPDF();
    
        // set company name
        const companyName = 'Project';
        // set current date and time
        const today = new Date();
        const date = today.toLocaleDateString();
        const time = today.toLocaleTimeString();
    
        // add company name and date/time to PDF
        doc.text(`${companyName}\nReport Generated on: ${date} at ${time}`, 14, 20);
    
        // add table data to PDF
        doc.autoTable({
            startY: 40, // set Y position to start the table
            head: [['No', 'Group Id', 'All Final Report Marks' ]],
            body: getstud.map((result, id) => [id + 1, result.groupNumber, `${result.finalReportStu1}, ${result.finalReportStu2},${result.finalReportStu3},${result.finalReportStu4}`])
        });
    
        // save PDF file
        doc.save('report.pdf');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
        <div className='container mt-5' style={{flex: '1'}}>
            <div className='d-flex'>
                <h4 style={{ backgroundColor: '#F0E68C', padding: '15px' }}>All Report Information</h4>
                <div class="ms-auto w-50">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search Report" 
                        onChange={(e)=>searchStud(e.target.value)}
                    />
                     
                </div>
            </div>

            <div className='underline'></div>
            <button className='btn btn-primary mt-4' onClick={() => generatePDF()}>Generate Report</button>
            <table className="table table-bordered mt-5">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Group Number</th>
                        <th scope="col">Report 1 Marks</th>
                        <th scope="col">Proposal Marks</th>
                        <th scope="col">Report 2 Marks </th>
                        <th scope="col">Log Book </th>
                        <th scope="col">Final Report Marks </th>
                        <th scope="col">Action </th>
                    </tr>
                </thead>
                <tbody>

                    {getstud.filter((val)=>{
                        if(searchInput == ""){
                            return val
                        }else if(val.groupNumber.toLowerCase().includes(searchInput.toLowerCase())){
                            return val; 
                        }
                    }).map((result, id) => {
                        return (
                            <>

                                <tr key={id}>
                                    <th scope="row">{id + 1}</th>
                                    <td>{result.groupNumber}</td>                                    
                                    <td>
                                        <tr>Student 1:- {result.report01Student1}</tr>
                                        <tr>Student 2:- {result.report01Student2}</tr>
                                        <tr>Student 3:- {result.report01Student3}</tr>
                                        <tr>Student 4:- {result.report01Student4}</tr>
                                    </td>
                                    <td>
                                        <tr>Student 1:- {result.proposalStudent1}</tr>
                                        <tr>Student 2:- {result.proposalStudent2}</tr>
                                        <tr>Student 3:- {result.proposalStudent3}</tr>
                                        <tr>Student 4:- {result.proposalStudent4}</tr>
                                    </td>
                                    <td>
                                        <tr>Student 1:- {result.report02Student1}</tr>
                                        <tr>Student 2:- {result.report02Student2}</tr>
                                        <tr>Student 3:- {result.report02Student3}</tr>
                                        <tr>Student 4:- {result.report02Student4}</tr>
                                    </td>
                                    <td>
                                        <tr>Student 1:- {result.logBookStudent1}</tr>
                                        <tr>Student 2:- {result.logBookStudent2}</tr>
                                        <tr>Student 3:- {result.logBookStudent3}</tr>
                                        <tr>Student 4:- {result.logBookStudent4}</tr>
                                    </td>
                                    <td>
                                        <tr>Student 1:- {result.finalReportStu1}</tr>
                                        <tr>Student 2:- {result.finalReportStu2}</tr>
                                        <tr>Student 3:- {result.finalReportStu3}</tr>
                                        <tr>Student 4:- {result.finalReportStu4}</tr>
                                    </td>
                                    <td>
                                        <Link className='btn btn-success ms-2' to={`/supervisorview/${result._id}`}>View</Link>
                                        <Link className='btn btn-warning ms-2' to={`/supervisoredit/${result._id}`}>Update</Link>
                                        <button className='btn btn-danger ms-2'
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => deletestud(result._id)}>Delete</button>
                                    </td>
                                </tr>


                            </>
                        )
                    })}




                </tbody>
            </table>
            <Link className='btn btn-primary mt-5' to="/supervisor-home">Back</Link>

        </div>
        <Footer style={{ flexShrink: '0' }} />
        </div>
    )
}
