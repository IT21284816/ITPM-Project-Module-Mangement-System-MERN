import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Navbar from "../Student/Navbar"

const ContactUs = () => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const fetchContactList = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getcontacts');
        setContactList(response.data);
      } catch (error) {
        console.error('Error fetching contact list:', error);
      }
    };

    fetchContactList();
  }, []);

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deletecontact/${id}`);
      setContactList(contactList.filter(contact => contact._id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const contactCardStyle = `
    .contact-card {
      transition: transform 0.3s ease-in-out;
      background-color: #f8f9fa; /* Card background color */
      border: 1px solid #dee2e6; /* Card border color */
    }

    .contact-card:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Shadow on hover */
    }
  `;

  return (
    <div>
            <Navbar />
    <div className="container mt-4">
      <br></br>
      <style>{contactCardStyle}</style>
      <h3>All Contact Us</h3>
      <br></br>
      <div className="row">
        {contactList.map((contact, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card className="h-100 contact-card">
              <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>
                  <strong>Registration Number:</strong> {contact.registrationNumber}<br />
                  <strong>Selection:</strong> {contact.selection}<br />
                  {/* <strong>Message:</strong> {contact.message}<br /> */}
                </Card.Text>
                <div>
                  <td>
                    <th><Link to={`/contactusview/${contact._id}`}>
                    <Button variant="primary" className="mr-2">View</Button></Link></th>
                    <th></th>
                    <th><Button variant="danger" onClick={() => handleDeleteClick(contact._id)}>Delete</Button></th>
                  </td>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
