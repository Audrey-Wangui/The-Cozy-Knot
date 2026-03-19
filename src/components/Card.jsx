import React from 'react'
import styled from 'styled-components'


const Card = ({ product, img_url, navigate }) => {
    
  return (
    <StyledWrapper>
      <section className="card">
    
            <img 
              src={img_url + product.product_photo} 
              alt="product"
              className='product_img' 
            />

            <div className="card_content">
              <p className='card_title'>{product.product_name}</p>

              <p className="card_description">{product.product_description?.slice(0, 70)}...</p>
              
              <h4 className="price">Kes {product.product_cost}</h4>

              <button 
                className="purchase_button"
                onClick={() => navigate("/makepayment", { state: { product } })}
              >
                Purchase Now
              </button>
            </div>
                
      </section>
    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`
 
section.card {
    position: relative;
    width: 250px;
    height: 250px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card {
  position: relative;
  width: 250px;
  height: 250px;
  overflow: hidden;
  perspective: 1000px;

  transform-style: preserve-3d;
}


.price {
  color: #621e3e;
  font-weight: bold;
}
  
.product_img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  z-index: 1;
}
  


.card:hover .product_img {
  transform: rotateX(90deg);
}
  
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px #774c53;
    background-color: #c6c954;
    color: #323b14;
  }

  .card .card_title {
  font-size: 20px;
  color: #fff8d2;
  
  }

  
  .purchase_button {
   border: none;
  outline: none;
  background-color: #d9828d;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease
  }

  .purchase_button:hover{
  background-color: #621e3e;
  cursor: pointer;
  }

  .card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #f2f2f2;

  transform: rotateX(-90deg);
  transform-origin: bottom;

  backface-visibility: hidden;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

  .card:hover .card__content {
    transform: rotateX(0deg);
    opacity: 1;
    visibility: visible;
  }

  card__title {
    margin: 0;
    padding-left: 5px;
    font-size: 30px;
    color: #c6c954;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #000000;
    line-height: 1.4;
  }
  /* Commands to change the shadows in dark mode
  @media (prefers-color-scheme: dark) {
    .card:hover {
    box-shadow: 0 8px 16px #000000;
    }
  }*/`;

export default Card;


