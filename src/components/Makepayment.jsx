import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from './Loader'
import "../css/Makepayment.css" // import the external css

const Makepayment = () => {
    // Destructure the details passed from the get products component
    // The useLocation hook allows us to destructure the properties passed from the previous component
    
    const {product} = useLocation().state || {}

      // Declaire the navigate hook
  const navigate = useNavigate()
    // console.log("The details of the products are...", product)
    
     // Below we specify the image base url
  const img_url = "https://audreywangui.alwaysdata.net/static/images/"

    //Initialize hooks to manage the state of your application
    const [number, setNumber] = useState("")
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    
    // Create a function that wiil handle the submit function
    const handlesubmit = async (e) =>{
        // Prevent the site from reloading
        e.preventDefault()
        // Update the loading hook
        setLoading(true)

        try{
            // Create a form data object
            const formdata = new FormData()

            // Append the data to the form data
            formdata.append("phone", number)
            formdata.append("amount", product.product_cost)

            const response = await axios.post("https://audreywangui.alwaysdata.net/api/mpesa_payment", formdata)
            
            // Set loading back to default
            setLoading(false)

            // Update the success hook with a message
            setSuccess(response.data.message)
            

        }

        catch(error){
            // If there is an error, respond to the error
            setLoading(false)

            // Update the error hook with the error message
            setError(error.message)

        }
    }

    return(
  <div className='row justify-content-center'>
    <form onSubmit={handlesubmit}>
      <div className="card">
        <div className="card-img">
          <img src={img_url + product.product_photo} alt="Product name" />
        </div>
        
        <div className="card-info">
          <p className="text-title">{product.product_name}</p>
          <p className="text-body text-light">{product.product_description}</p>
          <p className="text-body text-warning">KES {product.product_cost}</p>
        </div>

        <div className="card-footer">
          <span className="text-title">
            <input 
              type="number"
              className='form-control'
              placeholder='Enter the Phone Number (254xxxxxxxxx)'
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </span>
          <div className="card-button">
            Make Payment
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M17.72,5.011H8.026c-0.27,1-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.9621-1.979,4.773H6.763L4.935,5.343C4.926" />
              <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853514.994,12.386,13.972,12.386z" />
            </svg>
          </div>
        </div>
        
        {loading && <Loader />}
        <h3 className='text-success'>{success}</h3>
        <h4 className='text-danger'>{error}</h4>
      </div>
    </form>
  </div>
);
}
export default Makepayment;

