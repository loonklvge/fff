import React from 'react'
import { useNavigate } from 'react-router-dom'
import StarRating from './StarRating'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <StarRating rating={product.rating?.rate || 0} />
      </div>
    </div>
  )
}

export default ProductCard