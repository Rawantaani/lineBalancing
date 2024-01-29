
import React, { useState } from 'react';
import axios from 'axios';
const ContactUs = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        // Add your form submission logic here if needed
    
        // Update the state to show the success message and hide the form
        setFormSubmitted(true);
      };
  return (
    <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <>
          <h2>Contact Us</h2>
          {!formSubmitted?(<form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label >Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label >Message:</label>
              <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary m-2">Submit</button>
          </form>):(
                <div>
                <h2>Thank you for your submission!</h2>
                {/* You can add additional content or a redirect here if needed */}
              </div>
          )}</>
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactUs