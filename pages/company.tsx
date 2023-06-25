import React, { useState } from 'react';
import Title from './title';

const Company = () =>{
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
          });
        
          const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            // Perform form submission logic here
            console.log(formData);
          };
        
          return (
            <div>
                 <h1>Company info</h1>
                 <ul>
                 <button type="submit">Submit</button>
                 </ul>
                
             
              <form onSubmit={handleSubmit}>
                <Title/>
                <label htmlFor="name">Company Name:</label>
                <input type="text" id="name" name="name" value="Pixter studios" />
        

                <label htmlFor="message">Description</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
               
                <label htmlFor="email">Website:</label>
                <input type="text" id="website" name="website" value={formData.email} onChange={handleChange} />
        
                <label htmlFor="email">Industry:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                
                <label htmlFor="email">Employee Count :</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                 
                <label htmlFor="email">Address:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        
              </form>
            </div>
          );
        };
export default Company;