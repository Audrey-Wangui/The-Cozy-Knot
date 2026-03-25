import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import signuo from '../css/Form.css'
import Footer from './Footer';

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
    <div className="container">
      <div className="form_area">
        <h1 className="title">SIGN IN</h1>
        <h5 className="text-info">{loading}</h5>
        <h3 className="text-success">{success}</h3>
        <h4 className="text-danger">{error}</h4>

        <form action onSubmit={handlesubmit}>
         <div className="form_group">
         <label className="sub_title" htmlFor="name">Email</label>  
         <input type="email"
          placeholder='Enter the email '
          className="form_style"  
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          </div> <br />

          {/* {email} */}
        <div className="form_group">
          <label className="sub_title" htmlFor="name">Password</label>
          <input type="password"
          placeholder='Enter the password here...'
          className="form_style"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
          </div> <br />

          {/* {password} */}

          <button className="btn">SIGN UP</button>
           <br /><br />

        Don't have an account? <Link className="link" to={'/signup'}> Register </Link>
        </form>

      </div>
    <Footer />
    </div>
  )
}

export default Signin;

