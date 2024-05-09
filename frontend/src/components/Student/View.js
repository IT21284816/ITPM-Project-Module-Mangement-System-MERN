import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from "./Navbar"
export default function View() {

    const [getstud, SetGetstud] = useState([]);

    const { id } = useParams("");
    console.log(id);

    const getstuddata = async () => {
        const res = await fetch(`http://localhost:5000/getstud/${id}`, {
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
        <div>
            <Navbar />
        <div className='container mt-5'>
             <h4>All Student Information</h4>
            <div className='underline'></div>
            <ul className="list-group w-50 mt-4">

                <li className="list-group-item active" aria-current="true">Project Information</li>
                <li className="list-group-item">Student Name:- {getstud.groupId}</li>
                <li className="list-group-item">Student Name:- {getstud.pTitle}</li>
                <li className="list-group-item">Student Name:- {getstud.pRArea}</li>
                <li className="list-group-item">Student Name:- {getstud.cosupervisor}</li>
                <li className="list-group-item">Student Name:- {getstud.supervisor}</li>
                <br></br>

                <li className="list-group-item active" aria-current="true">Student - 01 (Leader) Details</li>
                <li className="list-group-item">Student Name:- {getstud.name}</li>
                <li className="list-group-item">Student Registration Number:-  {getstud.registrationNumber}</li>
                <li className="list-group-item">Student Email:-  {getstud.email}</li>
                <li className="list-group-item">Student Mobile:-  {getstud.contact}</li>
                <br></br>

                <li className="list-group-item active" aria-current="true">Student - 02 Details</li>
                <li className="list-group-item">Student Name:- {getstud.name2}</li>
                <li className="list-group-item">Student Registration Number:-  {getstud.registrationNumber2}</li>
                <li className="list-group-item">Student Email:-  {getstud.email2}</li>
                <li className="list-group-item">Student Mobile:-  {getstud.contact2}</li>
                <br></br>

                <li className="list-group-item active" aria-current="true">Student - 03 Details</li>
                <li className="list-group-item">Student Name:- {getstud.name3}</li>
                <li className="list-group-item">Student Registration Number:-  {getstud.registrationNumber3}</li>
                <li className="list-group-item">Student Email:-  {getstud.email3}</li>
                <li className="list-group-item">Student Mobile:-  {getstud.contact3}</li>
                <br></br>

                <li className="list-group-item active" aria-current="true">Student - 04 Details</li>
                <li className="list-group-item">Student Name:- {getstud.name4}</li>
                <li className="list-group-item">Student Registration Number:-  {getstud.registrationNumber4}</li>
                <li className="list-group-item">Student Email:-  {getstud.email4}</li>
                <li className="list-group-item">Student Mobile:-  {getstud.contact4}</li>
                

            </ul>
            <Link className='btn btn-primary mt-5' to="/allstud">Back</Link>
            
        </div>
        </div>
    )
}
