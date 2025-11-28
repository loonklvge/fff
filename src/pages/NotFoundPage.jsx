import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleGoToProducts = () => {
    navigate('/products')
  }

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={handleGoToProducts} className="products-button">
        Go to Products
      </button>
    </div>
  )
}

export default NotFoundPage