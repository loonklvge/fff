import React from 'react'

const StarRating = ({ rating }) => {
  const fullStars = Math.round(rating)
  const stars = []

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<span key={i} className="star filled">★</span>)
    } else {
      stars.push(<span key={i} className="star">★</span>)
    }
  }

  return (
    <div className="star-rating">
      {stars}
      <span className="rating-text">({rating})</span>
    </div>
  )
}

export default StarRating