import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/header'
import Footer from '../Footer/footer'

export default function View() {

    const [getstud, SetGetstud] = useState({});
    const { id } = useParams("");
    console.log(id);

    const getstuddata = async () => {
        const res = await fetch(`http://localhost:5000/getreport/${id}`, {
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

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
        <div className='container mt-5'>
            <h4 style={{ backgroundColor: '#F0E68C', padding: '15px' }}>Marks Report Information</h4>
            <div className='underline'></div>
            <h5 className='mt-5 mb-5'>Group Id :- {getstud.groupNumber}</h5>
            <h5>Report 01</h5>
            <table className="table mt-4">
                
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Marks</th>
                        <th scope="col">Feedback</th>
                    </tr>
                </thead>
                <tbody>                   
                    <tr>
                        <td>Student 01</td>
                        <td>{getstud.report01Student1}</td>
                        <td>{getstud.report01FeedStu1}</td>
                    </tr>
                    <tr>
                        <td>Student 02</td>
                        <td>{getstud.report01Student2}</td>
                        <td>{getstud.report01FeedStu2}</td>
                    </tr>
                    <tr>
                        <td>Student 03</td>
                        <td>{getstud.report01Student3}</td>
                        <td>{getstud.report01FeedStu3}</td>
                    </tr>
                    <tr>
                        <td>Student 04</td>
                        <td>{getstud.report01Student4}</td>
                        <td>{getstud.report01FeedStu4}</td>
                    </tr>
                    
                </tbody>
            </table>

            <h5 className='mt-5'>Proposal</h5>
            <table className="table mt-4">
                
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Marks</th>
                        <th scope="col">Feedback</th>
                    </tr>
                </thead>
                <tbody>                   
                    <tr>
                        <td>Student 01</td>
                        <td>{getstud.proposalStudent1}</td>
                        <td>{getstud.proposalFeedStu1}</td>
                    </tr>
                    <tr>
                        <td>Student 02</td>
                        <td>{getstud.proposalStudent2}</td>
                        <td>{getstud.proposalFeedStu2}</td>
                    </tr>
                    <tr>
                        <td>Student 03</td>
                        <td>{getstud.proposalStudent3}</td>
                        <td>{getstud.proposalFeedStu3}</td>
                    </tr>
                    <tr>
                        <td>Student 04</td>
                        <td>{getstud.proposalStudent4}</td>
                        <td>{getstud.proposalFeedStu4}</td>
                    </tr>
                    
                </tbody>
            </table>

            <h5 className='mt-5'>Report 02</h5>
            <table className="table mt-4">
                
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Marks</th>
                        <th scope="col">Feedback</th>
                    </tr>
                </thead>
                <tbody>                   
                    <tr>
                        <td>Student 01</td>
                        <td>{getstud.report02Student1}</td>
                        <td>{getstud.report02FeedStu2}</td>
                    </tr>
                    <tr>
                        <td>Student 02</td>
                        <td>{getstud.report02Student2}</td>
                        <td>{getstud.report02FeedStu2}</td>
                    </tr>
                    <tr>
                        <td>Student 03</td>
                        <td>{getstud.report02Student3}</td>
                        <td>{getstud.report02FeedStu3}</td>
                    </tr>
                    <tr>
                        <td>Student 04</td>
                        <td>{getstud.report02Student4}</td>
                        <td>{getstud.report02FeedStu4}</td>
                    </tr>
                    
                </tbody>
            </table>

            <h5 className='mt-5'>Report 02</h5>
            <table className="table mt-4">
                
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Marks</th>
                        <th scope="col">Feedback</th>
                    </tr>
                </thead>
                <tbody>                   
                    <tr>
                        <td>Student 01</td>
                        <td>{getstud.report02Student1}</td>
                        <td>{getstud.report02FeedStu2}</td>
                    </tr>
                    <tr>
                        <td>Student 02</td>
                        <td>{getstud.report02Student2}</td>
                        <td>{getstud.report02FeedStu2}</td>
                    </tr>
                    <tr>
                        <td>Student 03</td>
                        <td>{getstud.report02Student3}</td>
                        <td>{getstud.report02FeedStu3}</td>
                    </tr>
                    <tr>
                        <td>Student 04</td>
                        <td>{getstud.report02Student4}</td>
                        <td>{getstud.report02FeedStu4}</td>
                    </tr>
                    
                </tbody>
            </table>

            <h5 className='mt-5'>Log Book</h5>
            <table className="table mt-4">
                
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Marks</th>
                        <th scope="col">Feedback</th>
                    </tr>
                </thead>
                <tbody>                   
                    <tr>
                        <td>Student 01</td>
                        <td>{getstud.logBookStudent1}</td>
                        <td>{getstud.logBookFeedStu1}</td>
                    </tr>
                    <tr>
                        <td>Student 02</td>
                        <td>{getstud.logBookStudent2}</td>
                        <td>{getstud.logBookFeedStu2}</td>
                    </tr>
                    <tr>
                        <td>Student 03</td>
                        <td>{getstud.logBookStudent3}</td>
                        <td>{getstud.logBookFeedStu3}</td>
                    </tr>
                    <tr>
                        <td>Student 04</td>
                        <td>{getstud.logBookStudent4}</td>
                        <td>{getstud.logBookFeedStu4}</td>
                    </tr>
                    
                </tbody>
            </table>

            <h5 className='mt-5'>Final Report</h5>
            <table className="table mt-4">
                
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Marks</th>
                        <th scope="col">Feedback</th>
                    </tr>
                </thead>
                <tbody>                   
                    <tr>
                        <td>Student 01</td>
                        <td>{getstud.finalReportStu1}</td>
                        <td>{getstud.finalReportFeedStu1}</td>
                    </tr>
                    <tr>
                        <td>Student 02</td>
                        <td>{getstud.finalReportStu2}</td>
                        <td>{getstud.finalReportFeedStu2}</td>
                    </tr>
                    <tr>
                        <td>Student 03</td>
                        <td>{getstud.finalReportStu3}</td>
                        <td>{getstud.finalReportFeedStu3}</td>
                    </tr>
                    <tr>
                        <td>Student 04</td>
                        <td>{getstud.finalReportStu4}</td>
                        <td>{getstud.finalReportFeedStu4}</td>
                    </tr>
                    
                </tbody>
            </table>

            <Link className='btn btn-primary mt-5 mb-5' to="/supervisor-list">Back</Link>
        </div>
        <Footer style={{ flexShrink: '0' }} />
    </div>
    )
}
