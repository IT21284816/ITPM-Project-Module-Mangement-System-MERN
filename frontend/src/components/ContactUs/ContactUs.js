import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Header/header"
import Footer from '../Footer/footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    selection: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.registrationNumber.trim() || !formData.selection || !formData.message.trim()) {
      return toast.error('Please fill in all fields');
    }

    try {
      const response = await axios.post('http://localhost:5000/addcontact', formData);
      console.log(response.data);
      
      setFormData({
        name: '',
        registrationNumber: '',
        selection: '',
        message: ''
      });

      toast.success('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
    <div className="container" style={{flex: '1', marginTop:'100px'}}>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card bg-light"><h2 className="card-title mb-4 " style={{ backgroundColor: '#F0E68C', padding: '15px', textAlign:'center' }}>Contact Us</h2>
            <div className="card-body">
              
              <form onSubmit={handleSubmit}  style={{ backgroundColor: '#D3D3D3', padding: '15px' }}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="registrationNumber" className="form-label">Registration Number:</label>
                  <input type="text" id="registrationNumber" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="selection" className="form-label">Selection:</label>
                  <select id="selection" name="selection" value={formData.selection} onChange={handleChange} className="form-select">
                    <option value="">Select One</option>
                    <option value="Coordinator">Coordinator</option>
                    <option value="Examiner">Examiner</option>
                    <option value="Project-Manager">Project Manager</option>
                    <option value="Co-Supervisor">Co-Supervisor</option>
                    <option value="Supervisor">Supervisor</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message:</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-control" />
                </div>
                <br></br>
                <div className='d-flex justify-content-between'>
                <div>
                    <NavLink className='btn btn-primary' to="/">Back</NavLink>
                    </div>
                <button type="submit" className="btn btn-success btn-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
    <Footer style={{ flexShrink: '0' }} />
    </div>
  );
};

export default ContactUs;
