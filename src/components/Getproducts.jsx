import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import "../css/Getproducts.css"; // import the external css
import Patternsection from './Patternsection.jsx';
import Advertbanner from './Advertbanner.jsx';

 



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
    <div className='row'>
        {loading && <Loader />}
        <h4 className="text-danger"> {error} </h4>


<div className="row justify-content-center g-4">
  <h1>Crochet hooks</h1>

{/* Card 1 */}
<div className="col-md-4 d-flex justify-content-center">
        <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__content">

        {products.map((product) => (
            <div>
            <div className="card__badge">NEW</div>

            <div className="card__image">
              <img 
              src={img_url + product.product_photo} 
              alt="product name"
              className='product_img mt-3' />
            </div>

              <div className="card__text">
                <h5 className="card_title"> {product.product_name} </h5>
                <p className="card_description"> {product.product_description.slice(0, 70)}... </p>
              </div>

              <div className="card__footer">
              <div className="card__price">Kes {product.product_cost} </div>
              <div className="card__button" onClick={() => navigate("/makepayment",  {state : {product}})}>
              <svg height={16} width={16} viewBox="0 0 24 24">
                <path strokeWidth={2} stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor" />
              </svg>  
             </div>   
             </div> 
             </div>
              
             
        
        ))}
        </div>
    </div>
    </div>
  
  {/* card two */}
  <div className="col-md-4 d-flex justify-content-center">
        <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__content">

        {products.map((product) => (
            <div>
            <div className="card__badge">NEW</div>

            <div className="card__image">
              <img 
              src={img_url + product.product_photo} 
              alt="product name"
              className='product_img mt-3' />
            </div>

              <div className="card__text">
                <h5 className="card_title"> {product.product_name} </h5>
                <p className="card_description"> {product.product_description.slice(0, 70)}... </p>
              </div>

              <div className="card__footer">
              <div className="card__price">Kes {product.product_cost} </div>
              <div className="card__button" onClick={() => navigate("/makepayment",  {state : {product}})}>
              <svg height={16} width={16} viewBox="0 0 24 24">
                <path strokeWidth={2} stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor" />
              </svg>  
             </div>   
             </div> 
             </div>
              
             
        
        ))}
        </div>
    </div>
    </div>

  {/*Card Three  */}
  <div className="col-md-4 d-flex justify-content-center">
        <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__content">

        {products.map((product) => (
            <div>
            <div className="card__badge">NEW</div>

            <div className="card__image">
              <img 
              src={img_url + product.product_photo} 
              alt="product name"
              className='product_img mt-3' />
            </div>

              <div className="card__text">
                <h5 className="card_title"> {product.product_name} </h5>
                <p className="card_description"> {product.product_description.slice(0, 70)}... </p>
              </div>

              <div className="card__footer">
              <div className="card__price">Kes {product.product_cost} </div>
              <div className="card__button" onClick={() => navigate("/makepayment",  {state : {product}})}>
              <svg height={16} width={16} viewBox="0 0 24 24">
                <path strokeWidth={2} stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor" />
              </svg>  
             </div>   
             </div> 
             </div>
              
            
        
        ))}
        </div>
    </div>
    </div>
    

    <Patternsection />
    <Advertbanner />
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>










    </div>
  )
}

export default Getproducts;