import React from 'react';

const RatingStars = ({ rating }) => {
  const roundedRating = Math.round(rating);
  
  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, index) => (
        <span 
          key={index} 
          className={index < roundedRating ? 'star filled' : 'star'}
        >
          {index < roundedRating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;