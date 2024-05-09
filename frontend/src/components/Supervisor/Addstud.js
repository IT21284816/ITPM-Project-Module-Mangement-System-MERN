import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Header from '../Header/header'
import Footer from '../Footer/footer'

export default function Addstud() {
    const navigate = useNavigate();
    const [inputdata,setInputdata]=useState({
        "groupNumber": "",
        "report01Student1": "", "report01Student2": "", "report01Student3": "", "report01Student4": "",
        "report01FeedStu1": "", "report01FeedStu2": "", "report01FeedStu3": "", "report01FeedStu4": "", 

        "proposalStudent1": "", "proposalStudent2": "", "proposalStudent3": "", "proposalStudent4": "", 
        "proposalFeedStu1": "", "proposalFeedStu2": "", "proposalFeedStu3": "", "proposalFeedStu4": "",

        "report02Student1": "", "report02Student2": "", "report02Student3": "", "report02Student4": "",
        "report02FeedStu1": "", "report02FeedStu2": "", "report02FeedStu3": "", "report02FeedStu4": "", 

        "logBookStudent1": "", "logBookStudent2": "", "logBookStudent3": "", "logBookStudent4": "", 
        "logBookFeedStu1": "", "logBookFeedStu2": "", "logBookFeedStu3": "", "logBookFeedStu4": "", 

        "finalReportStu1": "", "finalReportStu2": "", "finalReportStu3": "", "finalReportStu4": "", 
        "finalReportFeedStu1": "", "finalReportFeedStu2": "", "finalReportFeedStu3": "", "finalReportFeedStu4": "", 
    })
    
    //onchange function
    const setstud = (e) => {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value });   
    }
    
    //onclick event
    const addinpdata = async (e) => {
        e.preventDefault();
    
        const { groupNumber, 
            report01Student1, report01Student2, report01Student3, report01Student4,
            report01FeedStu1, report01FeedStu2, report01FeedStu3, report01FeedStu4,
            proposalStudent1, proposalStudent2, proposalStudent3, proposalStudent4,  
            proposalFeedStu1, proposalFeedStu2, proposalFeedStu3, proposalFeedStu4, 
            report02Student1, report02Student2, report02Student3, report02Student4, 
            report02FeedStu1, report02FeedStu2, report02FeedStu3, report02FeedStu4, 
            logBookStudent1,  logBookStudent2, logBookStudent3, logBookStudent4, 
            logBookFeedStu1,  logBookFeedStu2, logBookFeedStu3, logBookFeedStu4, 
            finalReportStu1, finalReportStu2, finalReportStu3, finalReportStu4, 
            finalReportFeedStu1,  finalReportFeedStu2, finalReportFeedStu3, finalReportFeedStu4
        } = inputdata;
    
        // Check if required fields are empty
        if( !groupNumber ||
            !report01Student1 || 
            !report01FeedStu1 || 
            !proposalStudent1 || 
            !proposalFeedStu1 || 
            !report02Student1 || 
            !report02FeedStu1 || 
            !logBookStudent1 || 
            !logBookFeedStu1 || 
            !finalReportStu1 || 
            !finalReportFeedStu1
        ) {
            toast.error('Please fill in all required fields.');
            return;
        }
    
        const res = await fetch("http://localhost:5000/addreport", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                groupNumber, 
            report01Student1, report01Student2, report01Student3, report01Student4,
            report01FeedStu1, report01FeedStu2, report01FeedStu3, report01FeedStu4,
            proposalStudent1, proposalStudent2, proposalStudent3, proposalStudent4,  
            proposalFeedStu1, proposalFeedStu2, proposalFeedStu3, proposalFeedStu4, 
            report02Student1, report02Student2, report02Student3, report02Student4, 
            report02FeedStu1, report02FeedStu2, report02FeedStu3, report02FeedStu4, 
            logBookStudent1,  logBookStudent2, logBookStudent3, logBookStudent4, 
            logBookFeedStu1,  logBookFeedStu2, logBookFeedStu3, logBookFeedStu4, 
            finalReportStu1, finalReportStu2, finalReportStu3, finalReportStu4, 
            finalReportFeedStu1,  finalReportFeedStu2, finalReportFeedStu3, finalReportFeedStu4
         })
        });
    
        const data = await res.json();
        console.log(data);
    
        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");
        } else {
            setInputdata(data);
            toast.success('Please wait!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                navigate('/supervisor-list');
            }, 3000);
        }
    }
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <div className='container mt-5' style={{flex: '1'}}>
            <h4>Report - Marks</h4>
            <div className='underline'></div>
            <form className='mt-5 shadow p-5 w-100'>


            <div className="mb-3">
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Group Number</h5>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Group Number" 
                    onChange={setstud} name="groupNumber" value={inputdata.groupNumber}/>
                </div></div></div></div>
                <br></br>

                <div className="mb-3">
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Report 01</h5>
                        
                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 01 Marks"
                            onChange={setstud} name="report01Student1" value={inputdata.report01Student1}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Report 01 - Student 01 Feedback" 
                    onChange={setstud} name="report01FeedStu1" value={inputdata.report01FeedStu1}/>
                    </div>  </div>  </div>

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 02 Marks"
                            onChange={setstud} name="report01Student2" value={inputdata.report01Student2}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Report 01 - Student 02 Feedback" 
                    onChange={setstud} name="report01FeedStu2" value={inputdata.report01FeedStu2}/>
                    </div> </div> </div>

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 03 Marks"
                            onChange={setstud} name="report01Student3" value={inputdata.report01Student3}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Report 01 - Student 03 Feedback" 
                    onChange={setstud} name="report01FeedStu3" value={inputdata.report01FeedStu3}/>
                    </div> </div> </div> 

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 04 Marks"
                            onChange={setstud} name="report01Student4" value={inputdata.report01Student4}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Report 01 - Student 04 Feedback" 
                    onChange={setstud} name="report01FeedStu4" value={inputdata.report01FeedStu4}/>
                    </div> </div> </div>                  
                 
                </div></div></div>
                <br></br>
                                                                                                                                     {/* Proposal Marks */}
                <div className="mb-3">                                                                                 
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Proposal</h5>
                        <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 01 Marks"
                            onChange={setstud} name="proposalStudent1" value={inputdata.proposalStudent1}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Proposal - Student 01 Feedback" 
                    onChange={setstud} name="proposalFeedStu1" value={inputdata.proposalFeedStu1}/>
                    </div>  </div>  </div>

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 02 Marks"
                            onChange={setstud} name="proposalStudent2" value={inputdata.proposalStudent2}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Proposal - Student 02 Feedback" 
                    onChange={setstud} name="proposalFeedStu2" value={inputdata.proposalFeedStu2}/>
                    </div> </div> </div>

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 03 Marks"
                            onChange={setstud} name="proposalStudent3" value={inputdata.proposalStudent3}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Proposal - Student 03 Feedback" 
                    onChange={setstud} name="proposalFeedStu3" value={inputdata.proposalFeedStu3}/>
                    </div> </div> </div> 

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 04 Marks"
                            onChange={setstud} name="proposalStudent4" value={inputdata.proposalStudent4}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Proposal - Student 04 Feedback" 
                    onChange={setstud} name="proposalFeedStu4" value={inputdata.proposalFeedStu4}/>
                    </div> </div> </div>
                </div></div></div>
                <br></br>


                 <div className="mb-3">                                                                                                     {/* Report 02 */}
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Report 02</h5>
                        <div className="row">
                        <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 02 Marks"
                            onChange={setstud} name="report02Student1" value={inputdata.report02Student1}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Report 02 - Student 01 Feedback" 
                    onChange={setstud} name="report02FeedStu1" value={inputdata.report02FeedStu1}/>
                    </div>  </div>  </div>

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 02 Marks"
                            onChange={setstud} name="report02Student2" value={inputdata.report02Student2}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Report 02 - Student 02 Feedback" 
                    onChange={setstud} name="report02FeedStu2" value={inputdata.report02FeedStu2}/>
                    </div> </div> </div>

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 03 Marks"
                            onChange={setstud} name="report02Student3" value={inputdata.report02Student3}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Report 02 - Student 03 Feedback" 
                    onChange={setstud} name="report02FeedStu3" value={inputdata.report02FeedStu3}/>
                    </div> </div> </div> 

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 04 Marks"
                            onChange={setstud} name="report02Student4" value={inputdata.report02Student4}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Report 02 - Student 04 Feedback" 
                    onChange={setstud} name="report02FeedStu4" value={inputdata.report02FeedStu4}/>
                    </div> </div> </div>
                </div></div></div>
                <br></br>


                <div className="mb-3">                                                                                                     {/* Log Book */}
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Log Book</h5>
                        <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 01 Marks"
                            onChange={setstud} name="logBookStudent1" value={inputdata.logBookStudent1}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Student 01 Feedback" 
                    onChange={setstud} name="logBookFeedStu1" value={inputdata.logBookFeedStu1}/>
                    </div>  </div>  </div>

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 02 Marks"
                            onChange={setstud} name="logBookStudent2" value={inputdata.logBookStudent2}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Student 02 Feedback" 
                    onChange={setstud} name="logBookFeedStu2" value={inputdata.logBookFeedStu2}/>
                    </div> </div> </div>

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 03 Marks"
                            onChange={setstud} name="logBookStudent3" value={inputdata.logBookStudent3}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Student 03 Feedback" 
                    onChange={setstud} name="logBookFeedStu3" value={inputdata.logBookFeedStu3}/>
                    </div> </div> </div> 

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 04 Marks"
                            onChange={setstud} name="logBookStudent4" value={inputdata.logBookStudent4}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Student 04 Feedback" 
                    onChange={setstud} name="logBookFeedStu4" value={inputdata.logBookFeedStu4}/>
                    </div> </div> </div>
                </div></div></div>
                <br></br>


                <div className="mb-3">                                                                                                  {/*Final Report*/}
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Final Report</h5>
                        <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 01 Marks"
                            onChange={setstud} name="finalReportStu1" value={inputdata.finalReportStu1}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Student 01 Feedback" 
                    onChange={setstud} name="finalReportFeedStu1" value={inputdata.finalReportFeedStu1}/>
                    </div>  </div>  </div>

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 02 Marks"
                            onChange={setstud} name="finalReportStu2" value={inputdata.finalReportStu2}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Student 02 Feedback" 
                    onChange={setstud} name="finalReportFeedStu2" value={inputdata.finalReportFeedStu2}/>
                    </div> </div> </div>

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 03 Marks"
                            onChange={setstud} name="finalReportStu3" value={inputdata.finalReportStu3}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Student 03 Feedback" 
                    onChange={setstud} name="finalReportFeedStu3" value={inputdata.finalReportFeedStu3}/>
                    </div> </div> </div> 

                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student 04 Marks"
                            onChange={setstud} name="finalReportStu4" value={inputdata.finalReportStu4}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="mb-0">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Student 04 Feedback" 
                    onChange={setstud} name="finalReportFeedStu4" value={inputdata.finalReportFeedStu4}/>
                    </div> </div> </div>
                    </div>
                </div>
                </div><br></br>

                <div className='d-flex'>
                         <button className='btn btn-primary' onClick={addinpdata}>Submit</button>
                         <ToastContainer />
                         <NavLink className='btn btn-primary ms-auto' to="/supervisor-home">Back to Home</NavLink>
                </div>             
            </form>
            <br></br><br></br><br></br>
        </div>
        <Footer style={{ flexShrink: '0' }} />
        </div>
    )
}
