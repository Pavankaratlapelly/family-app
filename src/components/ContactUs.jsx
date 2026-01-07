import React, { useState } from 'react';
import emailjs from 'emailjs-com';   // ✅ Import EmailJS
import 'bootstrap/dist/css/bootstrap.min.css';
import bg1 from '../photos/bg1.jpg'; // ✅ Background image

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    locality: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Send email using EmailJS
    emailjs.send(
      'service_s6bqa3b',          // Your Service ID
      'template_uw928ys',         // Your Template ID
      {
        name: formData.name,
        mobile: formData.mobile,
        locality: formData.locality,
        email: formData.email
      },
      'BW4gjW17efzusnQ1Q'         // Your Public Key
    ).then(
      (result) => {
        console.log('Email sent:', result.text);
        alert('Thank you! Your details have been sent successfully.');
      },
      (error) => {
        console.error('Error:', error.text);
        alert('Oops! Something went wrong.');
      }
    );
  };

  // ✅ Background style
  const pageStyle = {
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // ✅ Transparent card style
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0" style={cardStyle}>
              <div className="card-body p-4">
                <h3 className="text-center mb-4">Contact Us</h3>
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Full Name</label>
                  </div>

                  {/* Mobile */}
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="mobile">Mobile Number</label>
                  </div>

                  {/* Locality */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="locality"
                      name="locality"
                      placeholder="Locality"
                      value={formData.locality}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="locality">Locality/Address</label>
                  </div>

                  {/* Email */}
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>

                  {/* Submit */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;