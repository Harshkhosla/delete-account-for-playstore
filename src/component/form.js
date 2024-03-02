import React, { useState } from 'react';
import './form.css';
import axios from "axios"
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send email and password to backend API endpoint for deletion
      const response = await axios.delete("https://adminbackendjouls-production.up.railway.app/admin/deleteUser/delete", {
        data: { // Send data in the request body
          email: email,
          password: password
        }
      });
      console.log(response.data); // Log response from the server
      // Add any further logic based on the response if needed
    } catch (error) {
      console.error("Error:", error); // Log any errors
      // Handle errors if necessary
    }
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
