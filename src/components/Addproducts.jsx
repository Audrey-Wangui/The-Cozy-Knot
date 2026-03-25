import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';
import Form from '../css/Form.css'

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
    <div className="container">
      <div className="form_area">
        <h1 className="title">ADD PRODUCTS</h1>

        {/* Bind the loading hook */}
        {loading && <Loader />}

          <h3 className='text-success'> {success} </h3>
          <h4 className='text-danger'> {error} </h4>

        <form action onSubmit={handleSubmit}>
          <div className="form_group">
          <label className="sub_title" htmlFor="name">Product Name</label>
          <input type="text"
          placeholder='Enter the product name'
          className="form_style"
          required
          value={product_name}
          onChange={(e) => setProductName(e.target.value)} />
          </div> <br />

          {/* {product_name} */}

          <div className="form_group">
          <label className="sub_title" htmlFor="name">Product Description</label>
          <input type="text" 
          placeholder='Enter the product description'
          className="form_style"
          required
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}/> 
          </div><br />

          {/* {product_description} */}
    
          <div className="form_group">
          <label className="sub_title" htmlFor="name">Product Cost</label>  
          <input type="number" 
          placeholder='Enter the product cost'
          className="form_style"
          required
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)}/>
          </div> <br />

          {/* {product_cost} */}
          
          <div className="form_group">
          <label className="sub_title" htmlFor="name">Product Description</label>
          <input type="file" 
          className="form_style"
          required
          accept='image/*'
          onChange={(e) => setProductPhoto(e.target.files[0])}/> </div><br />

          <button className="btn">SIGN UP</button>
            <br /><br />
        </form> 
      </div>
        
    </div>
  )
}

export default Addproducts;                                                       