import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import Card from "./Card";
 



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
      <h3 className="text-primary">Our products</h3>
        {loading && <Loader />}
        <h4 className="text-danger"> {error} </h4>

{/* The hooks section */}
        <div>
        <h5>Crochet Hooks</h5>
        {products.map((product) => (
        <div className='col-md-3 mb-3 justify-content-center' key={product.id}>
            <Card
            product={product}
            img_url={img_url}
            navigate={navigate}
        />     
        </div>     
        )
        )}
        </div>

{/* The yarn section */}
        <div>
        <h5>Yarn</h5>
        {products.map((product) => (
        <div className='col-md-3 mb-3 justify-content-center' key={product.id}>
            <Card
            product={product}
            img_url={img_url}
            navigate={navigate}
        />     
        </div>     
        )
        )}
        </div>

{/* The darning needles and stitch markers section */}
        <div>
        <h5>Crochet Hooks</h5>
        {products.map((product) => (
        <div className='col-md-3 mb-3 justify-content-center' key={product.id}>
            <Card
            product={product}
            img_url={img_url}
            navigate={navigate}
        />     
        </div>     
        )
        )}
        </div>

{/* The patterns section */}
        <div>
        <h5>Crochet Hooks</h5>
        {products.map((product) => (
        <div className='col-md-3 mb-3 justify-content-center' key={product.id}>
            <Card
            product={product}
            img_url={img_url}
            navigate={navigate}
        />     
        </div>     
        )
        )}
        </div>
    
    </div>
  )
}

export default Getproducts;