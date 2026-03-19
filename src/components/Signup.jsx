import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Signup = () => {
  // Initialize the hooks
  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[phone, setPhone] = useState("");

  // Define the three states an application will move to
  const[loading, setLoading] = useState("");
  const[success, setSuccess] = useState("");
  const[error, setError] = useState("");

  // Below is a function that will handle the submit action
  const handleSubmit = async(e) =>{
    // Below we prevent our site from reloading
    e.preventDefault()

    // Update our loading hook with a message that will be displayed to the users who are trying to register
    setLoading("Please wait as registration is in progress...")

    try{
      // Create a form data object that will enable u to capture the four details entered on the form
      const formdata = new FormData();

      //  Insert the four details in terms of key-value pairs
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone",phone);

      // By use of axios, we can access the method post
      const response =await axios.post("https://audreywangui.alwaysdata.net/api/signup", formdata)

      // Set back the loading to default
      setLoading("");

      // Just incase everything goes on well, update the success hook with a message
      setSuccess(response.data.message)

      // Clear your hooks
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

      setTimeout(() => {
        setSuccess("");
      }, 5000);
    }

    catch(error){
      // Set the loading hook back to default
      setLoading("");

      // Update the error hook with the message given back from the response
      setError(error.message)

    }

  }
  return (
    
    <div  className='row justify-content-center mt-4'>
        <div className="card col-md-6 shadow p-4">
          
          

          <h5 className='text-warning'> {loading} </h5>
          <h3 className="text-success"> {success} </h3>
          <h4 className="text-danger"> {error} </h4>

          <div className="page-background">
          <div className="form-container">
          <StyledWrapper>
          <form onSubmit={handleSubmit} className="form">
             <h1 className="title">Sign Up</h1>
             <h1 className="message">Signup now and get full access to our app! </h1>

            <label>
            <input type="text"
            placeholder='Enter the username'
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>
            </label> <br />
            
            {/* {username} */}

            <label>
            <input type="email" 
            placeholder='Enter the email Address'
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/> 
            </label><br />

            {/* {email} */}

            <label>
            <input type="password" 
            placeholder='Enter the Password'
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required /> 
            </label><br />

            {/* {password} */}

            <label>
            <input type="number"
            placeholder='Enter the Modile Number'
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required /> 
            </label><br />

            {/* {phone} */}

            <button className="submit">Submit</button>
            <p className="signin">Already have an acount ? <Link to={'/signin'}> Sign in</Link> </p>
          </form>
          
          
          </StyledWrapper>
          </div>
          </div>
          
          
        </div>
        </div>
    
    
  )
}

const StyledWrapper = styled.div`
  
  /* From Uiverse.io by micaelgomestavares */
.form-card {
  border: 1px solid #ddd; 
  border-radius: 12px;     
  padding: 40px;          
  box-shadow: 0 4px 6px #621e3e(0,0,0,0.1); 
}
  
  
input {
  width: 100%;        
  box-sizing: border-box; 
  display: block;     
  margin-bottom: 15px; 
}


.form {
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 3500px;
  background-color: #c6c954;
  padding: 20px;
  border-radius: 20px;
  position: relative;
}

.title {
  font-size: 28px;
  color: #621e3e;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before,.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #621e3e;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: #d9828d;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.message, .signup {
  color: #621e3e;
  font-size: 18px;
}

.signin {
  text-align: center;
}

.signin a {
  color: #621e3e;
}

.signin a:hover {
  text-decoration: underline ;
  color: #d9828d;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid #d9828d;
  border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: #621e3e;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,.form label .input:valid + span {
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: #d9828d;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  background-color: #621e3e;
  cursor: pointer;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
  }`;


export default Signup;

// Research on Axios in reactjs
// They are responsible for transfering messages between the Reactapp and your API
// The server can only understand HTTP protocals so the axios translates this