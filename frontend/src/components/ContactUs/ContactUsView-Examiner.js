import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from "../Student/Navbar"

const ContactUsView = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getcontact/${id}`);
        setContact(response.data);
      } catch (error) {
        setError(error.response?.data?.message || 'Error fetching contact');
      }
    };

    fetchContactById();
  }, [id]);

  return (
    <div>
            <Navbar />
    <div className="container mt-4">
      <br></br><br></br>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body">
              <h3 className="card-title">Contact Us Details</h3>
              {error ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : (
                contact && (
                  <div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th scope="row">Name</th>
                              <td>{contact.name}</td>
                            </tr>
                            <tr>
                              <th scope="row">Registration Number</th>
                              <td>{contact.registrationNumber}</td>
                            </tr>
                            <tr>
                              <th scope="row">Selection</th>
                              <td>{contact.selection}</td>
                            </tr>
                            <tr>
                              <th scope="row">Message</th>
                              <td>{contact.message}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <Link className='btn btn-primary mt-3' to="/examinercontactus">Back</Link>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUsView;
