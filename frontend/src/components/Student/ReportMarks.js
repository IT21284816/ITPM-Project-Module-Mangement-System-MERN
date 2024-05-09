import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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

    
    //search Student
    const [searchInput,setSearchInput]=useState('');
    const searchStud=(searchval)=>{
        setSearchInput(searchval)
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
                                        <Link className='btn btn-success ms-2' to={`/reportmarks/${result._id}`}>View</Link>                                       
                                    </td>
                                </tr>


                            </>
                        )
                    })}




                </tbody>
            </table>
            <Link className='btn btn-primary mt-5' to="/">Back</Link>

        </div>
        <Footer style={{ flexShrink: '0' }} />
        </div>
    )
}
