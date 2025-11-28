import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'

const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!response.ok) {
          throw new Error('Product not found')
        }
        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleBack = () => {
    navigate(-1)
  }

  if (loading) {
    return <div className="loading">Loading product...</div>
  }

  if (error || !product) {
    return (
      <div className="error">
        Product not found
        <button onClick={handleBack} className="back-button">Back</button>
      </div>
    )
  }

  return (
    <div className="product-detail">
      <button onClick={handleBack} className="back-button">← Back</button>
      
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        
        <div className="product-detail-info">
          <h1>{product.title}</h1>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">${product.price}</p>
          
          <div className="product-rating">
            <StarRating rating={product.rating?.rate || 0} />
            <span className="rating-count">({product.rating?.count} reviews)</span>
          </div>
          
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage