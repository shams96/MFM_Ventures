import React, { useState } from 'react';

    function Signup() {
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [messageSent, setMessageSent] = useState(false);

        const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data (Simulated Send):', formData);
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' }); //Clear form

        // Remove message after a few seconds
        setTimeout(() => {
          setMessageSent(false);
        }, 3000);
      };
      return (
        <div className="container">
          <section className='signup-form'>
            <h2>Join the Community (Placeholder)</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name='name' placeholder='Your Name' value={formData.name} onChange={handleInputChange} required/>
              <input type="email" name='email' placeholder='Your Email'value={formData.email} onChange={handleInputChange} required />
              <input type="text" name='password' placeholder='Password' />
              <button type="submit">Sign Up (Simulated)</button>
            </form>
             {messageSent && <p className='message-sent'>Thank you for your interest!</p>}
          </section>
        </div>
      )
    }

    export default Signup;
