import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Signin = () => {

  // Define the two hooks for capturing/storing the user's input
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Declaire the 3 additional hooks
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Below we have the useNavigate hook to redirect us to another page on successful login/signin
  const navigate = useNavigate("")

  // Below is the function to handle the submit function
  const handlesubmit = async (e) =>{
    
    // prevent site from reloading
    e.preventDefault()

    // Update the loading hook with a message
    setLoading("Please wait as we authenticate your account...")

    try{

    
    
      // Create form data object that will hold the email and password
      const formdata = new FormData()

      // Insert/append the email and password on the formdata created
      formdata.append("email", email);
      formdata.append("password", password);

      // Interact with axios for response
      const response = await axios.post("https://audreywangui.alwaysdata.net/api/signin", formdata);

      // Set the loading hook back to default
      setLoading("");

      // Check whether the user exists as part of your response from the API
      if(response.data.user){
      // Store details in local storage.
      localStorage.setItem("user", JSON.stringify(response.data.user)); 
      // If user is there, definately the details entered during sign in are correct
      // setSuccess("Login Successful")
      // If its successful let a person be redirected to another page
      navigate("/");
      }
      else{
        // user not found, that means the credentials entered on the form are incorrect
        setError("Login Failed. Please try again...")
      }

      setTimeout(() => {
        setSuccess("");
      }, 5000);
      
    }   
    catch(error){
      // Set loading back to default
      setLoading("")

      // Update error hook with a message
      setError("Oops, something went wrong. Try again...")
    }
  }

  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
        
        <h5 className="text-info">{loading}</h5>
        <h3 className="text-success">{success}</h3>
        <h4 className="text-danger">{error}</h4>

        <div className="page-background">
        <div className="form-container">
        <StyledWrapper>

        <form onSubmit={handlesubmit} className="form">
          <h1 className="title">Sign In</h1>
          <h1 className="message">Welcome Back! </h1>

          <label>
          <input type="email"
          placeholder='Enter your email'
          className="input"  
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          </label> <br />

          {/* {email} */}

          <label>
          <input type="password"
          placeholder='Enter your password'
          className="input"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)} /> 
          </label> <br />

          {/* {password} */}

         <button className="submit">Submit</button>
         <p className="signin">Don't have an Account? <Link to={'/signup'}> Sign up</Link> </p> 
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
  background-color: #d9828d;
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
  font-size: 25px;
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

export default Signin;

