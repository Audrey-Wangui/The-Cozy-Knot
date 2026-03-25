import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import card from "../css/Getproducts.css";
import Patternsection from "./Patternsection.jsx"
import Advertbanner from './Advertbanner.jsx'



const Getproducts = () => {

  // Initialize hook to ghelp you manage the state of your application
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Declaire the navigate hook
  const navigate = useNavigate()

  // Below we specify the image base url
  const img_url = "https://audreywangui.alwaysdata.net/static/images/"

  // Create a function to helpyou fetch the products from your API
  const fetchProducts = async () =>{
    try{
      // Update the loading hook
      setLoading(true)

      // Interact with your endpoint for fetching the products
      const response = await axios.get("https://audreywangui.alwaysdata.net/api/get_products")

      // Update the products hook with the response given from the API
      setProducts(response.data)

      // Set loading back to default
      setLoading(false)

    }
    catch(error){
      // If there is an error, set the loading hook back to default
      setLoading(false)

      //Update the error hook with a message
      setError(error.message)

    }
  }

  // We shall use the useEffect hook that enables us to automatically re-render new features incase of any changes
  useEffect(() => {
    fetchProducts()
  }, [])

//  console.log("The products fetch are: ",products)

  return (
    <div>
      <h3>Crochet hook</h3>
        {loading && <Loader />}
        <h4 className="text-danger"> {error} </h4>

         <Patternsection />
         <Advertbanner /> 

        {/* Card One */}
        <div className="card">
        {products.map((product) => (
                
              <div className='justify-content-center'>
              <div className="card-img"><div className="img" />
              <img 
              src={img_url + product.product_photo} 
              alt="product name"
              className='product_img mt-3' />
              </div> 
              <div className="card-title">{product.product_name}</div>
              <div className="card-subtitle">
               {product.product_description.slice(0, 70)}... 
              <hr className="card-divider" />
              <div className="card-footer">
              <div className="card-price"><span>KES</span>{product.product_cost}</div> 
              <button className="card-btn" onClick={() => navigate("/makepayment",  {state : {product}})}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
             
          </button> 
              
            </div>
            </div>
            </div>
        ))}   
    </div>

        
    </div>
    
  )
}

export default Getproducts;
console.log("Render");