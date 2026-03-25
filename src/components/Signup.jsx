import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import signup from '../css/Form.css';

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
    <div  className="container">
        <div className="form_area">
          <h1 className="title">SIGN UP</h1>

          <h5 className='text-warning'> {loading} </h5>
          <h3 className="text-success"> {success} </h3>
          <h4 className="text-danger"> {error} </h4>

          <form action onSubmit={handleSubmit}>
            <div className="form_group">
            <label className="sub_title" htmlFor="name">Name</label>
            <input type="text"
            placeholder='Enter the username'
            className="form_style" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/> 
            </div><br />

            {/* {username} */}
            <div className="form_group">
            <label className="sub_title" htmlFor="email">Email</label>
            <input type="email" 
            placeholder='Enter the email Address'
            className="form_style"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
            </div> <br />

            {/* {email} */}
            <div className="form_group">
            <label className="sub_title" htmlFor="password">Password</label>
            <input type="password" 
            placeholder='Enter the Password'
            className="form_style"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
            </div> <br />

            {/* {password} */}
            <div className="form_group">
             <label className="sub_title" htmlFor="password">Phone</label>
            <input type="number"
            placeholder='Enter the Modile Number'
            className="form_style"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required />
            </div> <br />

            {/* {phone} */}

            <button className="btn">SIGN UP</button>
            <br /><br />

            Already have an account? <Link  className="link" to={'/signin'}> Sign in</Link>
          </form>
        </div>
    </div>
  )
}

export default Signup;

// Research on Axios in reactjs
// They are responsible for transfering messages between the Reactapp and your API
// The server can only understand HTTP protocals so the axios translates this