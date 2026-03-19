import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';
import styled from 'styled-components';

const Addproducts = () => {

  // Introduce the hooks
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  // Declare the additional hook to manage the state of the application
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Create a function that will handle the submit action
  const handleSubmit = async (e) =>{
  
    // Prevent site from reloading
    e.preventDefault()

    // Set loading hook with a message(activate it)
    setLoading(true)

    try{
      // Create a form data
      const formdata = new FormData()

      // Append the details to the form data created
      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);

      // Interect with axios to help you use the method post
      const response = await axios.post("https://audreywangui.alwaysdata.net/api/add_products", formdata);

      // Set loading hook back to default
      setLoading(false)

      // Update the success hook with a message
      setSuccess(response.data.message)

      // Setting the hooks back to default
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");

      e.target.reset()

      setTimeout(() => {
        setSuccess("");
      }, 5000);
    }
    catch(error){
      // Set loading to default
      setLoading(false)

      // Update the setError with a message
      setError(error.message)

    }
  }
  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 p-4 card shadow">
        

        {/* Bind the loading hook */}
        {loading && <Loader />}

          <h3 className='text-success'> {success} </h3>
          <h4 className='text-danger'> {error} </h4> 

        <div className="page-background">
        <div className="form-container">
        <StyledWrapper>
        <form onSubmit={handleSubmit} className="form">
           <h1 className="title">Welcome to Add Products</h1>
           <h1 className="message">Input your product</h1>

          
          <label>
          <input type="text"
          placeholder='Enter the product name'
          className="input"
          required
          value={product_name}
          onChange={(e) => setProductName(e.target.value)} /> 
          </label><br />

          {/* {product_name} */}

          <label>
          <input type="text" 
          placeholder='Enter the product description'
          className="input"
          required
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}/> 
          </label><br />

          {/* {product_description} */}

          <label>
          <input type="number" 
          placeholder='Enter the product cost'
          className="input"
          required
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)}/>
          </label> <br />

          {/* {product_cost} */}

          <b><label className="photoname">Product Photo</label></b>
          <input type="file" 
          className="photo"
          required
          accept='image/*'
          onChange={(e) => setProductPhoto(e.target.files[0])}/> <br />

           <button className="submit">Add Product</button>
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

.photo {
  border: none;
  outline: none;
  background-color: #667436;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
}

.photoname {
  color: #621e3e;
  font-size: 18px;
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

export default Addproducts;                                                       
